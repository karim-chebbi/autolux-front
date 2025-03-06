import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { clearErrors } from "../JS/Actions/AuthActions";
import { useDispatch } from "react-redux";

const ErrorsNotifications = ({ error }) => {

    const dispatch = useDispatch();

        const [show, setShow] = useState(true);

        useEffect(() => {
          setTimeout(() => {
            setShow(false);
            dispatch(clearErrors());
          }, 3000);
        }, [show, dispatch]);


  const customId = "";
  return (
    <div>
      {show && (
        <>
          {toast.error(error.msg, { toastId: customId })}
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
};

export default ErrorsNotifications;
