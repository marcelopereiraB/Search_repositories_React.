import { RepositoriesModel } from '../domain/repositories.model';

export interface IRepositores {
  getRepositories(name: string): Promise<RepositoriesModel>;
}
