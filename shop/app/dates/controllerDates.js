import ModelDates from './modelDates.js';
import ViewDates from './viewDates.js';

let caterories = "";
export default class ControllerDates
{

    constructor(Publisher,cat){
        let caterories = cat;
        this.model = new ModelDates();
        this.view = new ViewDates(this.handleClickAddToCart, this.handleFindingByNames);

        this.load(caterories);
        this.publisher = Publisher;
        this.publisher.subscribe('FILTER_BY_NAMES', this.handleFindingByNames);
    }

    load(caterories)
    {
        this.model.load(caterories)
            .then(d => {
                this.view.render(d);
            });
    }

    filter(cat)
    {
        caterories = cat;
        this.model.load(caterories)
            .then(d => {
                this.view.render(d);
            });
    }

    handleClickAddToCart = ev => {
        const date = this.getDateByEvent(ev);
        this.publisher.notify('ADD_TO_CART', date);
    }

    handleClickAddToForm = ev => {
        const date = this.getDateByEvent(ev);
        this.publisher.notify('ADD_TO_FORM', date);
    }

    getDateByEvent(ev){
        const id = ev.target.dataset.id;
        return this.model.getDateById(id);
    }

    handleReloadDates = () => {
        this.load();
    }

    handleFindingByNames = names => {
        console.log(names);
        const findingNames = this.model.findingByNames(String(names));
        this.view.render(findingNames);
    }
}