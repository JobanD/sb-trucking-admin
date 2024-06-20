"use client";
import { useState } from "react";
import Modal from "@/components/Modal";
import OrderForm from "@/components/OrderForm";

const OrdersPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <h1>Orders</h1>
      <button onClick={openModal} className="btn btn-primary">
        Add Order
      </button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <OrderForm onClose={closeModal} />
      </Modal>
    </div>
  );
};

export default OrdersPage;
