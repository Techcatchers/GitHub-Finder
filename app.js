const github = new GitHub();
const ui = new UI();
let execute;

const searchUser = document.querySelector('#search-user');

searchUser.addEventListener('keyup', (e) => {
    clearTimeout(execute);
    const userText = e.target.value;
    execute = setTimeout(extractInfo, 1500, userText);
})


function extractInfo(userText) {

    if (userText !== '') {
        github.getuser(userText)
        .then (data => {
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
    } else {
        // clear profilw
        ui.clearProfile();

    }
}