export default class ViewFilter{
    btnDateFilter = document.querySelector('.btn_date_filter');
    inputDateStart = document.querySelector('.inp_date_start');
    inputDateFinish = document.querySelector('.inp_date_finish');

    constructor(handleFilterDates){
        this.btnDateFilter.addEventListener('click', handleFilterDates);
    }

    setDates({ min, max }){
        this.inputDateStart.value = min;
        this.inputDateFinish.value = max;
    }

    getDates(){
        return {
            min : this.inputDateStart.value,
            max : this.inputDateFinish.value
        };
    }
}