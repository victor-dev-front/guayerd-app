import { useContext } from "react";
import DataContext from "../../context/DataContext";
import style from "./Header.module.css";
import { Image } from "react-bootstrap";

const Header = () => {

    const {banner} = useContext(DataContext);
    const {imgUrl,title} = banner;
    return ( 
        <Image src={imgUrl} alt={title} className={style.banner} fluid />
     );
}
 
export default Header;