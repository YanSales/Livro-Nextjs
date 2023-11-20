// Importar os tipos necessários
import { NextApiRequest, NextApiResponse } from 'next';
// Importar o controlador de livros
import  ControleLivro  from '../../../classes/controle/ControleLivros';


// Definir a instância exportável de ControleLivro
const controleLivro = new ControleLivro();

// Definir a assinatura para tratamento das solicitações
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    // Implementar o tratamento de requisições
    if (req.method === 'GET') {
      // Responder com status 200 e o vetor de livros em formato JSON
      const livros = await controleLivro.obterLivros();
      res.status(200).json(livros);
    } else if (req.method === 'POST') {
      // Capturar dados do livro no corpo da requisição
      const novoLivro = req.body;
      // Incluir o novo livro no vetor de livros
      controleLivro.incluir(novoLivro);
      // Responder com status 200 e mensagem de sucesso em formato JSON
      res.status(200).json({ mensagem: 'Livro incluído com sucesso.' });
    } else {
      // Tratar o status 405 para método não permitido
      res.status(405).end();
    }
  } catch (error) {
    // Tratar o status 500 para exceção ocorrida no servidor
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export default handler;
