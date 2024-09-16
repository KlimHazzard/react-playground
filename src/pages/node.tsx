import React, { useState, useMemo, useCallback } from "react";
import GraphVisualization from "../components/GraphVisualization";
import { nodes, relationships } from "../data/nodes";

const MemoizedGraphVisualization = React.memo(GraphVisualization);

const Home = () => {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [hoveredRelationships, setHoveredRelationships] = useState<any[]>([]);

  const graphData = useMemo(
    () => ({
      nodes: nodes.map((node) => ({
        id: node.id,
        labels: [node.parent || "Root"],
        properties: { name: node.name },
      })),
      relationships: relationships.map((rel) => ({
        id: rel.id,
        type: rel.type,
        startNode: rel.from,
        endNode: rel.to,
        properties: {},
      })),
    }),
    []
  );

  const handleNodeHover = useCallback((nodeId: string | null, rels: any[]) => {
    setHoveredNode(nodeId);
    setHoveredRelationships(rels);
  }, []);

  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <h1>Neo4j Graph Visualization</h1>
      <div style={{ flex: 1, position: "relative" }}>
        <MemoizedGraphVisualization
          nodes={graphData.nodes}
          relationships={graphData.relationships}
          onNodeHover={handleNodeHover}
        />
      </div>
      <div style={{ padding: "10px", height: "200px", overflowY: "auto" }}>
        {hoveredNode && (
          <div>
            <h2>Hovered Node: {hoveredNode}</h2>
            <h3>Relationships:</h3>
            <ul>
              {hoveredRelationships.map((rel) => (
                <li key={rel.id}>
                  {rel.startNode} - {rel.type} - {rel.endNode}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
