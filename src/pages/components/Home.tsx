import { IMovie } from "@/database/Movie";
import Movies from "./Movies";
import SearchBar from "./SearchBar";
import styles from "./home.module.scss";

interface HomeProps {
  movies: IMovie[];
}
export default function Home(props: HomeProps) {
  return (
    <div className={styles.container}>
      <SearchBar />
      <Movies movies={props.movies} />
    </div>
  );
}
