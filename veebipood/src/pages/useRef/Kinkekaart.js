import React, {useRef ,useState} from 'react'
import KontaktAndmed from '../../components/KontaktAndmed';
import ostukorvJSON from "../../data/ostukorv.json";

function Kinkekaart() {
    const [summa, muudaSumma] = useState(20);
    const [kogus, muudaKogus] = useState(1);
    const [sonum, muudaSonum] = useState("");
    const emailRef = useRef();
    const emailSendRef = useRef();
    const [ isSend, muudaSend] = useState(false);
    

    // function lisaOstuKorvi(){
    // }
    const lisaOstuKorvi=()=>{
      if(emailSendRef.current.checked === false){
        muudaSonum("Kinkekaardid summas " + (summa * kogus) + " € lisatud");
        ostukorvJSON.push({
          "nimi": "Kinkekaart",
          "hind": summa * kogus,
          "aktiivne": true,
          "pilt": ".jpg",
          "keskus":""
        });
        return;
      }



      if (emailRef.current.value.includes("@")=== false) {
        muudaSonum("Email pole õige!!!");
      }else{
        muudaSonum("Kinkekaardid summas " + (summa * kogus) + " € lisatud")
      }
    }













    ostukorvJSON.push({
      "nimi": "Kinkekaart",
      "hind": summa * kogus,
      "aktiivne": true,
      "pilt": ".jpg",
      "keskus":""
    });













    //Siin on checkbox seega .checked
    const muudaEmailSend = ()=>{
      muudaSend(emailSendRef.current.checked);
    }
 
  return (
    <div> 
        <button className={summa === 20 ? "summa-aktiivne" : undefined} onClick={() => muudaSumma(20)}>20</button>
        <button className={summa === 50 ? "summa-aktiivne" : undefined}  onClick={() => muudaSumma(50)}>50</button>
        <button className={summa === 100 ? "summa-aktiivne" : undefined} onClick={() => muudaSumma(100)}>100</button>
        <div>Kinkekaart {summa} €</div>

        <br></br>
{/* span haarab oma osa aga div võtab terve rea */}
        <button disabled={kogus === 1} onClick={()=> muudaKogus(kogus - 1)}>-</button>
        <span>{kogus}</span>
        <button onClick={()=> muudaKogus(kogus + 1)}>+</button>

        <br></br>
        <br></br>

        <div>Kokku: {summa * kogus}€</div>
        <br />
        <label htmlFor="emailSend">Saada e-mailile</label>
        <input id="emailSend" onClick={muudaEmailSend} ref={emailSendRef} type="checkbox" />
        <br /><br />
        <div>{sonum}</div>
        {isSend === true &&<>
          <label>Email</label> <br></br>
          <input ref={emailRef} type="text" /><br />
        </>}
        <button onClick={lisaOstuKorvi}>Lisa ostukorvi</button><br /><br />

        <KontaktAndmed/>

    </div>
  )
}

export default Kinkekaart