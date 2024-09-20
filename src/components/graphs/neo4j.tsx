import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic"; // Import dynamic from Next.js
import { api } from "@/src/utils/api";
import type { HitTargets, Node, Relationship } from "@neo4j-nvl/base";
import type { MouseEventCallbacks } from "@neo4j-nvl/react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";

// Dynamically import InteractiveNvlWrapper with no SSR
const InteractiveNvlWrapper = dynamic(
  () => import("@neo4j-nvl/react").then((mod) => mod.InteractiveNvlWrapper),
  { ssr: false }
);

const Neo4j: React.FC = () => {
  const [myNodes] = useState<Node[]>([
    { id: "0", size: 20 },
    { id: "1", size: 50 },
  ]);
  const [relationships] = useState<Relationship[]>([
    { id: "10", from: "0", to: "1" },
  ]);

  // Check if the component is mounted in the browser
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Set to true when the component mounts
  }, []);

  const mouseEventCallbacks: MouseEventCallbacks = {
    onHover: (
      element: Node | Relationship,
      hitTargets: HitTargets,
      evt: MouseEvent
    ) => console.log("onHover", element, hitTargets, evt),
    onRelationshipRightClick: (
      rel: Relationship,
      hitTargets: HitTargets,
      evt: MouseEvent
    ) => console.log("onRelationshipRightClick", rel, hitTargets, evt),
    onNodeClick: (node: Node, hitTargets: HitTargets, evt: MouseEvent) =>
      console.log("onNodeClick", node, hitTargets, evt),
    onNodeRightClick: (node: Node, hitTargets: HitTargets, evt: MouseEvent) =>
      console.log("onNodeRightClick", node, hitTargets, evt),
    onNodeDoubleClick: (node: Node, hitTargets: HitTargets, evt: MouseEvent) =>
      console.log("onNodeDoubleClick", node, hitTargets, evt),
    onRelationshipClick: (
      rel: Relationship,
      hitTargets: HitTargets,
      evt: MouseEvent
    ) => console.log("onRelationshipClick", rel, hitTargets, evt),
    onRelationshipDoubleClick: (
      rel: Relationship,
      hitTargets: HitTargets,
      evt: MouseEvent
    ) => console.log("onRelationshipDoubleClick", rel, hitTargets, evt),
    onCanvasClick: (evt: MouseEvent) => console.log("onCanvasClick", evt),
    onCanvasDoubleClick: (evt: MouseEvent) =>
      console.log("onCanvasDoubleClick", evt),
    onCanvasRightClick: (evt: MouseEvent) =>
      console.log("onCanvasRightClick", evt),
    onDrag: (nodes: Node[]) => console.log("onDrag", nodes),
    onPan: (evt: MouseEvent) => console.log("onPan", evt),
    onZoom: (zoomLevel: number) => console.log("onZoom", zoomLevel),
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Neo4J Rendering</CardTitle>
      </CardHeader>
      <CardContent>
        {isMounted ? ( // Render only if mounted
          (() => {
            console.log("Rendering <InteractiveNvlWrapper>"); // Log when rendering
            return (
              <div className="interactive-wrapper">
                <InteractiveNvlWrapper
                  nodes={myNodes}
                  rels={relationships}
                  mouseEventCallbacks={mouseEventCallbacks}
                />
              </div>
            );
          })() // Immediately invoke the function
        ) : (
          <div>No data available for this organization</div>
        )}
      </CardContent>
    </Card>
  );
};

export default Neo4j;
