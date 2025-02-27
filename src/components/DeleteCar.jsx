import { Button, Modal } from "antd";
import React, { useState } from 'react'
import { DeleteOutlined } from "@ant-design/icons";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { delete_car } from "../JS/Actions/CarActions";

const DeleteCar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { id } = useParams();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  
  const handleDelete = () => {
    dispatch(delete_car(id, navigate));
  };
  return (
    <>
      <Button
        onClick={showModal}
        color="danger"
        variant="solid"
        icon={<DeleteOutlined />}
      >
        Delete
      </Button>

      <Modal
        title="Delete Car"
        okButtonProps={{
          style: { backgroundColor: "red", borderColor: "red" },
        }}
        open={isModalOpen}
        onOk={handleDelete}
        onCancel={handleCancel}
      >
        <h2>Are you sure you want to delete this Car?</h2>
      </Modal>
    </>
  );
}

export default DeleteCar