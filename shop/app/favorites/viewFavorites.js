export default class viewFavorites{
    constructor(handleRemoveFromFavorites){
        this.dom = document.querySelector('.favorites');
        this.dom.addEventListener('click', handleRemoveFromFavorites);
    }
    
    render(fav){
        this.dom.innerHTML = fav.map(el => this.renderFav(el)).join('');
    }

    renderFav({ img, date, name, createdAt, loc_city, loc_country, id }){
        return `<div class="card">
        <div class="card-image">
          <figure class="image is-4by3">
            <img src="${ img }" alt="${ name }">
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-48x48">
                <img src="${ img }" alt="${ name }">
              </figure>
            </div>
            <div class="media-content">
              <p class="title is-4">${ name } </p>
              <p class="title is-4">${ date } </p>
            </div>
          </div>
          <div class="content">
            <p>${ loc_country }, ${ loc_city }</p>
            Created at <time datetime="2016-1-1">${ createdAt }</time>
            <button 
            class="button is-danger is-light"
            data-id="${ id }">Remove from favorites</button>
          </div>          
        </div>
      </div>`;
    }


}