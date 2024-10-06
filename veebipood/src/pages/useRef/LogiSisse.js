import React, { useRef } from 'react'
import { ToastContainer, toast } from 'react-toastify';

function LogiSisse() {
  const emailRef = useRef();
  const passwordRef = useRef();

  const login = () => {
    if(passwordRef.current.value !== "Midagi"){
      toast.error("Parool vale!")
      return;
    }
    toast.success("Edukalt sisselogitud!")
  }

  return (
    <div>
      <br />
      <label>Email</label><br />
      <input ref={emailRef} type="text" /><br /><br />
      <label>Salasõna</label><br />
      <input ref={passwordRef} type="password" /><br /><br />
      <button onClick={login}>Logi Sisse</button><br />

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
          // transition= "Bounce"
                                />
    </div>
  )
}

export default LogiSisse