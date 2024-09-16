import { AppProps } from "next/app";

const AppWrapper: React.FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default AppWrapper;
