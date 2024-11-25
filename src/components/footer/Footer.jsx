import logoFacebook from '../../assets/logofacebook.png'
import logoTwitter from '../../assets/logotwitter.png'
import logoYoutube from '../../assets/logoyoutube.png'
import logoLinkedin from '../../assets/logolinkedin.png'
import logoInstagram from '../../assets/logoinstagram.png'
import s from './footer.module.scss'

export default function Footer() {
  return (
    <footer>
      <section className={s.contatosFooter}>
        <p>4002-8922</p>
        <nav>
          <a href=""><img src={logoFacebook} alt="" /></a>
          <a href=""><img src={logoTwitter} alt="" /></a>
          <a href=""><img src={logoYoutube} alt="" /></a>
          <a href=""><img src={logoLinkedin} alt="" /></a>
          <a href=""><img src={logoInstagram} alt="" /></a>
        </nav>
      </section>
      <section className={s.copyright}>
        <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024</p>
      </section>
    </footer>
  )
}