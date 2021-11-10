import React from "react";
import { Container } from "react-bootstrap";
import style from "../Footer/Footer.module.css";
import { FaFacebook, FaWhatsapp, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <Container>
        <h2 className={style.footer__title}>Guayerd Bikes - Bicicletas de Competición y Urbanas.</h2>
        <section className={style.footer__copy}>
          <div className={style.footer__social}>
            <a href="#" className={style.footer__icons}><FaFacebook /></a>
            <a href="#" className={style.footer__icons}><FaWhatsapp /></a>
            <a href="#" className={style.footer__icons}> <FaInstagram /></a>
          </div>
          <h5 className={style.footer__copyright}>Derechos reservados &copy; Guayerd Bikes 2021</h5>
        </section>
      </Container>
    </footer>
  );
};

export default Footer;
