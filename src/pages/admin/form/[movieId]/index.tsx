import Layout from "@/components/layout/Layout";
import UpdateForm from "./components/UpdateForm";

export default function Index() {
  return (
    <Layout isAdmin>
      <UpdateForm />
    </Layout>
  );
}
