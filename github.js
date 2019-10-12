class GitHub {
  constructor() {
    this.client_id = "2bfb12c444ce6b3a2fc5";
    this.client_secret = "21c63a1a0a645d2f8c98bb01fb598617a4c6e96b";
    this.repos_count = 5;
    this.repos_sort = "created: asc";
  }

  async getuser(user) {
    const url = `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`;

    const repo_url = `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`;

    const profileResponse = await fetch(url);
    const repoResponse = await fetch(repo_url);

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos
    };
  }
}
