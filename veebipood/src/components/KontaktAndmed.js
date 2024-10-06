import React, { useState } from 'react'

function KontaktAndmed() {
    const [showTel, muudaShowTel] = useState(true);

  return (
    <div>
        {/* Variant I */}
        {showTel === false && <button onClick={()=>muudaShowTel(true)}>Näita meie veebipoe telefoninumbrit</button>}
        {showTel === true && <button onClick={()=>muudaShowTel(false)}>Näita meie veebipoe emaili</button>}

        {/* Variant II */}
        {/* <button onClick={()=>muudaShowTel(!showTel)}>
            Näita meie veebipoe {showTel === true ? "emaili" : "telefoninumbrit"}
        </button> */}
        <br /><br />

        {showTel === true && <div>Telefon on: 5555555</div>}
        {showTel === false && <div>Email on: info@veebipood.ee</div>}
    </div>
  )
}

export default KontaktAndmed