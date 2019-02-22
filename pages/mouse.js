import Layout from "../components/Layout";
import dynamic from "next/dynamic";

const DynamicComponentWithNoSSR = dynamic(
  () => import("../components/MouseTracker"),
  {
    loading: () => (
      <Layout title="Move the mouse around!">
        <div className="spinner-container" style={{marginTop: "calc(40vh - 67px)"}}>
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      </Layout>
    ),
    ssr: false
  }
);

export default () => <DynamicComponentWithNoSSR />;
