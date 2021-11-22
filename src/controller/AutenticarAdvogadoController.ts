import { Request, Response } from "express"
import { AutenticarAdvogadoService } from "../services/AutenticarAdvogadoService";

class AutenticarAdvogadoController {

  async autenticar(request: Request, response: Response) {

    const { cpf, senha } = request.body;

    const autenticarAdvogadoService = new AutenticarAdvogadoService();

    const advogado = await autenticarAdvogadoService.execute({ cpf, senha });

    return response.status(200).send(advogado);

  }

}

export { AutenticarAdvogadoController }