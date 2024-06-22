"use client";
import { useState } from "react";
import Modal from "@/components/Modal";
import OrderForm from "@/components/forms/OrderForm";
import { Button } from "@/components/ui/button";

const OrderFormModal: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <Button onClick={openModal}>Add Order</Button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className="m-4">
          <OrderForm onClose={closeModal} />
        </div>
      </Modal>
    </div>
  );
};

export default OrderFormModal;
