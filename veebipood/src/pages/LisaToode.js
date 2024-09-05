import React, { useState } from 'react'

function LisaToode() {
  const [sonum, muudaSonum] = useState("Lisa uus toode!");

  return (
    <div>
      
      <div>{sonum}</div>
      {/* ctrl + ä */}
      <label htmlFor="nimi">Toote nimi: </label><br />
      <input id="nimi" type="text" /><br />
      <button onClick={() => muudaSonum("Toode lisatud! ")}>Lisa</button><br />
      
    </div>
  )
}
//div hõimab terve rea. Ei pea br panema
export default LisaToode