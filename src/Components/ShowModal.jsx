import { useEffect } from "react";
import ReactDOM from "react-dom";

export default function MyModal({ closeModal }) {
  //to hide and unhide scroll bar
  useEffect(() => {
    //to hide scroll bar
    document.body.style.overflowY = "hidden";
    //clean up and to agin show scroll bar
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);

  return ReactDOM.createPortal(
    <>
      <div className="modal-wrapper" onClick={closeModal}></div>
      <div className="modal-container">
        <h2>STAY TUNED</h2>
        <p>Subscribe to our news channel for more updates.</p>
        <button onClick={closeModal}>Accept it</button>
      </div>
    </>,
    document.querySelector(".myPortalModalDiv")
  );
}
