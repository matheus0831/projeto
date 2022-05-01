import styles from './C_cabecalho.module.css'
import logo from './logo_kep1er_.png';
import NAV from './C_nav';

function Cabecalho(){
    return(
        <header>
        <div className={styles.kepler}>
          <img src={logo}/>
        </div>
        <NAV></NAV>
        
      </header>

    );
}

export default Cabecalho