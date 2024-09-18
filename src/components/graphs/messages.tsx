import React, { useMemo, useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { api } from "@/src/utils/api";
import { ChevronLeft, ChevronRight, Eye, EyeOff } from "lucide-react";

const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const Messages: React.FC = () => {
  const [currentOrgIndex, setCurrentOrgIndex] = useState(0);
  const [showLegend, setShowLegend] = useState(false);
  const { data, isLoading, error } = api.user.getUserMessages.useQuery();

  const { chartDataByOrg, orgIds, userColorsByOrg, topUsersByOrg } =
    useMemo(() => {
      if (!data)
        return {
          chartDataByOrg: {},
          orgIds: [],
          userColorsByOrg: {},
          topUsersByOrg: {},
        };

      const chartDataByOrg: Record<string, any[]> = {};
      const userColorsByOrg: Record<string, Record<string, string>> = {};
      const messageTotalsByOrg: Record<string, Record<string, number>> = {};

      // Group data by organization
      data.forEach((item) => {
        if (!chartDataByOrg[item.organization_id]) {
          chartDataByOrg[item.organization_id] = [];
          userColorsByOrg[item.organization_id] = {};
          messageTotalsByOrg[item.organization_id] = {};
        }

        const date = new Date(item.created_at).toISOString().split("T")[0];
        let dateEntry = chartDataByOrg[item.organization_id].find(
          (entry) => entry.date === date
        );

        if (!dateEntry) {
          dateEntry = { date };
          chartDataByOrg[item.organization_id].push(dateEntry);
        }

        if (!dateEntry[item.name]) {
          dateEntry[item.name] = 0;
        }
        dateEntry[item.name]++;

        if (!userColorsByOrg[item.organization_id][item.name]) {
          userColorsByOrg[item.organization_id][item.name] = getRandomColor();
        }

        messageTotalsByOrg[item.organization_id][item.name] =
          (messageTotalsByOrg[item.organization_id][item.name] || 0) + 1;
      });

      // Sort data for each organization
      Object.keys(chartDataByOrg).forEach((orgId) => {
        chartDataByOrg[orgId].sort((a, b) => a.date.localeCompare(b.date));
      });

      // Get top 10 users for each organization
      const topUsersByOrg: Record<
        string,
        Array<{ name: string; count: number }>
      > = {};
      Object.keys(messageTotalsByOrg).forEach((orgId) => {
        topUsersByOrg[orgId] = Object.entries(messageTotalsByOrg[orgId])
          .map(([name, count]) => ({ name, count }))
          .sort((a, b) => b.count - a.count)
          .slice(0, 10);
      });

      const orgIds = Object.keys(chartDataByOrg);

      return { chartDataByOrg, orgIds, userColorsByOrg, topUsersByOrg };
    }, [data]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const currentOrgId = orgIds[currentOrgIndex];
  const currentChartData = chartDataByOrg[currentOrgId] || [];
  const currentOrgName = data?.find(
    (item) => item.organization_id === currentOrgId
  )?.organization_name;
  const currentUserColors = userColorsByOrg[currentOrgId] || {};
  const currentTopUsers = topUsersByOrg[currentOrgId] || [];

  const handlePrevOrg = () => {
    setCurrentOrgIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : orgIds.length - 1
    );
  };

  const handleNextOrg = () => {
    setCurrentOrgIndex((prevIndex) =>
      prevIndex < orgIds.length - 1 ? prevIndex + 1 : 0
    );
  };

  const toggleLegend = () => {
    setShowLegend((prev) => !prev);
  };

  return (
    <Card className="w-full max-w-6xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl flex justify-between items-center">
          <button onClick={handlePrevOrg} className="p-2">
            <ChevronLeft />
          </button>
          <span>User Message Count Timeline - {currentOrgName}</span>
          <button onClick={handleNextOrg} className="p-2">
            <ChevronRight />
          </button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {currentChartData.length > 0 ? (
          <>
            <div className="flex justify-end mb-4">
              <button
                onClick={toggleLegend}
                className="p-2 rounded-md bg-primary text-primary-foreground"
              >
                {showLegend ? (
                  <>
                    <EyeOff size={16} /> <span>Hide Legend</span>
                  </>
                ) : (
                  <>
                    <Eye size={16} /> <span>Show Legend</span>
                  </>
                )}
              </button>
            </div>
            <div className="h-[600px] mb-8">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={currentChartData}
                  margin={{ top: 20, right: 30, bottom: 20, left: 50 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis
                    dataKey="date"
                    tickFormatter={(date) =>
                      new Date(date).toLocaleDateString()
                    }
                    angle={-45}
                    textAnchor="end"
                    height={80}
                  />
                  <YAxis allowDecimals={false} />
                  <Tooltip
                    labelFormatter={(label) =>
                      new Date(label).toLocaleDateString()
                    }
                    formatter={(value, name) => [`${value} messages`, name]}
                  />
                  {showLegend && <Legend />}
                  {Object.keys(currentUserColors).map((name) => (
                    <Line
                      key={name}
                      type="monotone"
                      dataKey={name}
                      stroke={currentUserColors[name]}
                      strokeWidth={2}
                      dot={{ r: 4, fill: currentUserColors[name] }}
                      activeDot={{ r: 8, fill: currentUserColors[name] }}
                    />
                  ))}
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">
                Top 10 Users by Message Count:
              </h3>
              <ul className="list-disc pl-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {currentTopUsers.map(({ name, count }) => (
                  <li
                    key={name}
                    style={{ color: currentUserColors[name] }}
                    className="text-lg"
                  >
                    {name}: {count} messages
                  </li>
                ))}
              </ul>
            </div>
          </>
        ) : (
          <div>No data available for this organization</div>
        )}
      </CardContent>
    </Card>
  );
};

export default Messages;
