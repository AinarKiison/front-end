import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';

function Menyy() {
  const { t, i18n } = useTranslation();
  // return <h1>{t('Welcome to React')}</h1>


  return (
    <div>

      <button onClick={()=> i18n.changeLanguage("en")}>English</button>
      <button onClick={()=> i18n.changeLanguage("et")}>Eesti</button>
<br />
      <Link to="avaleht">
      <img  className="pilt" src="https://wonderfulengineering.com/wp-content/uploads/2014/10/image-wallpaper-15-1024x768.jpg" alt="lind" />
      </Link>
      <br />
      <Link to="/kontakteeru">
        <button className="nupp">{t("contact")}</button>
      </Link><br />
      <Link to="/osta-kinkekaart">
        <button className="nupp">{t("kinkekaart")}</button>
      </Link>
      
      
      <Link to="/seaded">
        <button className="nupp">Seaded</button>
      </Link>

      <Link to="/profiil">
        <button className="nupp">Profiil</button>
      </Link>
      <Link to="/logi-sisse">
        <button className="nupp">Logi Sisse</button>
      </Link>
      <Link to="/registreeru">
        <button className="nupp">Registreeru</button>
      </Link>

<br /><br />
      <Link to="/esindused">
        <button className="nupp">Esindused</button>
      </Link>
      
      <Link to="/hinnad">
        <button className="nupp">Hinnad</button>
      </Link>
      <Link to="/tootajad">
        <button className="nupp">Töötajad</button>
      </Link>
      <Link to="/tooted">
        <button className="nupp">Tooted</button>
      </Link>
      <Link to="/ostukorv">
        <button className="nupp">Ostukorv</button>
      </Link>
      <Link to="/shops">
        <button className="nupp">Shops</button>
      </Link>

<br />
      
      <Link to="/admin">
        <button className="nupp">Admin</button>
      </Link>


      
    </div>
  )
}

export default Menyy