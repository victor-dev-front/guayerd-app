// Se invocan los estilos que se van a utilizar.
import style from "../mapaContacto/MapaContacto.module.css";

const MapaContacto = () => {
  return (
    <div className={style.container__mapa}>
      <h2 className={style.mapa}>
        <span className={style.ubicacion}>Dónde encontrarnos!</span>
      </h2>
      <div className={style.map__responsive}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.512780793885!2d-58.4500563851957!3d-34.59119276434157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb5f12e398ecd%3A0x98abf435fbfab70!2sAv.%20Corrientes%206237%2C%20C1427BPA%20CABA!5e0!3m2!1ses-419!2sar!4v1626215769377!5m2!1ses-419!2sar"
          title="Mapa"
          width="600"
          height="450"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default MapaContacto;
