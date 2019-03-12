class UI {
    constructor() {
        this.profile = document.querySelector('#profile');
    }

    showProfile(user) {
        // console.log(user)

        const userDp = user.avatar_url,
            viewProfile = user.html_url,
            pubRepos = user.public_repos,
            pubGists = user.public_gists,
            followers = user.followers,
            following = user.following,
            company = user.company || 'Not Provided',
            website = user.blog || 'Not Provided',
            websiteUrl = (website === 'Not Provided') ? '' : website,
            location = user.location || 'Not Provided',
            profileCreated = (new Date(user.created_at)).toDateString();
            
        this.profile.innerHTML = `
        <div class="card card-body mb-3">
            <div class="row">
                <div class="col-md-3">
                <img class="img-fluid mb-2" src="${userDp}">
                <a href="${viewProfile}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
                </div>
                <div class="col-md-9">
                <span class="badge badge-primary">Public Repos: ${pubRepos}</span>
                <span class="badge badge-secondary">Public Gists: ${pubGists}</span>
                <span class="badge badge-success">Followers: ${followers}</span>
                <span class="badge badge-info">Following: ${following}</span>
                <br><br>
                <ul class="list-group">
                <li class="list-group-item">Company: ${company}
                <li class="list-group-item">Website/Blog: <a href="${websiteUrl}" target="_blank">${website}</a>
                <li class="list-group-item">Location: ${location}
                <li class="list-group-item">Member since: ${profileCreated}
                </ul>
                </div>
            </div>
        </div>
        <h3 class="page-heading mb-3 ml-3" style="color: rgb(57, 113, 209)">Latest Repositories</h3>
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
        if (output === '') {
            output = `
            <div class="card card-body md-2">
                <div class="row">
                    <div class="col-md-12 text-center">
                        No Repositories found. :)
                    </div>
                </div>
            </div>
            `
        }

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