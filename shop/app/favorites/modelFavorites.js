export default class modelFavorites{
    #fav = [];

    loadFromLS(){
        this.#fav = JSON.parse(localStorage.getItem('favorites') || "[]");
        return this.fav;
    }

    get fav(){
        return JSON.parse(JSON.stringify(this.#fav));
    }

    addFavorites(data){
        if(!this.#fav.find(({ id }) => id === data.id)){
            this.#fav.push(data);
        }

        this.writeToLS();

        return this.fav;
    }
    
    removeById(id){
        this.#fav = this.#fav.filter(date => date.id != id);
        this.writeToLS();
        return this.fav;
    }

    writeToLS(){
        localStorage.setItem('favorites', JSON.stringify(this.#fav));
    }
}