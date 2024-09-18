import type { AppType } from "next/app";
import { api } from "@/src/utils/api";
import { Layout } from "@/src/components/Layout";
import "../styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default api.withTRPC(MyApp);
