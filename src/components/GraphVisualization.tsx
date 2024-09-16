import React, { useCallback, useRef, useEffect, useState } from "react";
import dynamic from "next/dynamic";

const InteractiveNvlWrapper = dynamic(
  () => import("@neo4j-nvl/react").then((mod) => mod.InteractiveNvlWrapper),
  { ssr: false }
);

interface GraphVisualizationProps {
  nodes: { id: string; labels: string[]; properties: { name: string } }[];
  relationships: {
    id: string;
    type: string;
    startNode: string;
    endNode: string;
    properties: {};
  }[];
  onNodeHover: (nodeId: string | null, relationships: any[]) => void;
}

const GraphVisualization: React.FC<GraphVisualizationProps> = ({
  nodes,
  relationships,
  onNodeHover,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const graphDataRef = useRef({ nodes, relationships });

  useEffect(() => {
    if (!isLoaded) {
      setIsLoaded(true);
    }
  }, [isLoaded]);

  const styleData = {
    nodes: {
      default: { color: "#A5ABB6" },
      hover: { color: "#68BDF6" },
    },
    relationships: {
      default: { color: "#D4D6D7", width: 1 },
    },
  };

  const handleNodeHover = useCallback(
    (hoveredNode: any) => {
      if (hoveredNode && hoveredNode.id) {
        const nodeRelationships = graphDataRef.current.relationships.filter(
          (rel) =>
            rel.startNode === hoveredNode.id || rel.endNode === hoveredNode.id
        );
        onNodeHover(hoveredNode.id, nodeRelationships);
      } else {
        onNodeHover(null, []);
      }
    },
    [onNodeHover]
  );

  const handleMouseOut = useCallback(() => {
    onNodeHover(null, []);
  }, [onNodeHover]);

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ width: "100%", height: "100%", backgroundColor: "#f0f0f0" }}>
      <InteractiveNvlWrapper
        nodes={graphDataRef.current.nodes}
        relationships={graphDataRef.current.relationships}
        styleData={styleData}
        mouseEventCallbacks={{
          onHover: handleNodeHover,
          onMouseOut: handleMouseOut,
        }}
        initialZoom={1}
        maxZoom={2}
        minZoom={0.5}
      />
    </div>
  );
};

export default GraphVisualization;
