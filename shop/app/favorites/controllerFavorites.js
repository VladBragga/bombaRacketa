import modelFavorites from "./modelFavorites.js";
import viewFavorites from "./viewFavorites.js";

export default class controllerFavorites{
    constructor(publisher){
        this.model = new modelFavorites();
        this.view = new viewFavorites(this.handleRemoveFromFavorites);

        this.load();

        publisher.subscribe('ADD_TO_FAVORITES', this.handleAddToFavorites);
    }

    load(){
        const fav = this.model.loadFromLS();
        this.view.render(fav);
    }

    handleAddToFavorites = data => {
        const newFav = this.model.addFavorites(data);
        this.view.render(newFav);
    }

    handleRemoveFromFavorites = ev => {
        const id = ev.target.dataset.id;
        if(id){
            console.count('click');
            const newFav = this.model.removeById(id);
            this.view.render(newFav);
        }
    }

}