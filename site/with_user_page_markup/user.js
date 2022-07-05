const loadUserInfo = async () => {
    const userId = new URL(window.location.href).searchParams.get("userId");



// container
const containerEl = document.querySelector('.container');
if (!userId) {
    // render error message
    const errorEl = document.createElement('div');
    errorEl.classList.add('error-message');
    errorEl.innerText = 'No user id id provided!';
    containerEl.appendChild(errorEl);

} else {
    // loading el
    const loadingEl = document.createElement('div');
    loadingEl.classList.add('loading');
    loadingEl.innerText = 'Loading...';
    containerEl.appendChild(loadingEl);

}


const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
const userData = await userResponse.json();

//render user data
const titleEl = document.createElement('h1');
titleEl.classList.add('posts-title');
titleEl.innerText = userData.name;
containerEl.appendChild(titleEl);

//about user
const userWrapEl = document.createElement('article');
userWrapEl.classList.add('post_wrap');
const userTextEl = document.createElement('p');
userTextEl.classList.add('post_wrap-text');
let spanData = document.createElement('span');
userTextEl.innerText = userData.username;
spanData.innerText = ('Username:');

userTextEl.prepend(spanData);
userWrapEl.appendChild(userTextEl);
containerEl.appendChild(userWrapEl);


//render emailData

const userEmailEl = document.createElement('p');
userEmailEl.classList.add('post_wrap-text');
const userEmailLinkEl = document.createElement('a');
userEmailLinkEl.setAttribute('href', `mailto:${userData.email}`);
userEmailLinkEl.innerText = userData.email;
spanData =  document.createElement('span');
spanData.innerText = ('Email:');
userEmailEl.prepend(spanData);
userEmailEl.append(userEmailLinkEl);
userWrapEl.appendChild(userEmailEl);
containerEl.appendChild(userWrapEl);

//render adress

const userAdressEl = document.createElement('p');
userAdressEl.classList.add('post_wrap-text');
const userAdressLinkEl = document.createElement('a');
const x = userData.address.geo.lat;
const y = userData.address.geo.lng;
userAdressLinkEl.setAttribute('href',`https://www.google.com/maps/search/${x},${y}`);
userAdressLinkEl.innerText = userData.address.suite + ', ' + userData.address.street+ ', ' + userData.address.city+ ', ' + userData.address.zipcode;
spanData =  document.createElement('span');
spanData.innerText = ('Address:');
userAdressEl.prepend(spanData);
userAdressEl.append(userAdressLinkEl);
userWrapEl.appendChild(userAdressEl);
containerEl.appendChild(userWrapEl);
 // website render 

const WebAdressEl = document.createElement('p');
WebAdressEl.classList.add('post_wrap-text');
const WebAdressLinkEl = document.createElement('a');
WebAdressLinkEl.setAttribute('href',`${userData.website}`);
WebAdressLinkEl.innerText = userData.website;
spanData =  document.createElement('span');
spanData.innerText = ('Website:');
WebAdressEl.prepend(spanData);
WebAdressEl.append(WebAdressLinkEl);
userWrapEl.appendChild(WebAdressEl);
containerEl.appendChild(userWrapEl);

// render Company
const companyNameEl = document.createElement('p');
companyNameEl.classList.add('post_wrap-text');
spanData = document.createElement('span');
companyNameEl.innerText = userData.company.name;
spanData.innerText = ('Company:');

companyNameEl.prepend(spanData);
userWrapEl.appendChild(companyNameEl);
containerEl.appendChild(userWrapEl);


// fetch todo
const todosResponse = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`);

const todosData = await todosResponse.json();
// console.log(Data);

// render todos
const toDosWrapEl = document.createElement('div');
toDosWrapEl.classList.add('comments_wrap');
const toDosTitleEl = document.createElement('h3');
toDosTitleEl.classList.add('comments_wrap-title');
toDosTitleEl.innerText = 'TODOs:';
toDosWrapEl.appendChild(toDosTitleEl);
containerEl.appendChild(toDosWrapEl);



todosData.forEach(el =>{
    todosData.sort(function(a, b) {
        return Number(a.completed ) - Number(b.completed);
    })
    const todosWrapEl = document.createElement('div');
    todosWrapEl.classList.add('todo_wrap');
    todosWrapEl.classList.add('completed')
    if(el.completed != true){
        todosWrapEl.classList.remove('completed');
    }
  
    todosWrapEl.innerText = el.title;
    containerEl.appendChild(todosWrapEl);
    
});
// fetch user albumId
const albumResponse = await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
const albumData = await albumResponse.json();
console.log(albumData);


//render album title
const albumWrapEl = document.createElement('div');
albumWrapEl.classList.add('comments_wrap');
const albumTitleEl = document.createElement('h3');
albumTitleEl.classList.add('comments_wrap-title');
albumTitleEl.innerText = 'Albums:';
albumWrapEl.appendChild(albumTitleEl);
containerEl.appendChild(albumWrapEl);
const albumsWrapEl = document.createElement('div');
albumsWrapEl.classList.add('albums_wrap');
albumData.forEach(el => {
const albumsLinkEl = document.createElement('a');
albumsLinkEl.classList.add('album');
albumsLinkEl.setAttribute('href', `album.html?albumId=${userId}`);
const  albumsTextEl = document.createElement('span');
albumsTextEl.innerText = el.title;
albumsLinkEl.appendChild(albumsTextEl);
albumsWrapEl.appendChild(albumsLinkEl);
containerEl.appendChild(albumsWrapEl);
})

};



loadUserInfo();






    // <div class="comments_wrap">
    //   <h3 class="comments_wrap-title">Albums:</h3>
    //   <div class="albums_wrap">
    //     <a href="album.html?albumId=1" class="album"><span>quidem molestiae enim</span></a>
    //     <a href="album.html?albumId=1" class="album"><span>natus impedit quibusdam illo est</span></a>
    //     <a href="album.html?albumId=1" class="album"><span>natus impedit quibusdam illo est</span></a>
    //     <a href="album.html?albumId=1" class="album"><span>natus impedit quibusdam illo est</span></a>
    //     <a href="album.html?albumId=1" class="album"><span>natus impedit quibusdam illo est</span></a>
    //   </div>
    // </div> */