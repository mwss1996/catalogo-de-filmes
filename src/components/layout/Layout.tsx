import Link from "next/link";
import styles from "./layout.module.scss";

interface LayoutProps {
  children: React.ReactNode;
}
export default function Layout(props: LayoutProps) {
  return (
    <div className={styles.root}>
      <header>
        <div className="width">
          <h1>
            <Link href="/">Catálogo de Filmes</Link>
          </h1>
        </div>
      </header>
      <main>
        <div className="width">{props.children}</div>
      </main>
      <footer>
        <div className="width">Desenvolvido por Michael Wallace</div>
      </footer>
    </div>
  );
}
