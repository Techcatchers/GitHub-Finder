class UI {
    constructor() {
        this.profile = document.querySelector('#profile');
    }

    showProfile(user) {
        // console.log(user)

        this.profile.innerHTML = `
        <div class="card card-body mb-3">
            <div class="row">
                <div class="col-md-3">
                <img class="img-fluid mb-2" src="${user.avatar_url}">
                <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
                </div>
                <div class="col-md-9">
                <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
                <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
                <span class="badge badge-success">Followers: ${user.followers}</span>
                <span class="badge badge-info">Following: ${user.following}</span>
                <br><br>
                <ul class="list-group">
                <li class="list-group-item">Company: ${user.company}
                <li class="list-group-item">Website/Blog: <a href="${user.blog}" target="_blank">${user.blog}</a>
                <li class="list-group-item">Location: ${user.location}
                <li class="list-group-item">Member since: ${user.created_at}
                </ul>
                </div>
            </div>
        </div>
        <h3 class="page-heading mb-3">Latest Repos</h3>
        <div id="repos"></div>
        `;
    }

    clearProfile() {
        this.profile.innerHTML = '';
    }

    showRepos(repos) {
        let output = '';

        repos.forEach(repo => {
            output += `
            <div class="card card-body md-2">
                <div class="row">
                    <div class="col-md-6">
                        <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                    </div>
                    <div class="col-md-6">
                        <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
                        <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
                        <span class="badge badge-success">Forks: ${repo.forks_count}</span>
                    </div>
                </div>
            </div>
            `;
        });

        // console.log(output);
        document.querySelector('#repos').innerHTML = output;
    }

    showAlert(msg, className) {
        this.clearAlert();

        const div = document.createElement('div');
        div.className = className;
        div.textContent = msg;

        const container = document.querySelector('.search-container');
        const search = document.querySelector('.search');

        container.insertBefore(div, search);

        setTimeout(() => {
            this.clearAlert();
        }, 3000);
    }

    clearAlert() {
        const currentAlert = document.querySelector('.alert');

        if (currentAlert) {
            currentAlert.remove();
        }
    }
}