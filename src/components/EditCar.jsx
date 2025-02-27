import React, { useState } from "react";
import { Button, Modal } from "antd";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { EditOutlined } from "@ant-design/icons";
import { edit_car } from "../JS/Actions/CarActions";

const EditCar = () => {
  const dispatch = useDispatch();

  const {id} = useParams()

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [newCar, setNewCar] = useState({});

  const handleInputChange = (e) => {
    setNewCar({ ...newCar, [e.target.name]: e.target.value });
  };

  const handleEditCar = () => {
    dispatch(edit_car(id, newCar));
    handleCancel();
  };

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  console.log(newCar);
  return (
    <>
      <Button
        onClick={showModal}
        color="default"
        variant="outlined"
        icon={<EditOutlined />}
      >
        Edit
      </Button>
      <Modal
        title="Updating Car Information"
        open={isModalOpen}
        onOk={handleEditCar}
        onCancel={handleCancel}
      >
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base/7 font-semibold text-gray-900">
            Car Informations
          </h2>
          <p className="mt-1 text-sm/6 text-gray-600">
            Use a permanent address where you can receive mail.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="brand"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Car Brand name
              </label>
              <div className="mt-2">
                <input
                  id="brand"
                  onChange={(e) => handleInputChange(e)}
                  name="brand"
                  type="text"
                  autoComplete="given-name"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="model"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Car Model
              </label>
              <div className="mt-2">
                <input
                  onChange={(e) => handleInputChange(e)}
                  id="model"
                  name="model"
                  type="text"
                  autoComplete="family-name"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <div className="col-span-full">
                <label
                  htmlFor="description"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Description
                </label>
                <div className="mt-2">
                  <textarea
                    onChange={(e) => handleInputChange(e)}
                    id="description"
                    name="description"
                    rows={3}
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    defaultValue={""}
                  />
                </div>
                <p className="mt-3 text-sm/6 text-gray-600">
                  Write a few sentences about the car.
                </p>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="fuel"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Fuel
              </label>
              <div className="mt-2 grid grid-cols-1">
                <select
                  onChange={(e) => handleInputChange(e)}
                  id="fuel"
                  name="fuel"
                  autoComplete="country-name"
                  className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                >
                  <option value="Gasoline">Gasoline</option>
                  <option value="Diesel">Diesel</option>
                  <option value="Electric">Electric</option>
                  <option value="Hybrid">Hybrid</option>
                </select>
                <ChevronDownIcon
                  aria-hidden="true"
                  className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="price"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Price
              </label>
              <div className="mt-2">
                <input
                  onChange={(e) => handleInputChange(e)}
                  id="price"
                  name="price"
                  type="number"
                  autoComplete="address-level2"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="year"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Year
              </label>
              <div className="mt-2">
                <input
                  onChange={(e) => handleInputChange(e)}
                  id="year"
                  name="year"
                  type="number"
                  autoComplete="address-level2"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="street-address"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Image URL
              </label>
              <div className="mt-2">
                <input
                  onChange={(e) => handleInputChange(e)}
                  placeholder="https://google.com/images/carimage.png"
                  id="image"
                  name="image"
                  type="text"
                  autoComplete="image"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default EditCar;
