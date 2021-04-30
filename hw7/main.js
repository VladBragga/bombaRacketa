function PaginationHelper(collection, itemsPerPage){
  this.items = collection;
  this.itemsPerPage = itemsPerPage;
}
PaginationHelper.prototype.itemCount = function() {
  return this.items.length;
} // возвращает количество элементов во всей коллекции\

PaginationHelper.prototype.pageCount = function() {
    return Math.ceil(this.itemCount() / this.itemsPerPage);
} //возвращает количество страниц

PaginationHelper.prototype.pageItemCount = function(pageIndex) {
 var itemsPerPage = this.itemsPerPage,
     itemCount = this.itemCount(),
     pageCount = this.pageCount();
    if (pageIndex >= pageCount || pageIndex < 0) return -1;
    return this.items.slice(pageIndex * itemsPerPage, itemCount).splice(0, itemsPerPage).length;
}  // возвращает количество элементов на текущей странице. page_index отсчитывается от нуля.
  // этот метод должен возвращать -1 для значений pageIndex, выходящих за пределы допустимого диапазона

PaginationHelper.prototype.pageIndex = function(itemIndex) {
  if (this.itemCount() === 0 
      || itemIndex < 0 
      || itemIndex > this.itemCount())        return -1;
  if (itemIndex === 0 
      || itemIndex / this.itemsPerPage === 1) return 0;
  
  return Math.floor((itemIndex / this.itemsPerPage)); 
} // определяет, на какой странице находится элемент. Индексы с нулевым отсчетом
  // этот метод должен возвращать -1 для значений itemIndex, выходящих за пределы допустимого диапазона

var helper = new PaginationHelper(['a','b','c','d','e','f'], 4);
helper.pageCount(); //should == 2

helper.itemCount(); //should == 6

helper.pageItemCount(0); //should == 4

helper.pageItemCount(1); // last page - should == 2

helper.pageItemCount(2); // should == -1 since the page is invalid
// pageIndex принимает индекс элемента и возвращает страницу, которой он принадлежит
helper.pageIndex(5); //should == 1 (zero based index)

helper.pageIndex(2); //should == 0

helper.pageIndex(20); //should == -1
helper.pageIndex(-10); //should == -1

helper.pageIndex(-10); //should == -1 */

function declareWinner(fighter1, fighter2, firstAttacker) {
    while (fighter1.health > 0 && fighter2.health > 0) { //
      fighter2.health -= fighter1.damagePerAttack;       // мочилово
      fighter1.health -= fighter2.damagePerAttack;       //
    }
    
    if (fighter1.health <= 0 && fighter2.health <= 0)   //замочили друг друга, но первый есть первый
      return firstAttacker;
    else if (fighter1.health <= 0)
      return fighter2.name; // второй убил
    else
      return fighter1.name; // первый убил
  }
  
  function Fighter(name, health, damagePerAttack) {
    this.name = name;
    this.health = health;
    this.damagePerAttack = damagePerAttack;
    this.toString = function() {
      return this.name;
    };
  }
  console.log(declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Lew")); // "Lew"
  console.log(declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Harry")); // "Harry"
  console.log(declareWinner(new Fighter("Harald", 20, 5), new Fighter("Harry", 5, 4), "Harry")); // "Harald"
  console.log(declareWinner(new Fighter("Harald", 20, 5), new Fighter("Harry", 5, 4), "Harald")); // "Harald"
  console.log(declareWinner(new Fighter("Jerry", 30, 3), new Fighter("Harald", 20, 5), "Jerry")); // "Harald"
  console.log(declareWinner(new Fighter("Jerry", 30, 3), new Fighter("Harald", 20, 5), "Harald")); // "Harald"