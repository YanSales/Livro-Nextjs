// ControleLivro.ts
import Livro from '../modelo/Livro';

const livros: Livro[] = [
  new Livro(1, 1, 'Livro 1', 'Resumo do Livro 1', ['Autor 1', 'Autor 2']),
  new Livro(2, 2, 'Livro 2', 'Resumo do Livro 2', ['Autor 3', 'Autor 4']),
  new Livro(3, 3, 'Livro 3', 'Resumo do Livro 3', ['Autor 5', 'Autor 6']),
];

class ControleLivro {
  obterLivros(): Livro[] {
    return livros;
  }

  incluir(livro: Livro): void {
    livro.codigo = Math.max(...livros.map((l) => l.codigo), 0) + 1;
    livros.push(livro);
  }

  excluir(codigo: number): void {
    const index = livros.findIndex((l) => l.codigo === codigo);
    if (index !== -1) {
      livros.splice(index, 1);
    }
  }
}

export default ControleLivro;
