// Import the driver
import neo4j, { Integer, Node, Relationship } from "neo4j-driver";
import { createTRPCRouter, publicProcedure } from "../trpc";
// import { getNeo4jCredentials } from "../utils";

import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

// Neo4j Credentials
export function getNeo4jCredentials() {
  return {
    NEO4J_URI: process.env.NEO4J_URI || "",
    NEO4J_USERNAME: process.env.NEO4J_USERNAME || "",
    NEO4J_PASSWORD: process.env.NEO4J_PASSWORD || "",
  };
}

export const n4jRouter = createTRPCRouter({
  testConnection: publicProcedure.mutation(async () => {
    const { NEO4J_URI, NEO4J_USERNAME, NEO4J_PASSWORD } = getNeo4jCredentials();

    let driver;
    try {
      driver = neo4j.driver(
        NEO4J_URI,
        neo4j.auth.basic(NEO4J_USERNAME, NEO4J_PASSWORD)
      );
      await driver.verifyConnectivity();
      return {
        success: true,
        message: "Successfully connected to Neo4j; This is a msg from the API",
      };
    } catch (error) {
      console.error("Neo4j connection error:", error);
      throw new Error("Failed to connect to Neo4j");
    } finally {
      if (driver) {
        await driver.close();
      }
    }
  }),

  getNodesAndRelationships: publicProcedure.mutation(async () => {
    const { NEO4J_URI, NEO4J_USERNAME, NEO4J_PASSWORD } = getNeo4jCredentials();

    let driver;
    try {
      driver = neo4j.driver(
        NEO4J_URI,
        neo4j.auth.basic(NEO4J_USERNAME, NEO4J_PASSWORD)
      );

      const session = driver.session({ database: "neo4j" });

      const query = `MATCH (n)-[r]->(m) RETURN n, r, m`;
      const result = await session.run(query);
      return {
        success: true,
        message: `${result}`,
      };
    } catch (error) {
      console.error("Can't get nodes and relationships", error);
    } finally {
      if (driver) {
        await driver.close();
      }
    }
  }),
});

// async function main() {
//   const { NEO4J_URI, NEO4J_USERNAME, NEO4J_PASSWORD } = getNeo4jCredentials();

//   //   const driver = neo4j.driver(
//   //     NEO4J_URI,
//   //     neo4j.auth.basic(NEO4J_USERNAME, NEO4J_PASSWORD)
//   //   );

//   let driver;
//   try {
//     driver = neo4j.driver(
//       NEO4J_URI,
//       neo4j.auth.basic(NEO4J_USERNAME, NEO4J_PASSWORD)
//     );
//     const serverInfo = await driver.getServerInfo();
//     console.log("Connection established");
//     console.log(serverInfo);
//   } catch {
//     console.log(`Connection error`);
//   }

//   // const session = driver.session();

//   //   try {
//   //     //     // TODO: Run this Cypher statement using session.run()
//   //     const cypher = `MATCH (n)-[r]->(m) RETURN n,r,m`;
//   //     // const params = { title: "Toy Story" };

//   //     const res = await session.run(cypher);

//   //     console.log(res.records[0].get(0));
//   //   } finally {
//   //     await session.close();
//   //   }
// }

// main();

// // Import the driver
// import neo4j, { ManagedTransaction } from 'neo4j-driver'
// import { getNeo4jCredentials } from '../utils'

// // Neo4j Credentials
// const {
//   NEO4J_URI,
//   NEO4J_USERNAME,
//   NEO4J_PASSWORD
// } = getNeo4jCredentials()

// async function main() {
//   // Create a Driver Instance
//   const driver = neo4j.driver(
//     NEO4J_URI,
//     neo4j.auth.basic(NEO4J_USERNAME, NEO4J_PASSWORD)
//   )

//   // Open a new Session
//   const session = driver.session()

//   try {
//     const cypher = `
//       MATCH (m:Movie {title: "Matrix, The"})
//       CREATE (p:Person {name: $name})
//       CREATE (p)-[:ACTED_IN]->(m)
//       RETURN p
//     `
//     const params = { name: 'Jordan' }

//     // TODO: Execute the `cypher` statement in a write transaction
//     const res = await session.executeWrite(
//       tx => tx.run(cypher, params)
//     )
//     console.log(res.records[0].get(0))
//   }
//   finally {
//     // Close the session
//     await session.close()
//   }
// }

// main()
