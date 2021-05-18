import ControllerChange from './change/controllerChange.js';
import ControllerDates from './dates/controllerDates.js';
import ControllerFavorites from './favorites/controllerFavorites.js';
import ControllerFilter from './filter/controllerFilter.js';
import Publisher from './helpers/publisher.js';

const publisher = new Publisher();
let dates = new ControllerDates(publisher,"all"); // фильтрация категориями

filter_button.onclick = function() 
{
    let cat = document.getElementById("filter").value
    dates = new ControllerDates(publisher,cat); 
}

search.onclick = function() 
{
    let search_product = document.getElementById('input_search').value;
    dates.handleFindingByNames(String(search_product));
}
//const favs = new ControllerFavorites(publisher);
const change = new ControllerChange(publisher);
//const filter = new ControllerFilter(publisher);
  
