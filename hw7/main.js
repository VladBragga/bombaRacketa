/* var helper = new PaginationHelper(['a','b','c','d','e','f'], 4);

helper.pageCount(); //should == 2

helper.itemCount(); //should == 6

helper.pageItemCount(0); //should == 4

helper.pageItemCount(1); // last page - should == 2

helper.pageItemCount(2); // should == -1 since the page is invalid


// pageIndex takes an item index and returns the page that it belongs on

helper.pageIndex(5); //should == 1 (zero based index)

helper.pageIndex(2); //should == 0

helper.pageIndex(20); //should == -1

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