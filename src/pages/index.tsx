import Layout from "@/components/layout/Layout";
import Home from "./components/Home";

export default function Index() {
  return (
    <Layout>
      <Home />
    </Layout>
  );
}
export async function getServerSideProps() {
  //await connectMongo();
  return { props: {} };
}
