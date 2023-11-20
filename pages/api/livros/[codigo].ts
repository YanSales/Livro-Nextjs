// Importar a classe ControleLivros como membro padrão
import ControleLivros from '../../../classes/controle/ControleLivros';
import { NextApiRequest, NextApiResponse } from 'next';
// Criar uma instância de ControleLivros
const controleLivros = new ControleLivros();

// Definir a assinatura para tratamento das solicitações
export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    // Implementar o tratamento de requisições
    if (req.method === 'DELETE') {
      // Capturar o código fornecido na URL
      const { codigo } = req.query;
      // Excluir o livro no vetor
      controleLivros.excluir(Number(codigo)); // Ajuste aqui
      // Responder com status 200 e mensagem de sucesso em formato JSON
      res.status(200).json({ mensagem: 'Livro excluído com sucesso.' });
    } else {
      // Tratar o status 405 para método não permitido
      res.status(405).end();
    }
  } catch (error) {
    // Tratar o status 500 para exceção ocorrida no servidor
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
