import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import Button from 'react-bootstrap/Button';


function Admin() {
    const { t } = useTranslation();


  return (
    <div>

      <Button as={Link} to ="/halda-esindused" variant="primary">{t("maintain-shops")}</Button>{' '}
      <Button as={Link} to ="/halda-hinnad" variant="secondary">Halda Hinnad</Button>{' '}
      <Button as={Link} to ="/lisa-toode" variant="success">Lisa Toode</Button>{' '}
      <Button as={Link} to ="/halda-tooted" variant="warning">Halda Tooted</Button>{' '}
      <Button as={Link} to ="/halda-tootajad" variant="info">Halda Töötajad</Button>{' '}
      
   
      {/* <Button variant="info">Info</Button>{' '} */}


      {/* <Link to="/halda-esindused">
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
      </Link> */}

    </div>
  )
}

export default Admin