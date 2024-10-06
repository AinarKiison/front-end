
import { Link } from 'react-router-dom'
import KontaktAndmed from '../../components/KontaktAndmed'



function NotFound() {
  

  return (
    <div>
        <h2>Oh ei!</h2>
        <h4>Saiti ei leitud</h4>
        <p>Mine tagasi <Link to="/avaleht">Avalehele</Link></p>

       <KontaktAndmed />


    </div>
  )
}

export default NotFound