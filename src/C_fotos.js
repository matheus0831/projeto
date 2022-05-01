import styles from "./C_fotos.module.css";
import Chaehyun from './Chaehyun_figma.jpg';
import Yujin from './Yujin_Figma.jpg';
import Xiaoting from './Xiaoting_Figma.jpg';
import Bahilda from './Bahilda_figma.jpg';
import Yeseo from './Yeseo_figma.jpg';
import Hikaru from './Hikaru_figma.jpg';
import Mashiro from './Mashiro_figma.jpg';
import Dayeon from './Dayeon_figma.jpg';
import Youngeun from './Youngeun_figma.jpg';
import circulo from './icone-cercle-violet.png';

function Fotos(){
    return(
        <div>
        <div className={styles.fotos_integrantes}>
          <div className={styles.integrante_um}>
            <div className={styles.foto_integrante}>
              <img src={Chaehyun}/>
            </div>
            <h1>Kim Chaehyun</h1>
          </div>
          <div className={styles.integrante_dois}>
            <div className={styles.foto_integrante}>
              <img src={Yujin}/>
            </div>
            <h1>Choi Yujin</h1>
          </div>
          <div className={styles.integrante_tres}>
            <div className={styles.foto_integrante}>
              <img src={Xiaoting}/>
            </div>
            <h1>Shen Xiaoting</h1>
          </div>
        </div>

        <div className={styles.fotos_integrantes_um}>
          <div className={styles.integrante_um}>
            <div className={styles.foto_integrante}>
              <img src={Bahilda}/>
            </div>
            <h1>Huening Bahiyyih</h1>
          </div>
          <div className={styles.integrante_dois}>
            <div className={styles.foto_integrante}>
              <img src={Yeseo}/>
            </div>
            <h1>Kang Yeseo</h1>
          </div>
          <div className={styles.integrante_tres}>
            <div className={styles.foto_integrante}>
              <img src={Hikaru}/>
            </div>
            <h1>Ezaki Hikaru</h1>
          </div>
        </div>

        <div className={styles.fotos_integrantes_dois}>
          <div className={styles.integrante_um}>
            <div className={styles.foto_integrante}>
              <img src={Mashiro}/>
            </div>
            <h1>Sakamoto Mashiro</h1>
          </div>
          <div className={styles.integrante_dois}>
            <div className={styles.foto_integrante}>
              <img src={Dayeon}/>
            </div>
            <h1>Kim Dayeon</h1>
          </div>
          <div className={styles.integrante_tres}>
            <div className={styles.foto_integrante}>
              <img src={Youngeun}/>
            </div>
            <h1>Seo Youngeun</h1>
          </div>
          </div>
        </div>
    );
}

export default Fotos;