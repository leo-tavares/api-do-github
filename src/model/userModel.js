class UserModel {
  constructor({ name, repos }) {
    this._name = name;
    this._repos = repos;
  }

  setName(name) {
    this._name = name;
  }

  setRepos(repos) {
    this._repos = repos;
  }

  getUser() {
    return {
      name: this._name,
      repos: this._repos,
    };
  }
}

export default UserModel;
