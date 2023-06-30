import styles from "./movie.module.scss";

interface MovieProps {
  id: string;
  coverUrl: string;
  title: string;
  streaming: string;
  rating: number;
}
export default function Movie(props: MovieProps) {
  return (
    <a href={"/movies/" + props.id} className={styles.container}>
      <img src={props.coverUrl} />
      <span className={styles.title}>{props.title}</span>
      <span>Streaming: {props.streaming}</span>
      <span>Nota: {props.rating}</span>
    </a>
  );
}
