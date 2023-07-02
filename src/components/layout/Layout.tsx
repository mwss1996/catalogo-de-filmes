import Link from "next/link";
import styles from "./layout.module.scss";

interface LayoutProps {
  children: React.ReactNode;
  isAdmin?: boolean;
}
export default function Layout(props: LayoutProps) {
  return (
    <div className={[styles.root, props.isAdmin ? styles.admin : ""].join(" ")}>
      <header>
        <div className="width">
          <h1>
            <Link href={props.isAdmin ? "/admin" : "/"}>
              Catálogo de Filmes{" "}
              {props.isAdmin ? (
                <span className={styles.adminLabel}>ADMIN</span>
              ) : null}
            </Link>
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
