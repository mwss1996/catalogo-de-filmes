import styles from "./search-bar.module.scss";

interface SearchBarProps {}
export default function SearchBar(props: SearchBarProps) {
  return (
    <div className={styles.container}>
      <label htmlFor="search">Buscar Filme</label>
      <input type="text" id="search" placeholder="Nome do filme..." />
    </div>
  );
}
