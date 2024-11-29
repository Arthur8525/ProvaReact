import React from 'react';

const Home = () => {
  const totalEntradas = 6350;
  const totalSaidas = 4140;
  const saldoAtual = totalEntradas - totalSaidas;

  return (
    <div>
      <h2>Home</h2>
      <p>Total Entradas: {totalEntradas}</p>
      <p>Total Saídas: {totalSaidas}</p>
      <p>Saldo Atual: {saldoAtual}</p>
    </div>
  );
};

export default Home;