import dynamic from "next/dynamic";
import React from "react";

const BasicNvlWrapper = dynamic(
  () => import("@neo4j-nvl/react").then((mod) => mod.BasicNvlWrapper),
  { ssr: false }
);

interface GraphVisualizationProps {
  nodes: { id: string; name: string; parent: string | null }[];
  relationships: { id: string; from: string; to: string }[];
}

const GraphVisualization: React.FC<GraphVisualizationProps> = ({
  nodes,
  relationships,
}) => {
  const graphData = {
    nodes: nodes.map((node) => ({
      id: node.id,
      labels: [node.parent || "Root"],
      properties: { name: node.name },
    })),
    relationships: relationships.map((rel) => ({
      id: rel.id,
      type: "RELATED_TO",
      startNodeId: rel.from,
      endNodeId: rel.to,
    })),
  };

  return (
    <div style={{ width: "100%", height: "100%", backgroundColor: "#f0f0f0" }}>
      <BasicNvlWrapper nodes={nodes} rels={relationships} />
    </div>
  );
};

export default GraphVisualization;
