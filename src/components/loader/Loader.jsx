import styles from "./Loader.module.scss"
import loaderImg from "../../assets/loader.gif"
import ReactDOM from 'react-dom';
import { FaSpinner } from "react-icons/fa";

const Loader = () => {
  return  ReactDOM.createPortal(
    <div className={styles.wrapper}>
           <div className={styles.loader}>
                <img src={loaderImg} alt='loading...'/>
           </div>
    </div>,
    document.getElementById("loader")
  )
}
export const Spinner = ()=>{
   return(
    <div className="--center-all">
            <img src={loaderImg} alt="loading... " width={40}/>
    </div>
   )
}
export default Loader