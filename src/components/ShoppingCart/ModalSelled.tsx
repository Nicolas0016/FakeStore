import React from "react";

const MoldalSelled: React.FC<{ handleShowModal: () => void }> = ({
  handleShowModal,
}) => {
  return (
    <div className="bg-modal-selled">
      <div className="modal-selled">
        <span>Se compraron los productos</span>
        <button onClick={handleShowModal}>Cerrar</button>
      </div>
    </div>
  );
};
export default MoldalSelled;
