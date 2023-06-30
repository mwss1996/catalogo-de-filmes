import Layout from "@/components/layout/Layout";
import Home from "./components/Home";
import { GetStaticPropsResult } from "next";
import { IMovie, Movie } from "@/database/Movie";
import { connectMongo } from "@/database/mongo";

interface IndexStaticProps {
  movies: IMovie[];
}
interface IndexProps extends IndexStaticProps {}
export default function Index(props: IndexProps) {
  return (
    <Layout>
      <Home movies={props.movies} />
    </Layout>
  );
}
export async function getStaticProps(): Promise<
  GetStaticPropsResult<IndexStaticProps>
> {
  connectMongo();
  const movies = await Movie.find<IMovie>();
  return {
    props: {
      movies: JSON.parse(JSON.stringify(movies)),
    },
  };
}
