import React from 'react';

interface LinhaLivroProps {
  livro: {
    titulo: string;
    autor: string;
    codEditora: number;
    ano: number;
  };
  excluir: () => void;
}

export const LinhaLivro: React.FC<LinhaLivroProps> = ({ livro, excluir }) => {
  return (
    <tr>
      <td>{livro.titulo}</td>
      <td>{livro.autor}</td>
      <td>{livro.codEditora}</td>
      <td>{livro.ano}</td>
      <td>
        <button onClick={excluir}>Excluir</button>
      </td>
    </tr>
  );
};
