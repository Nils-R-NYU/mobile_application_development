import { useState } from "react";
import Button from "../components/Button";
import Modal from "../components/Modal";

export default function ModalPage(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleClick = () => setIsModalOpen(true);
  const handleClose = () => setIsModalOpen(false);

  const actionBar = (
    <>
      <Button danger onClick={() => console.log("clicked danger btn")}>
        Cancel
      </Button>
      <Button success onClick={handleClose}>
        Ok
      </Button>
    </>
  );
  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      HALLOS
    </Modal>
  );

  return (
    <>
      <Button primary outline className="m-4" onClick={handleClick}>
        Open Modal
      </Button>
      <Button danger outline className="m-4" onClick={handleClose}>
        Close Modal
      </Button>
      {isModalOpen && modal}
    </>
  );
}
