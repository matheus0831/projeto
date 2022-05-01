import banner from './agalaxia_roxa.jpg';
import styles from './C_banner.module.css';

function Banner(){
    return(
        <div className={styles.banner}>
            <img src={banner}/>
        </div>
    );
}
export default Banner