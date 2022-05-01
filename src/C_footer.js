import styles from "./C_footer.module.css"
import twitter from './Atwitter.jpg';
import facebook from './facebook_pink.jpg'
import instagram from "./instagram.jpg"

function Footer(){
    return(
        <footer>
        <div className={styles.rede_social}>
          <div className={styles.rede}>
            <div className={styles.foto_rede}>
              <img src={twitter}/>
            </div>
            <p>Twitter</p>
          </div>
          
          <div className={styles.rede}>
            <div className={styles.foto_rede}>
              <img src={facebook}/>

            </div>
            <p>Facebook</p>
          </div>

          <div className={styles.rede}>
            <div className={styles.foto_rede}>
              <img src={instagram}/>
            </div>
            <p>Instagram</p>
          </div>
        </div>

      </footer>
    );
}

export default Footer;