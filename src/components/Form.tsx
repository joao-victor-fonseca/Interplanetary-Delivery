import React, { useState } from "react";

const Form = () => {
  // Estado para armazenar os dados do formulário
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    origin: "",
    destination: "",
    cargoType: "",
    cargoWeight: "",
    agreement: false,
    planet: "Terra",
  });

  // Estado para controlar o envio do formulário
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Função para lidar com a alteração nos campos do formulário
  const handleChange = (
    e: React.ChangeEvent<
      | HTMLInputElement
      | HTMLSelectElement
      | HTMLTextAreaElement
      | HTMLInputElement
    >
  ) => {
    const { name, value, type } = e.target;

    // Verifica se o campo é uma caixa de seleção
    if (type === "checkbox") {
      const isChecked = (e.target as HTMLInputElement).checked;
      setFormData({ ...formData, [name]: isChecked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormSubmitted(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      origin: "",
      destination: "",
      cargoType: "",
      cargoWeight: "",
      agreement: false,
      planet: formData.planet, // Mantém o planeta selecionado após o envio
    });
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };

  // Função para renderizar os campos de endereço com base no planeta selecionado
  const renderAddressFields = () => {
    if (formData.planet === "Terra") {
      return (
        <>
          <div className="col-span-2">
            <label className="block text-gray-700">Endereço de destino*</label>
            <input
              className="w-full px-3 py-2 border rounded-lg"
              type="text"
              name="destination"
              value={formData.destination}
              onChange={handleChange}
            />
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="col-span-2">
            <label className="block text-gray-700">
              Lote de quatro dígitos*
            </label>
            <input
              className="w-full px-3 py-2 border rounded-lg"
              type="text"
              name="destination"
              value={formData.destination}
              onChange={handleChange}
            />
          </div>
        </>
      );
    }
  };

  // Renderização do componente Form

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
      <h2 className="text-2xl font-bold mb-4">
        Solicite uma entrega interplanetária
      </h2>
      <p className="mb-4 text-gray-700">
        Complete os dados a seguir para solicitar uma entrega entre a Terra e
        Marte:
      </p>
      {/* Mostra uma mensagem de sucesso após o envio do formulário */}
      {formSubmitted && (
        <div className="mb-4 p-3 bg-green-200 text-green-700 rounded-lg">
          Formulário enviado com sucesso!
        </div>
      )}
      {/* Formulário para capturar os dados */}
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700">Nome*</label>
            <input
              className="w-full px-3 py-2 border rounded-lg"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Email*</label>
            <input
              className="w-full px-3 py-2 border rounded-lg"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Telefone*</label>
            <input
              className="w-full px-3 py-2 border rounded-lg"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Empresa*</label>
            <input
              className="w-full px-3 py-2 border rounded-lg"
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-span-2">
            <label className="block text-gray-700">Endereço de origem*</label>
            <input
              className="w-full px-3 py-2 border rounded-lg"
              type="text"
              name="origin"
              value={formData.origin}
              onChange={handleChange}
            />
          </div>
          <div className="col-span-2">
            <label className="block text-gray-700">Planeta para envio*</label>
            <select
              className="w-full px-3 py-2 border rounded-lg"
              name="planet"
              value={formData.planet}
              onChange={handleChange}
            >
              <option value="Terra">Terra</option>
              <option value="Marte">Marte</option>
            </select>
          </div>
          {/* Renderiza campos adicionais com base no planeta selecionado */}
          {renderAddressFields()}
          <div className="col-span-2">
            <label className="block text-gray-700">Tipo de carga*</label>
            <select
              className="w-full px-3 py-2 border rounded-lg"
              name="cargoType"
              value={formData.cargoType}
              onChange={handleChange}
            >
              <option>Selecione</option>
              <option>Eletrônicos</option>
              <option>Alimentos</option>
              <option>Medicamentos</option>
            </select>
          </div>
          <div className="col-span-2">
            <label className="block text-gray-700">Peso da carga (kg)*</label>
            <input
              className="w-full px-3 py-2 border rounded-lg"
              type="number"
              name="cargoWeight"
              value={formData.cargoWeight}
              onChange={handleChange}
            />
          </div>
          <div className="col-span-2">
            <label className="flex items-center text-gray-700">
              <input
                type="checkbox"
                className="mr-2"
                name="agreement"
                checked={formData.agreement}
                onChange={handleChange}
              />
              Eu concordo em receber comunicações.
            </label>
          </div>
          {/* Botão para enviar o formulário */}
          <div className="col-span-2">
            <button className="bg-blue-500 text-white px-6 py-2 rounded-lg w-full">
              Solicitar Entrega
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
