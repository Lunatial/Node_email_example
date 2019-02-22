import Layout from "../components/Layout";
import { withRouter } from "next/router";
const randomWords = require("random-words");

const Post = ({ router }) => (
  <Layout title={router.query.title}>
    <div style={{ width: "80vw", marginTop: "2rem" }}>
      <p>
        {router.query.title.split(" ")[0]}{" "}
        {randomWords({ min: 63, max: 140, join: " " })}.
      </p>
      <p>{randomWords({ min: 63, max: 140, join: " " })}.</p>
      <p>{randomWords({ min: 63, max: 140, join: " " })}.</p>
    </div>
  </Layout>
);

export default withRouter(Post);
