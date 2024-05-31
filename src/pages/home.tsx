// Home.jsx

import React from "react";
import Navbar from "../components/Navbar";
import Form from "../components/Form";

const Home = () => {
  return (
    <div>
      {/* Navbar  */}
      <Navbar />

      {/* texto explicativo e formulário */}
      <div className="relative min-h-screen bg-cover bg-center bg-hero">
        <div
          className="container mx-auto flex flex-col md:flex-row items-center justify-between py-12 px-4 relative z-10"
          style={{ paddingTop: "6rem" }}
        >
          {/* Seção de texto explicativo */}
          <div className="text-white max-w-lg md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Sistema de Delivery Interplanetário
            </h1>
            <p className="text-lg md:text-xl mb-6">
              Facilite suas entregas entre a Terra e Marte com nosso sistema de
              delivery interplanetário.
            </p>
          </div>
          {/* Seção que contém o formulário, com ID para âncora */}
          <div id="form-section" className="md:w-1/2 flex justify-end">
            <Form />
          </div>
        </div>
        {/* Overlay semi-transparente para efeito visual */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* seção com detalhes sobre o sistema */}
      <div className="bg-white py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Garanta menos esforço manual e mais agilidade no fluxo de
            informações
          </h2>
          <p className="text-lg md:text-xl mb-12">
            Nosso sistema de delivery interplanetário é projetado para maximizar
            a eficiência e segurança das entregas entre Marte e a Terra.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-4">
                Gestão de Entregas Interplanetárias
              </h3>
              <p className="text-base text-gray-700">
                Gerencie e automatize todas as entregas entre Marte e a Terra,
                garantindo eficiência e rastreamento em tempo real.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-4">
                Rastreamento Preciso de Lotes
              </h3>
              <p className="text-base text-gray-700">
                Em Marte, usamos lotes de quatro dígitos para identificar locais
                de armazenamento e fábricas, facilitando o rastreamento preciso
                das suas encomendas.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-4">
                Segurança e Confiabilidade
              </h3>
              <p className="text-base text-gray-700">
                Nosso sistema garante a segurança e a confiabilidade das
                entregas, com protocolos rigorosos para a transferência de
                mercadorias entre planetas.
              </p>
            </div>
          </div>
          <a href="#form-section">
            <button className="mt-8 bg-red-500 text-white font-semibold py-3 px-6 rounded-lg shadow hover:bg-red-600 transition duration-300">
              Otimize suas entregas interplanetárias hoje!
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
