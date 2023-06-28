import { connect } from "mongoose";
import { Movie } from "./Movie";

export async function connectMongo() {
  await connect(
    "mongodb+srv://root:1234@cluster0.ohz7guz.mongodb.net/?retryWrites=true&w=majority"
  );

  const movie = await Movie.create({
    title: "Teste",
    description: "Desc",
    coverURL: "url",
    category: "cat",
    streaming: "stream",
    rating: 8.2,
  });
}
