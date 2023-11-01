import axios from 'axios';
import { RepositoriesModel } from '../domain/repositories.model';
import { IRepositores } from '../interfaces/repositories.interface';

export class RepositoriesRepo implements IRepositores {
  getRepositories(name: string): Promise<RepositoriesModel> {
    const data = axios
      .get(`http://localhost:8080/consulta-portifolio/${name}`)
      .then((res) => res.data);
    return data;
  }
}
