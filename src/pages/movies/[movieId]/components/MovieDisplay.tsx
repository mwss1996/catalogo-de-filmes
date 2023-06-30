import styles from "./movie-display.module.scss";

interface MovieDisplayProps {}
export default function MovieDisplay(props: MovieDisplayProps) {
  return (
    <div className={styles.container}>
      <h1>O Senhor dos Aneis</h1>
      <div className={styles.block}>
        <div className={styles.left}>
          <img
            src={
              "https://br.web.img3.acsta.net/medias/nmedia/18/92/91/32/20224832.jpg"
            }
          />
        </div>
        <div className={styles.right}>
          <div>
            Localizada no mundo ficcional na Terra Média, os três filmes seguem
            o jovem hobbit Frodo Bolseiro em sua missão de destruir o "Um Anel",
            assegurando assim também a destruição de seu criador, o Senhor das
            Trevas Sauron. Para auxiliá-lo em sua tarefa, forma-se uma
            sociedade, composta por representantes dos humanos, hobbits, elfos e
            anões, encarregados de sua segurança pelos estranhos caminhos que
            terá que seguir.
          </div>
          <div>
            <b>Categoria</b>: Aventura
          </div>
          <div>
            <b>Streaming</b>: Prime Video
          </div>
          <div>
            <b>Nota</b>: 8
          </div>
        </div>
      </div>
    </div>
  );
}
