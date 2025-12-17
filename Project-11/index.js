let user = document.getElementById('input-field');
let userProfile = document.getElementById('user-Profile');
async function fetchData(userName){

    let response = await fetch(`https://api.github.com/users/${userName}`);
    let result = await response.json(); 
    console.log(result);
    displayData(result);
}

function displayData({
    avatar_url, //destructure ho raha h
    followers,
    following,
    name,
    bio,
    public_repos,
    html_url
}){
    if(!avatar_url){
        userProfile.innerHTML = `<h1>Oops! User not Found......</h1>`;
        return;
    }
    if(!bio){
        bio = '';
    }
userProfile.innerHTML = `<div class="user-bio">
            <img src=${avatar_url} alt="profile-pic">
            <div class="user-biodata">
                <p>${name}</p>
                <p>${bio}</p>
            </div>
         </div>
         <div class="user-profile-info">
            <div class="user-profile-details">
                <div class="user-profile-data">
                    <p>Followers</p>
                    <p>${followers}</p>
                </div>
                <div class="user-profile-data">
                    <p>Following</p>
                    <p>${following}</p>
                </div>
                <div class="user-profile-data">
                    <p>Repo</p>
                    <p>${public_repos}</p>
                </div>
            </div>
            <div>
                <a href=${html_url} target="_blank">
                    <button id="view-btn">View Profile</button>
                </a>
            </div>
        </div>`
}
document.getElementById('search-btn').addEventListener('click', () => {
    let userName = user.value;
    if(userName === ''){
        return;
     }
     userProfile.innerHTML = `<span class="loader"></span>`;
    fetchData(userName);
    userProfile.style.display = 'flex';
})