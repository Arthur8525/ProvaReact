import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ListaTransacao from "../components/ListaTransacao";

const Transacao = () => {
  return (
    <div className="container">
      <Header />
      <main>
        <h2>Transações</h2>
        <ListaTransacao />
      </main>
      <Footer />
    </div>
  );
};

export default Transacao;