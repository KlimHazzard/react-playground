import type { AppType } from "next/app";
import { api } from "@/src/utils/api";

const MyApp: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default api.withTRPC(MyApp);
