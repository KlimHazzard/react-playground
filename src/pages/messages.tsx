import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { LineChart, Line, XAxis, CartesianGrid } from "recharts";
import { api } from "@/src/utils/api";

const Home: React.FC = () => {
  const { data, isLoading, error } = api.msg.getMsgs.useQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Data from PostgreSQL</CardTitle>
      </CardHeader>
      <CardContent>
        {data && data.length > 0 ? (
          <LineChart width={600} height={300} data={data}>
            <XAxis dataKey="message" />
            <CartesianGrid strokeDasharray="3 3" />
            <Line type="monotone" dataKey="value" stroke="#8884d8" />
          </LineChart>
        ) : (
          <div>No data available</div>
        )}
      </CardContent>
    </Card>
  );
};

export default Home;
