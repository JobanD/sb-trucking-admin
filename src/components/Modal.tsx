// src/components/Modal.tsx
import React, { ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  return (
    <dialog open={isOpen} className="modal">
      {children}
      <button onClick={onClose} className="btn btn-secondary">
        Close
      </button>
    </dialog>
  );
};

export default Modal;
