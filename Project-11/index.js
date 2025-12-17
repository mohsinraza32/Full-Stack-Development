let user = document.getElementById('input-field');
let userProfile = document.getElementById('user-Profile');

async function fetchData(userName){
     
    let response = await fetch(`https://api.github.com/users/${userName}`);
    let result = await response.json();
    console.log(result);
    displayUserData(result);
    
}

document.getElementById('search-btn').addEventListener('click', () => {
    let userId = user.value;
    if(userId === ''){
        return;
    }
    fetchData(userId);
    userProfile.innerHTML = `<span class="loader"></span>`;
    userProfile.style.display = "flex";
    userProfileclassList.add('')


})
 function displayUserData({ avatar_url,// second way of destructure
            name,
            bio,
            followers,
            following,
            public_repos,
            html_url
           }){
    // const { avatar_url,  first way of destructure
    //         name,
    //         bio,
    //         followers,
    //         following,
    //         public_repos

    //        } = result;
      if(!avatar_url){
        userProfile.innerHTML = `<h1>Oops! User not found...</h1>`;
        return;
      }
      if(!bio){
        bio = '';
      }
    userProfile.innerHTML = `
    
         <div class="user-bio">
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
               <div id="view-btn">View Profile</div>
               </a>
            </div>
        </div>`
 }