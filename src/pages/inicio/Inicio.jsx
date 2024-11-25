import s from './inicio.module.scss'
import imagemComunidade from '../../assets/comunidade.png'
import imagemLeitura from '../../assets/leitura.png'
import imagemTransforma from '../../assets/transforma.png'
import imagemBalanca from '../../assets/balanca.png'

export default function Inicio(){
  return (
    <main>
      <section className={s.primeiraSessaoInicio}>
        <h2>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</h2>
      </section>
      <section className={s.porqueDoarSection}>
        <h2>Por que devo doar?</h2>
        <section className={s.cardsMotivos}>
          <section>
            <img src={imagemComunidade} alt="Imagem ilustrando Comunidade de livros" />
            <p>Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.</p>
          </section>
          <section>
            <img src={imagemLeitura} alt="Imagem ilustrando uma pessoa lendo" />
            <p>Estimula o hábito da leitura e o aprendizado contínuo.</p>
          </section>
          <section>
            <img src={imagemTransforma} alt="Imagem ilustrando o poder do hábito de leitura faz na vida da pessoa" />
            <p>Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas.</p>
          </section>
          <section>
            <img src={imagemBalanca} alt="Imagem ilustrando o poder de conseguir novas oportunidades através da leitura" />
            <p>Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado.</p>
          </section>
        </section>
      </section>
    </main>
  )
}