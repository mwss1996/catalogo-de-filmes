import styles from "./form.module.scss";

interface FormProps {}
export default function Form(props: FormProps) {
  return (
    <div className={styles.container}>
      <h1>Cadastrar Filme</h1>
      <form action="">
        <div className={styles.field}>
          <label htmlFor="title">Título</label>
          <input
            type="text"
            id="title"
            placeholder="Insira o título do filme"
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="description">Descrição</label>
          <input
            type="text"
            id="description"
            placeholder="Insira a descrição do filme"
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="coverURL">URL da capa</label>
          <input type="text" id="coverURL" placeholder="Insira a URL da capa" />
        </div>
        <div className={styles.field}>
          <label htmlFor="category">Categoria</label>
          <input
            type="text"
            id="category"
            placeholder="Insira a categoriia do filme"
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="streaming">Streaming</label>
          <input
            type="text"
            id="streaming"
            placeholder="Insira o streaming onde o filme está disponível"
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="rating">Nota</label>
          <input type="text" id="rating" placeholder="Insira a nota do filme" />
        </div>
        <button type="submit" className={styles.submitButton}>
          Salvar
        </button>
      </form>
    </div>
  );
}
