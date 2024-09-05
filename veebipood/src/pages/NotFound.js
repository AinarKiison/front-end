import React from 'react'
import { Link } from 'react-router-dom'


function NotFound() {
  return (
    <div>
        <h2>Oh ei!</h2>
        <h4>Saiti ei leitud</h4>
        <p>Mine tagasi <Link to="/avaleht">Avalehele</Link></p>
    </div>
  )
}

export default NotFound