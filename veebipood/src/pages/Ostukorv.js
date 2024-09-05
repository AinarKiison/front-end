import React from 'react'
import { Link } from 'react-router-dom'

function Ostukorv() {
  return (
    <div>
        <div>Ostukorv</div>
        <div>Mine tooteid lisama <Link to="/avaleht">avalehele</Link></div>
    </div>
  )
}

export default Ostukorv