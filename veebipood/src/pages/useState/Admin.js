import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';

function Admin() {
    const { t } = useTranslation();


  return (
    <div>
      <Link to="/halda-esindused">
        <button className="nupp">{t("maintain-shops")}</button>
      </Link>
      <Link to="/halda-hinnad">
        <button className="nupp">Halda Hinnad</button>
      </Link>
      <Link to="/halda-tootajad">
        <button className="nupp">Halda Töötajad</button>
      </Link>
      <Link to="/halda-tooted">
        <button className="nupp">Halda Tooted</button>
      </Link>
      <Link to="/lisa-toode">
        <button className="nupp">Lisa toode</button>
      </Link>

    </div>
  )
}

export default Admin