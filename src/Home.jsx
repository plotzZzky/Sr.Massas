import NavBar from './elements/navbar'
import Ifood from './media/ifood-logo.webp'
import IfoodRed from './media/ifood-logo-red.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

library.add(faGithub)


export default function App() {
  function go_to_profile() {
    location.href = `https://www.ifood.com.br/delivery/esteio-rs/senhor-das-massas-centro/4961bfb0-1a4f-46bb-a442-7811498ef1af`
  }

  return (
    <>
      <NavBar></NavBar>

      <div className='page background-image '>
        <div>
          <a className='big-title'> Sr. das Massas </a>
          <p className='subtitle'> O melhor da comida caseira e italiana na região</p>
          <button className='btn' onClick={go_to_profile}>
            <a> Peça já pelo </a>
            <img src={Ifood} className="ifood-logo"></img>
            <img src={IfoodRed} className="ifood-logo-red"></img>
          </button>
        </div>
      </div>

      <div className='page' id='about'>
        <a id="scroll"></a>
        <a className='title'>  Quem somos: </a>
        <p className='home-text'> Delivery de comida caseira feito com muito amor e carinho pela nossa equipe de ótimos profissionais </p>
        <p className='home-text'> Funcionamento das: 19:00 as 22:00 de Terça a Domingo </p>
        <a className='home-text'> Prove já uma de nossas delicias </a>

      </div>

      <footer>
        <a href='https://www.github.com/plotzzzky'> Dev: Plotzky <FontAwesomeIcon icon="fa-brands fa-github" /></a>
      </footer>
    </>
  )
}
