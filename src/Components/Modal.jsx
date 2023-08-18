import { useState } from "react";
import MyModal from "./ShowModal";
import Data from "./data";

export default function Modal() {
  const [showModal, setShowModal] = useState(false);
  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <button onClick={() => setShowModal(true)}>Open Modal</button>
      {showModal && <MyModal closeModal={closeModal} />}
      <Data />
    </>
  );
}
