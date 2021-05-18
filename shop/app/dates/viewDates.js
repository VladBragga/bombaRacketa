export default class ViewDates{
    btnsAddToCart = '.btn_add_to_cart';
    btnsAddToForm = '.btn_add_to_form';
    constructor(handleClickAddToCart, handleClickAddToForm){
        this.dom = document.querySelector('.dates');
        this.handleClickAddToCart = handleClickAddToCart;
        this.handleClickAddToForm = handleClickAddToForm;
    }

    render(d){
        this.dom.innerHTML = d.map(el => this.renderCard(el)).join('');

        this.addListeners();
    }

    renderCard({ img, manufacture, pname, price, ingridients, category, idp }){
        return `
        <div class="card">
        <div class="card-image">
          <figure class="image is-4by3 is-small">
            <img src="${ img }" alt=""${ pname }"">
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="title is-4">${ pname } </p>
              <p class="subtitle is-6">Manufacture: ${ manufacture } </p>
              <p>Category: ${ category }</p>
              <p class="price tag is-success is-medium is-right">Price: ${ price }₴</p>
              <button class="button  is-success is-light btn_add_to_cart"
                    data-id="${ idp }">Add to Cart</button>
            </div>
          </div>
          <div class="content">
                <button class="button is-info is-light btn_add_to_form"
                    data-id="${ idp }">Add to form</button>
          </div>          
        </div>
      </div>`;
    }

    addListeners(){
        [...document.querySelectorAll(this.btnsAddToCart)]
            .forEach(btn => btn.addEventListener('click', this.handleClickAddToCart));

        [...document.querySelectorAll(this.btnsAddToForm)]
            .forEach(btn => btn.addEventListener('click', this.handleClickAddToForm));
    }
}