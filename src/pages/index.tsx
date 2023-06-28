import { connectMongo } from "@/database/mongo";

export default function Index() {
  return <div>Teste</div>;
}
export async function getServerSideProps() {
  await connectMongo();
  return { props: {} };
}
