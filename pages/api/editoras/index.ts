import { NextApiRequest, NextApiResponse } from 'next';

// Importar a classe ControleEditora como membro padrão
import ControleEditora from '../../../classes/controle/ControleEditora';

// Criar uma instância de ControleEditora
const controleEditoras = new ControleEditora();

// Definir a assinatura para tratamento das solicitações
export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    // Implementar o tratamento de requisições
    if (req.method === 'GET') {
      // Responder com status 200 e o vetor de editoras em formato JSON
      const editoras = await ControleEditora.getEditoras(); // Ajuste aqui
      res.status(200).json(editoras);
    } else {
      // Tratar o status 405 para método não permitido
      res.status(405).end();
    }
  } catch (error) {
    // Tratar o status 500 para exceção ocorrida no servidor
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
