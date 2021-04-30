class Dictionary {
    constructor() {  this.entries = {}; }
    newEntry(key, value) { this.entries[key] = value; }
    look(key) { return key in this.entries ? this.entries[key]: "Can't find entry for " + key; }
  }

  class Hex {
    constructor(value) { this._value = value; }
    valueOf() { return this._value; }
    toString() { return '0x' + this._value.toString(16).toUpperCase(); }
    toJSON() { return this.toString(); }
    plus(other) { return new Hex(this + other); }
    minus(other) { return new Hex(this - other); }
    static parse(string) { return Number.parseInt(string, 16); }
  }
//---------Task_1-----------------
var FF = new Hex(255);
console.log("255 = " + FF.toString());
console.log("255 + 1 = " + (FF.valueOf() + 1));
var a = new Hex(10);
var b = new Hex(5);
console.log("a+b = " + a.plus(b).toJSON());
console.log("a-b = " + a.minus(b).toJSON());
console.log("0xFF = " + Hex.parse("0xFF"));
console.log("FF = " + Hex.parse("FF"));
console.log("-------------------------");
//---------Task_2-----------------
let d = new Dictionary();
d.newEntry("Apple", "A fruit that grows on trees");
console.log(d.look("Apple"));
console.log(d.look("Banana"));