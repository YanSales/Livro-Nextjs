import { NextApiRequest, NextApiResponse } from 'next';

// Importar a classe ControleEditora como membro padrão
import ControleEditora from '../../../classes/controle/ControleEditora';

// Definir a assinatura para tratamento das solicitações
export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    // Implementar o tratamento de requisições
    if (req.method === 'GET') {
      // Obter o parâmetro codEditora da URL
      const { codEditora } = req.query;
      // Responder com status 200 e o objeto JSON com o nome da editora
      const nomeEditora = await ControleEditora.getNomeEditora(Number(codEditora));
      res.status(200).json({ nome: nomeEditora });
    } else {
      // Tratar o status 405 para método não permitido
      res.status(405).end();
    }
  } catch (error) {
    // Tratar o status 500 para exceção ocorrida no servidor
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
