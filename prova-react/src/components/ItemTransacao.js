import React from 'react';

const TransacaoItem = ({ descricao, entrada, saida, total }) => {
  return (
    <tr>
      <td>{descricao}</td>
      <td>{entrada.toFixed(2)}</td>
      <td>{saida.toFixed(2)}</td>
      <td>{total.toFixed(2)}</td>
    </tr>
  );
};

export default TransacaoItem;