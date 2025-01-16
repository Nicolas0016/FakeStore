import React, { useState } from "react";
import { TProduct } from "../types/storeTypes";
import { useAppContext } from "./context/AppContext";

interface ModalVenderProps {
  closeModal: () => void;
}

const ModalVender: React.FC<ModalVenderProps> = ({ closeModal }) => {
  const { dispatch } = useAppContext();

  const addProduct = (product: TProduct) => {
    dispatch({ type: "addProduct", payload: product });
  };

  const [formData, setFormData] = useState({
    name: "",
    img: null as File | null, // Para manejar el archivo de imagen
    price: 0,
    description: "",
    category: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]; // Obtener el primer archivo seleccionado
    if (file) {
      setFormData((prevData) => ({
        ...prevData,
        img: file,
      }));
    }
  };

  const sendData = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    // Crear un FormData para enviar el archivo de imagen junto con otros datos
    const formDataToSend = new FormData();
    formDataToSend.append("image", formData.img as Blob);
    formDataToSend.append("name", formData.name);
    formDataToSend.append("price", String(formData.price));
    formDataToSend.append("description", formData.description);
    formDataToSend.append("category", formData.category);

    // Aquí puedes realizar una petición para subir la imagen a tu servidor, si es necesario

    const newProduct: TProduct = {
      id: Date.now(),
      title: formData.name,
      price: formData.price,
      description: formData.description,
      category: formData.category,
      image: URL.createObjectURL(formData.img as Blob), // URL temporal para previsualizar la imagen
      rating: { rate: 0, count: 0 },
    };

    addProduct(newProduct);

    setFormData({
      name: "",
      img: null,
      price: 0,
      description: "",
      category: "",
    });
    closeModal();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 bg-opacity-50 z-[150]">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-800">
            Agregar Producto
          </h2>
          <button
            onClick={closeModal}
            className="text-gray-500 hover:text-gray-800 transition"
          >
            ✖
          </button>
        </div>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Imagen del Producto
            </label>
            <input
              type="file"
              name="image"
              onChange={handleFileChange}
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
            />
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Nombre del Producto
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Precio
              </label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Descripción
              </label>
              <input
                type="text"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Categoría
              </label>
              <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
          </div>
          <button
            type="button"
            onClick={sendData}
            className="mt-6 w-full px-4 py-2 bg-lightBlue text-white font-medium rounded-md shadow hover:bg-blue-700 transition"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalVender;
