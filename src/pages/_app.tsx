import type { AppType } from "next/app";
import { api } from "@/src/utils/api";
import AppWrapper from "@/src/components/AppWrapper";

const MyApp: AppType = (props) => {
  return <AppWrapper {...props} />;
};

export default api.withTRPC(MyApp);
