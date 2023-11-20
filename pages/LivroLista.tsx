import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { Menu } from '../componentes/Menu';
import { LinhaLivro } from '../componentes/LinhaLivro';
import styles from '../styles/Home.module.css';

// Definir a constante com o nome baseURL
const baseURL = "http://localhost:3000/api/livros";

// Criar a função obter, assíncrona
const obter = async () => {
  const resposta = await fetch(baseURL);
  return resposta.json();
};

// Criar a função excluirLivro, assíncrona
const excluirLivro = async (codigo: number) => {
  const resposta = await fetch(`${baseURL}/${codigo}`, { method: 'DELETE' });
  return resposta.ok;
};

const LivroLista: React.FC = () => {
  const [livros, setLivros] = useState<Array<{ titulo: string; autor: string; codEditora: number; ano: number }>>([]);
  const [carregado, setCarregado] = useState<boolean>(false);

  useEffect(() => {
    obter().then((data) => {
      setLivros(data);
      setCarregado(true);
    });
  }, [carregado]);

  const excluir = async (codigo: number) => {
    await excluirLivro(codigo);
    setCarregado(false);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Livro Lista</title>
      </Head>

      <Menu />

      <main>
        <h1 className={styles.title}>Livro Lista</h1>
        <table className="table">
          <thead>
            <tr>
              <th>Título</th>
              <th>Autor</th>
              <th>Código da Editora</th>
              <th>Ano</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {livros.map((livro, index) => (
              <LinhaLivro key={index} livro={livro} excluir={() => excluir(index)} />
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default LivroLista;
