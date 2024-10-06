import React, { useRef } from 'react'
import { ToastContainer, toast } from 'react-toastify';

function Registreeru() {
  const emailRef = useRef();
  const passwordRef = useRef();

  const registreeri = () => {
    if (emailRef.current.value === ""){
      //viga
      toast.error("Email on tühi!!!");
    return;// lõpetab funktsiooni
    }
    if (emailRef.current.value.includes("@") === false){
      toast.error("Email vajab @!");
    return;
    }

    // 5-s täht peab olema n 
    if (emailRef.current.value.startsWith("n", 4) === false){
      toast.error('1.Viies täht peab olema "n"');
    return;
    }
    // //kontrollin, et viies täht ei ole N
    // if (emailRef.current.value.charAt(4) !== "n"){
    //   toast.error('2.Viies täht peab olema "n"');
    // return;
    // }
    // //kontrollin, et viies täht ei ole N
    // if (emailRef.current.value.at(4) !== "n"){
    //   toast.error('3.Viies täht peab olema "n"');
    // return;
    // }
    // //kontrollin, et viies täht ei ole N
    // if (emailRef.current.value[4] !== "n"){
    //   toast.error('4.Viies täht peab olema "n"');
    // return;
    // }


    if (passwordRef.current.value.length !== 6){
      toast.error("Salasõna liiga väike!");
    return;
    }
  
    //midagi12 === Midagi12
    if (passwordRef.current.value.toLowerCase() === passwordRef.current.value){
      toast.error("Parool ei sisalda suurt tähte!");
    return;
    }
    toast.success("Edukalt registreeritud!");
}


  return (
    <div><br />
      <label>Email</label><br />
      <input ref={emailRef} type="text" /><br /><br />
      <label>Salasõna</label><br />
      <input ref={passwordRef} type="password" /><br /><br />
      <button onClick={registreeri}>Registreeri</button><br />
      
      <ToastContainer
      position="top-right"
      autoClose={1000}
      // hideProgressBar={false}
      // newestOnTop={false}
      // closeOnClick
      // rtl={false}
      // pauseOnFocusLoss
      // draggable
      // pauseOnHover
      theme="dark"
                          />
    </div>
  )
}

export default Registreeru