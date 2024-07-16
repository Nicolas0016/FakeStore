import React, { useState } from "react";
import "../styles/ModalVender.css";
import { Product } from "../types/storeTypes";
import { useAppContext } from "./context/AppContext";

interface ModalVenderProps {
  closeModal: () => void;
}

const ModalVender: React.FC<ModalVenderProps> = ({ closeModal }) => {
  const { dispatch } = useAppContext();

  const addProduct = (product: Product) => {
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

    const newProduct: Product = {
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
    <div className="bg-modal">
      <div className="modal-vender">
        <button className="button-close-modal" onClick={closeModal}>
          x
        </button>
        <form>
          <picture>
            <input type="file" name="image" onChange={handleFileChange} />
          </picture>
          <div>
            <label>
              <span>Name Product</span>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </label>
            <label>
              <span>Price</span>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
              />
            </label>
            <label>
              <span>Description</span>
              <input
                type="text"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
              />
            </label>
            <label>
              <span>Category</span>
              <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
              />
            </label>
            <button onClick={sendData}>Enviar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalVender;
