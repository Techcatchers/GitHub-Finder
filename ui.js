class UI {
  constructor() {
    this.profile = document.querySelector("#profile");
  }

  showProfile(user) {
    const userDp = user.avatar_url,
      name = user.name || "No Name Provided",
      username = user.login,
      viewProfile = user.html_url,
      pubRepos = user.public_repos,
      pubGists = user.public_gists,
      followers = user.followers,
      following = user.following,
      company = user.company || "Not Provided",
      website = user.blog || "Not Provided",
      websiteUrl = website === "Not Provided" ? "" : website,
      location = user.location || "Not Provided",
      profileCreated = new Date(user.created_at).toDateString();

    this.profile.innerHTML = `
        <div class="card card-body mb-3">
            <div class="row">
                <div class="col-md-3 text-center">
                    <img class="img-fluid mb-2" src="${userDp}">
                <div class="name">
                    <strong>${name}</strong><br>
                </div>
                <div class="mb-2">${username}</div>
                <a href="${viewProfile}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
                </div>
                <div class="col-md-9">
                <span class="badge badge-primary mb-2">Public Repos: ${pubRepos}</span>
                <span class="badge badge-secondary mb-2">Public Gists: ${pubGists}</span>
                <span class="badge badge-success mb-2">Followers: ${followers}</span>
                <span class="badge badge-info mb-2">Following: ${following}</span>
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
    document.querySelector("footer").style.position = "fixed";
    document.querySelector("footer").style.top = "90vh";
    this.profile.innerHTML = "";
  }

  showRepos(repos) {
    let output = "";

    repos.forEach(repo => {
      output += `
            <div class="card card-body md-2">
                <div class="row">
                    <div class="col-md-6">
                        <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                    </div>
                    <div class="col-md-6">
                        <span class="badge badge-primary mb-2 mt-2">Stars: ${repo.stargazers_count}</span>
                        <span class="badge badge-secondary mb-2 mt-2">Watchers: ${repo.watchers_count}</span>
                        <span class="badge badge-success mb-2 mt-2">Forks: ${repo.forks_count}</span>
                    </div>
                </div>
            </div>
            `;
    });

    if (output === "") {
      output = `
            <div class="card card-body md-2">
                <div class="row">
                    <div class="col-md-12 text-center">
                        No Repositories found. :)
                    </div>
                </div>
            </div>
            `;
    }

    document.querySelector("footer").style.position = "relative";
    document.querySelector("footer").style.top = "10vh";
    document.querySelector("#repos").innerHTML = output;
  }

  showAlert(msg, className) {
    this.clearAlert();

    const div = document.createElement("div");
    div.className = className;
    div.textContent = msg;

    const container = document.querySelector(".search-container");
    const search = document.querySelector(".search");

    container.insertBefore(div, search);

    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  clearAlert() {
    const currentAlert = document.querySelector(".alert");

    if (currentAlert) {
      currentAlert.remove();
    }
  }

  showLoading() {
    document.querySelector(".loader").style.display = "block";
  }

  hideLoading() {
    document.querySelector(".loader").style.display = "none";
  }
}
