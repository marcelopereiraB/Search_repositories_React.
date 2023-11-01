export class RepositoriesModel {
  total_count: number;
  items: RepoItems[];

  constructor(total_count: number, items: RepoItems[]) {
    this.total_count = total_count;
    this.items = items;
  }
}

type RepoItems = {
  html_url: string;
  id: number;
  name: string;
  full_name: string;
  forks: number;
  description: string;
};
