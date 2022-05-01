import Fotos from "./C_fotos";
import styles from "./C_conteudo.module.css";
import circulo from './icone-cercle-violet.png';
import kepler from './Kepler.jpg';
import branco from './astro_branco.jpg';
import roxo from './planeta_roxo.jpg'
import amarelo from './solzao.jpg'
import azul from './azul_sol.jpg'

function Conteudo() {
    return(
        <div className={styles.conteudo}>
        <div className={styles.titulo}>
          <div className={styles.circle}>
            <img src={circulo}/>
          </div>
          <h1>História</h1>
        </div>
        <div className={styles.foto_grupo}>
          <img src={kepler}/>
        </div>
        <div className={styles.astro_1}>
          <img src={branco}/>
        </div>
        <div className={styles.astro_2}>
          <img src={roxo}/>
        </div>
        <div className={styles.astro_3}>
          <img src={amarelo}/>
        </div>
        <div className={styles.astro_4}>
          <img src={azul}/>
        </div>
        <div className={styles.paragrafo}>
          <p>Kep1er é um grupo formado pelo reality show "Girls Planet 999", com a premissa de juntar China, Coreia do Sul e Japão para formar um grupo feminino global. O grupo contém nove integrantes sendo elas: Xiaoting, Hikaru, Mashiro, Yeseo, Dayeon, Chaehyun, Bahiyyih, Yujin e Youngeun.
          <br/>O grupo estreou com o mini-álbum "First Impact" em janeiro de 2022, contendo músicas de sucesso como: Wadada, MVSK, Shine, Another Dream e O.O.O.</p>
        </div>
        <div className={styles.titulo}>
          <div className={styles.circle}>
            <img src={circulo}/>
          </div>
          <h1>Integrantes</h1>
        </div>
        <Fotos></Fotos>
      </div>
    );
}

export default Conteudo