import ViewFilter from './viewFilter.js';

export default class ControllerFilter{
    constructor(publisher){
        this.view = new ViewFilter(this.handleFilterDates);

        this.publisher = publisher;

        this.publisher.subscribe('FIND_MIN_MAX_DATES', this.handleFindMinMaxDates);

    }

    handleFindMinMaxDates = (minMaxDates) => {
        this.view.setDates(minMaxDates);
    }

    handleFilterDates = () => {
        const dates = this.view.getDates();
        this.publisher.notify('FILTER_BY_DATES', dates);
    }
}