import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import {  ToastContainer, toast } from "react-toastify";
import { clearSuccess } from '../JS/Actions/AuthActions';

const SuccessNotifications = ({success}) => {
    const dispatch = useDispatch()

    const [show, setShow] = useState(true)


    useEffect(() => {
        setTimeout(() => {
            setShow(false)
            dispatch(clearSuccess())
        }, 3000);
    }, [show, dispatch])
    


      const customId = "";
  return (
    <div>
      {show && (
        <>
          {toast.success(success.msg, { toastId: customId })}
          <ToastContainer
            position="top-right"
            autoClose={1500}
            hideProgressBar={true}
            newestOnTop={true}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            pauseOnHover
            draggable
            className="toast-text"
            theme="dark"
            limit={1}
          />
        </>
      )}
    </div>
  );
}

export default SuccessNotifications