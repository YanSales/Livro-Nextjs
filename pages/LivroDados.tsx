import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { Menu } from '../componentes/Menu';
import styles from '../styles/Home.module.css';
import { useRouter } from 'next/router';


const baseURL = "http://localhost:3000/api/livros";

interface Livro {
  codigo: number;
  titulo: string;
  resumo: string;
  autores: string[];
  codEditora: number;
  ano: number;
}

const LivroDados: React.FC = () => {
  const [opcoes, setOpcoes] = useState<{ value: number; text: string }[]>([]);
  const [titulo, setTitulo] = useState<string>('');
  const [resumo, setResumo] = useState<string>('');
  const [autores, setAutores] = useState<string>('');
  const [codEditora, setCodEditora] = useState<number>(0);
  const router = useRouter(); // Certifique-se de importar o useRouter

  const obterEditoras = async () => {
    // Substitua isso pela lógica necessária para obter as editoras
    const data = await fetch("http://localhost:3000/api/editoras");
    const editoras = await data.json();
    const opcoes = editoras.map((editora: any) => ({ value: editora.codEditora, text: editora.nome }));
    setOpcoes(opcoes);
  };

  useEffect(() => {
    obterEditoras();
  }, []);

  const tratarCombo = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCodEditora(Number(event.target.value));
  };

  const incluirLivro = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const livro: Livro = {
      codigo: 0,
      titulo: titulo,
      resumo: resumo,
      autores: autores.split('\n'),
      codEditora: codEditora,
      ano: new Date().getFullYear(),
    };

    const resposta = await fetch(baseURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(livro),
    });

    if (resposta.ok) {
        router.push('/LivroLista');
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Livro Dados</title>
      </Head>

      <Menu />

      <main>
        <h1 className={styles.title}>Livro Dados</h1>
        <form onSubmit={(e) => incluirLivro(e)}>
          <div className="form-group">
            <label>Título:</label>
            <input type="text" className="form-control" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
          </div>
          <div className="form-group">
            <label>Resumo:</label>
            <textarea className="form-control" value={resumo} onChange={(e) => setResumo(e.target.value)} />
          </div>
          <div className="form-group">
            <label>Autores:</label>
            <textarea className="form-control" value={autores} onChange={(e) => setAutores(e.target.value)} />
          </div>
          <div className="form-group">
            <label>Editora:</label>
            <select className="form-control" value={codEditora} onChange={(e) => tratarCombo(e)}>
              {opcoes.map((opcao) => (
                <option key={opcao.value} value={opcao.value}>
                  {opcao.text}
                </option>
              ))}
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Incluir
          </button>
        </form>
      </main>
    </div>
  );
};

export default LivroDados;
