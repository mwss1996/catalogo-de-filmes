import Layout from "@/components/layout/Layout";
import MovieDisplay from "./components/MovieDisplay";
import { connectMongo } from "@/database/mongo";
import { IMovie, Movie } from "@/database/Movie";
import { GetStaticPropsContext, GetStaticPropsResult } from "next";

interface IndexStaticProps {
  movie: IMovie;
}
interface IndexProps extends IndexStaticProps {}
export default function Index(props: IndexProps) {
  return (
    <Layout>
      <MovieDisplay />
    </Layout>
  );
}
export async function getStaticProps(
  context: GetStaticPropsContext
): Promise<GetStaticPropsResult<IndexStaticProps>> {
  const movieId = (context.params as any)["movieId"] as string;
  await connectMongo();
  const movie = await Movie.findById<IMovie>(movieId);
  return {
    props: {
      movie: JSON.parse(JSON.stringify(movie)),
    },
  };
}
export async function getStaticPaths() {
  await connectMongo();
  const movies = await Movie.find<IMovie>().select({});
  console.log(movies);
  return {
    paths: [],
    fallback: false,
  };
}
