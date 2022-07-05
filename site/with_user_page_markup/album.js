const loadAlbumsInfo = async () => {
    const albumId = new URL(window.location.href).searchParams.get("albumId");
    console.log(albumId);

// container
const containerEl = document.querySelector('.container');


//fetch data albums
const albumsResponse = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`);
const albumsData = await albumsResponse.json();
console.log(albumsData);

//render photos tittle title
const albumWrapEl = document.createElement('div');
albumWrapEl.classList.add('comments_wrap');
const albumTitleEl = document.createElement('h3');
albumTitleEl.classList.add('comments_wrap-title');
albumTitleEl.innerText = 'Photos:';
albumWrapEl.appendChild(albumTitleEl);
containerEl.appendChild(albumWrapEl);
const albumsWrapEl = document.createElement('div');
albumsWrapEl.classList.add('albums_wrap');
albumsData.forEach(el => {
const albumsLinkEl = document.createElement('a');
albumsLinkEl.classList.add('album');
albumsLinkEl.setAttribute('href', el.url);
const  albumsTextEl = document.createElement('span');
albumsTextEl.innerText = el.title;
albumsLinkEl.appendChild(albumsTextEl);
albumsWrapEl.appendChild(albumsLinkEl);
containerEl.appendChild(albumsWrapEl);
})

};

loadAlbumsInfo ();

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