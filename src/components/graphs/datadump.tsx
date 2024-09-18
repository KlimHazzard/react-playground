import React, { useMemo } from "react";
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

const colors = ["#FFD700", "#4169E1", "#32CD32", "#FF0000", "#8A2BE2"];

const DataDump: React.FC = () => {
  const { data, isLoading, error } =
    api.user.getSystemAdminUserMessages.useQuery();

  const { chartData, userNames, totalCounts } = useMemo(() => {
    if (!data) return { chartData: [], userNames: [], totalCounts: {} };

    const messageCounts: Record<string, Record<string, number>> = {};
    const totalCounts: Record<string, number> = {};

    data.forEach((item) => {
      const date = new Date(item.created_at).toISOString().split("T")[0];
      if (!messageCounts[date]) {
        messageCounts[date] = {};
      }
      messageCounts[date][item.name] =
        (messageCounts[date][item.name] || 0) + 1;
      totalCounts[item.name] = (totalCounts[item.name] || 0) + 1;
    });

    const chartData = Object.entries(messageCounts)
      .map(([date, counts]) => ({
        date,
        ...counts,
      }))
      .sort((a, b) => a.date.localeCompare(b.date));

    const userNames = [...new Set(data.map((item) => item.name))].slice(0, 5);

    return { chartData, userNames, totalCounts };
  }, [data]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  console.log("Processed chart data:", chartData);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Daily Message Count Timeline</CardTitle>
      </CardHeader>
      <CardContent>
        {chartData && chartData.length > 0 ? (
          <>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart
                data={chartData}
                margin={{ top: 20, right: 20, bottom: 20, left: 50 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="date"
                  tickFormatter={(date) => new Date(date).toLocaleDateString()}
                />
                <YAxis allowDecimals={false} />
                <Tooltip
                  labelFormatter={(label) =>
                    new Date(label).toLocaleDateString()
                  }
                  formatter={(value, name) => [`${value} messages`, name]}
                />
                <Legend />
                {userNames.map((name, index) => (
                  <Line
                    key={name}
                    type="monotone"
                    dataKey={name}
                    stroke={colors[index]}
                    activeDot={{ r: 8 }}
                  />
                ))}
              </LineChart>
            </ResponsiveContainer>
            <div className="mt-4">
              <h3 className="text-lg font-semibold">Total Message Counts:</h3>
              <ul className="list-disc pl-5">
                {userNames.map((name, index) => (
                  <li key={name} style={{ color: colors[index] }}>
                    {name}: {totalCounts[name]} messages
                  </li>
                ))}
              </ul>
            </div>
          </>
        ) : (
          <div>No data available</div>
        )}
      </CardContent>
    </Card>
  );
};

export default DataDump;
