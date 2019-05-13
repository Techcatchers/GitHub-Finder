const github = new GitHub();
const ui = new UI();
let execute;

const searchUser = document.querySelector('#search-user');

searchUser.addEventListener('keyup', (e) => {
    clearTimeout(execute);
    const userText = e.target.value;
    execute = setTimeout(extractInfo, 1000, userText);
})


function extractInfo(userText) {

    if (userText !== '') {
        ui.showLoading();
        github.getuser(userText)
        .then (data => {
            ui.hideLoading();
            if ((data.profile.message) === 'Not Found') {
                // show alert
                // console.log(data);
                ui.showAlert('User not found', 'alert alert-danger');
            } else {
                //show profile
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
            }
        })
        .catch (() => {
            ui.hideLoading();
            ui.showAlert('User not found', 'alert alert-danger');
        })
    } else {
        // clear profilw
        ui.clearProfile();

    }
}