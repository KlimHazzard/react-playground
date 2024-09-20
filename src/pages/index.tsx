import React, { useState } from "react";
//import Node from "../components/graphs/node";
import Neo4j from "../components/graphs/neo4j";
import Messages from "../components/graphs/messages";
import DataDump from "../components/graphs/datadump";
import { DarkModeToggle } from "../components/Darkmode";

const Home: React.FC = () => {
  const [activePage, setActivePage] = useState<string | null>(null);

  const renderActivePage = () => {
    switch (activePage) {
      case "node":
        //return <Node />;
        return <Neo4j />;
      case "messages":
        return <Messages />;
      case "Admin Messages":
        return <DataDump />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background dark:bg-gray-900 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-foreground dark:text-white">
            Playing with Graphs
          </h1>
          <DarkModeToggle />
        </div>

        <div className="grid grid-cols-3 gap-4 mb-8">
          {["node", "messages", "Admin Messages"].map((page) => (
            <button
              key={page}
              onClick={() => setActivePage(page)}
              className={`p-4 rounded-lg text-lg font-semibold transition-colors
                ${
                  activePage === page
                    ? "bg-primary text-primary-foreground dark:bg-blue-600 dark:text-white"
                    : "bg-card text-card-foreground dark:bg-gray-700 dark:text-gray-200 hover:bg-primary/10 dark:hover:bg-gray-600"
                }`}
            >
              {page.charAt(0).toUpperCase() + page.slice(1)}
            </button>
          ))}
        </div>

        {activePage ? (
          <div className="bg-card dark:bg-gray-800 rounded-lg p-6 shadow-lg">
            {renderActivePage()}
          </div>
        ) : (
          <p className="text-muted-foreground dark:text-gray-400 text-center">
            Select a page to view its content
          </p>
        )}
      </div>
    </div>
  );
};

export default Home;

// import GraphVisualization from "../components/GraphVisualization";
// import { nodes, relationships } from "../data/nodes";

// const Home = () => {
//   return (
//     <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
//       <h1>Neo4j Graph Visualization</h1>
//       <div style={{ flex: 1 }}>
//         <GraphVisualization nodes={nodes} relationships={relationships} />
//       </div>
//     </div>
//   );
// };

// export default Home;
