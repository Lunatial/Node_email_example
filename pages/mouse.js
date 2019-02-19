import dynamic from "next/dynamic";

const DynamicComponentWithNoSSR = dynamic(
  () => import("../components/MouseTracker"),
  {
    ssr: false
  }
);

export default () => <DynamicComponentWithNoSSR />;
