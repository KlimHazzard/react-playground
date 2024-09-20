import React, { useState } from "react";
import { api } from "@/src/utils/api";

const Sandbox: React.FC = () => {
  const [connectionStatus, setConnectionStatus] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const testConnectionMutation = api.neo4j.testConnection.useMutation({
    onSuccess: (data) => {
      setConnectionStatus(`${data.message}`);
    },
    onError: (error) => {
      setConnectionStatus(`Error: ${error.message}`);
    },
  });

  const testNeo4jConnection = async () => {
    setLoading(true);
    try {
      await testConnectionMutation.mutateAsync();
    } finally {
      setLoading(false);
    }
  };

  const getNodesAndRelationshipsMutation =
    api.neo4j.getNodesAndRelationships.useMutation({
      onSuccess: (data) => {
        setConnectionStatus(`${data.message}`);
      },
      onError: (error) => {
        setConnectionStatus(`Error: ${error.message}`);
      },
    });

  const getNodesAndRelationships = async () => {
    setLoading(true);
    try {
      await getNodesAndRelationshipsMutation.mutateAsync();
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Neo4j Connection Test</h1>
      <button onClick={testNeo4jConnection} disabled={loading}>
        {loading ? "Testing..." : "Test Neo4j Connection"}
      </button>
      <br />
      <br />
      <button onClick={getNodesAndRelationships} disabled={loading}>
        {loading ? "Getting..." : "Get Nodes and Relationships"}
      </button>
      <p>{connectionStatus}</p>
    </div>
  );
};

export default Sandbox;
