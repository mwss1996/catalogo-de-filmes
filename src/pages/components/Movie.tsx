import styles from "./movie.module.scss";

interface MovieProps {
  coverUrl: string;
  title: string;
  streaming: string;
  rating: number;
}
export default function Movie(props: MovieProps) {
  return (
    <div className={styles.container}>
      <img src={props.coverUrl} />
      <span className={styles.title}>{props.title}</span>
      <span>Streaming: {props.streaming}</span>
      <span>Nota: {props.rating}</span>
    </div>
  );
}
