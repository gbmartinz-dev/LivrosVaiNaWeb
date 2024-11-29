import livroProtagonista from '../../assets/livro1Exemplo.png'
import s from './livrosDoados.module.scss'

export default function LivrosDoados() {
  return (
    <section className={s.livrosDoadosSection}>
      <h2>Livros Doados</h2>
      <section className={s.containerCards}>
        <section>
          <img src={livroProtagonista} alt="Imagem do livro Protagonista" />
          <div>
          <h3>O Protagonista</h3>
          <p>Susane Andrade</p>
          <p>Ficção</p>
          </div>
        </section>
      </section>
    </section>
  )
}