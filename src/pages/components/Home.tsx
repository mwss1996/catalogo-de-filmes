import Movies from "./Movies";
import SearchBar from "./SearchBar";
import styles from "./home.module.scss";

interface HomeProps {}
export default function Home() {
  return (
    <div className={styles.container}>
      <SearchBar />
      <Movies />
    </div>
  );
}
