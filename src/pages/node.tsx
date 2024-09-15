import GraphVisualization from "../components/GraphVisualization";
import { nodes, relationships } from "../data/nodes";

const Home = () => {
  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <h1>Neo4j Graph Visualization</h1>
      <div style={{ flex: 1 }}>
        <GraphVisualization nodes={nodes} relationships={relationships} />
      </div>
    </div>
  );
};

export default Home;
