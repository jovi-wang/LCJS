function Stack() {
    let items = [];
    this.push = function(element){
        items.push(element);
    };
    this.pop = function(){
        return items.pop();
    };
    this.peek = function(){
        return items[items.length-1];
    };
    this.isEmpty = function(){
        return items.length == 0;
    };
    this.size = function(){
        return items.length;
    };
    this.clear = function(){
        items = [];
    };
    this.print = function(){
        console.log(items.toString());
    };
}

let stack = new Stack();
console.log(stack.isEmpty()); //outputs true
stack.push(5);
stack.push(8);
console.log(stack.peek()); // outputs 8
stack.push(11);
console.log(stack.size()); // outputs 3
console.log(stack.isEmpty()); //outputs false
stack.push(15);
stack.pop();
stack.pop();
console.log(stack.size()); // outputs 2
stack.print(); // outputs [5, 8]

let Stack2 = (function () {
    const items = new WeakMap();
    class Stack {
        constructor () {
            items.set(this, []);
        }
        //other methods
    }
    return Stack; //{5}
})();
function Queue() {
    let items = [];
    this.enqueue = function(element){
        items.push(element);
    };
    this.dequeue = function(){
        return items.shift();
    };
    this.front = function(){
        return items[0];
    };
    this.isEmpty = function(){
        return items.length === 0;
    };
    this.size = function(){
        return items.length;
    };
    this.print = function(){
        console.log(items.toString());
    };
}
let queue = new Queue();
console.log(queue.isEmpty()); //outputs true
queue.enqueue("John");
queue.enqueue("Jack");
queue.enqueue("Camila");
queue.print();
console.log(queue.size()); //outputs 3
console.log(queue.isEmpty()); //outputs false
queue.dequeue();
queue.dequeue();
queue.print();
let Queue2 = (function () {
    const items = new WeakMap();
    class Queue2 {
        constructor () {
            items.set(this, []);
        }
        enqueue(element) {
            let q = items.get(this);
            q.push(element);
        }
        dequeue() {
            let q = items.get(this);
            let r = q.shift();
            return r;
        }
//other methods
    }
    return Queue2;
})();

function PriorityQueue() {
    let items = [];
    function QueueElement (element, priority){ // {1}
        this.element = element;
        this.priority = priority;
    }
    this.enqueue = function(element, priority){
        let queueElement = new QueueElement(element, priority);
        let added = false;
        for (let i=0; i<items.length; i++){
            if (queueElement.priority < items[i].priority){ // {2}
                items.splice(i,0,queueElement);
                added = true;
                break; // {4}
            }
        }
        if (!added){
            items.push(queueElement); //{5}
        }
    };
    this.print = function(){
        for (let i=0; i<items.length; i++){
            console.log(`${items[i].element} ${items[i].priority}`);

        }
    };
//other methods - same as default Queue implementation
}
let priorityQueue = new PriorityQueue();
priorityQueue.enqueue("John", 2);
priorityQueue.enqueue("Jack", 1);
priorityQueue.enqueue("Camila", 1);
priorityQueue.print();

function LinkedList() {
    let Node = function(element){
        this.element = element;
        this.next = null;
    };
    let length = 0;
    let head = null;
    this.append = function(element){
        let node = new Node(element),
            current;
        if (head === null){ //first node on list
            head = node;
        } else {
            current = head;
            //loop the list until find last item
            while(current.next){
                current = current.next;
            }
            //get last item and assign next to node to make the link
            current.next = node;
        }
        length++; //update size of list
    };
    this.insert = function(position, element){
        //check for out-of-bounds values
        if (position >= 0 && position <= length){ //
            let node = new Node(element),
                current = head,
                previous,
                index = 0;
            if (position === 0){ //add on first position
                node.next = current; //
                head = node;
            } else {
                while (index++ < position){ //
                    previous = current;
                    current = current.next;
                }
                node.next = current; //
                previous.next = node; //
            }
            length++; //update size of list
            return true;
        } else {
            return false; //
        }
    };
    this.removeAt = function(position) {
        //check for out-of-bounds values
        if (position > -1 && position < length) {
            let current = head, //
                previous, //
                index = 0; //
            //removing first item
            if (position === 0) { //
                head = current.next;
            } else {
                while (index++ < position) { //
                    previous = current;
                    current = current.next; //
                }
                //link previous with current's next: skip it to remove
                previous.next = current.next; //
            }
            length--; //
            return current.element;
        } else {
            return null;
        }
    };
    this.getHead = function(){
        return head;
    };
    this.remove = function(element){
        let index = this.indexOf(element);
        return this.removeAt(index);
    };
    this.indexOf = function(element){
        let current = head, //
            index = -1;
        while (current) {
            if (element === current.element) {
                return index;
            }
            index++;
            current = current.next;
        }
        return -1;
    };
    this.isEmpty = function() {
        return length === 0;
    };
    this.size = function() {
        return length;
    };
    this.toString = function(){
        let current = head, //
            string = '';
        while (current) {
            string +=current.element +(current.next ? '->' : '');//
            current = current.next;
        }
        return string;
    };
    this.print = function(){};
}

let list = new LinkedList();
list.append(15);
list.append(10);
console.log(list.getHead());

function DoublyLinkedList() {
    let Node = function(element){
        this.element = element;
        this.next = null;
        this.prev = null; //NEW
    };
    let length = 0;
    let head = null;
    let tail = null; //NEW
    this.insert = function(position, element){
        //check for out-of-bounds values
        if (position >= 0 && position <= length){
            let node = new Node(element),
                current = head,
                previous,
                index = 0;
            if (position === 0){ //add on first position
                if (!head){
                    head = node;
                    tail = node;
                } else {
                    node.next = current;
                    current.prev = node;
                    head = node;
                }
            } else if (position === length) { //last item
                current = tail;
                current.next = node;
                node.prev = current;
                tail = node;
            } else {
                while (index++ < position){
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;
                current.prev = node; //
                node.prev = previous; //
            }
            length++; //update size of list
            return true;
        } else {
            return false;
        }
    };
    //for insert and remove if position is larger than length/2, iterate from tail
    this.removeAt = function(position){
        //look for out-of-bounds values
        if (position > -1 && position < length){
            let current = head,
                previous,
                index = 0;
            //removing first item
            if (position === 0){
                head = current.next; // {1}
                //if there is only one item, update tail //NEW
                if (length === 1){ // {2}
                    tail = null;
                } else {
                    head.prev = null; // {3}
                }
            } else if (position === length-1){ //last item //NEW
                current = tail; // {4}
                tail = current.prev;
                tail.next = null;
            } else {
                while (index++ < position){ // {5}
                    previous = current;
                    current = current.next;
                }
                //link previous with current's next - skip it
                previous.next = current.next; // {6}
                current.next.prev = previous; //NEW
            }
            length--;
            return current.element;
        } else {
            return null;
        }
    };
}

function mySet() {
    let items = {};
    this.has = function(value){
        return value in items;
        //return items.hasOwnProperty(value);
    };
    this.add = function(value){
        if (!this.has(value)){
            items[value] = value; //
            return true;
        }
        return false;
    };
    this.delete = function(value){
        if (this.has(value)){
            delete items[value]; //{2}
            return true;
        }
        return false;
    };
    this.clear = function(){
        items = {}; //
    };
    this.size = function(){
        return Object.keys(items).length; //{4}
    };
    this.sizeLegacy = function(){
        let count = 0;
        for(let key in items) { //{5}
            if(items.hasOwnProperty(key)) //{6}
                ++count; //{7}
        }
        return count;
    };
    this.values = function(){
        let values = [];
        for (let i=0, keys=Object.keys(items); i<keys.length; i++) {
            values.push(items[keys[i]]);
        }
        return values;
    };
    this.valuesLegacy = function(){
        let values = [];
        for(let key in items) { //{7}
            if(items.hasOwnProperty(key)) { //{8}
                values.push(items[key]);
            }
        }
        return values;
    };
    this.union = function(otherSet){
        let unionSet = new mySet(); //{1}
        let values = this.values(); //{2}
        for (let i=0; i<values.length; i++){
            unionSet.add(values[i]);
        }
        values = otherSet.values(); //{3}
        for (let i=0; i<values.length; i++){
            unionSet.add(values[i]);
        }
        return unionSet;
    };
    this.intersection = function(otherSet){
        let intersectionSet = new mySet(); //
        let values = this.values();
        for (let i=0; i<values.length; i++){ //
            if (otherSet.has(values[i])){
                intersectionSet.add(values[i]); //
            }
        }
        return intersectionSet;
    };
    this.difference = function(otherSet){
        let differenceSet = new Set(); //
        let values = this.values();
        for (let i=0; i<values.length; i++){ //
            if (!otherSet.has(values[i])){
                differenceSet.add(values[i]); //
            }
        }
        return differenceSet;
    };
    this.subset = function(otherSet){
        if (this.size() > otherSet.size()){ //
            return false;
        } else {
            let values = this.values();
            for (let i=0; i<values.length; i++){ //
                if (!otherSet.has(values[i])){
                    return false; //
                }
            }
            return true; //
        }
    };
}
let myset = new mySet();
myset.add(1);
console.log(myset.values()); //outputs ["1"]
console.log(myset.has(1));
//outputs true
console.log(myset.size());
//outputs 1
myset.add(2);
console.log(myset.values()); //outputs ["1", "2"]
console.log(myset.has(2));
//true
console.log(myset.size());
//2
myset.delete(1);
console.log(myset.values()); //outputs ["2"]
myset.delete(2);
console.log(myset.values()); //outputs []
let mysetA = new mySet();
mysetA.add(1);
mysetA.add(2);
mysetA.add(3);
let mysetB = new mySet();
mysetB.add(3);
mysetB.add(4);
mysetB.add(5);
mysetB.add(6);
let unionAB = mysetA.union(mysetB);
console.log(unionAB.values());
let intersectionAB = mysetA.intersection(mysetB);
console.log(intersectionAB.values());
let differenceAB = mysetA.difference(mysetB);
console.log(differenceAB.values());

//ES6 set
let set = new Set();
set.add(1);
console.log(set.values()); //outputs @Iterator
console.log(set.has(1));//outputs true
console.log(set.size);//outputs 1
set.delete(1);

let setA = new Set();
setA.add(1);
setA.add(2);
setA.add(3);
let setB = new Set();
setB.add(2);
setB.add(3);
setB.add(4);
let unionAb = new Set(); //{1}
for (let x of setA) unionAb.add(x); //{2}
for (let x of setB) unionAb.add(x); //{3}
let intersection = function(setA, setB){
    let intersectionSet = new Set();
    for (let x of setA){
        if (setB.has(x)){ //{1}
            intersectionSet.add(x);
        }
    }
    return intersectionSet;
};
let difference = function(setA, setB){
    let differenceSet = new Set();
    for (let x of setA){
        if (!setB.has(x)){ //{1}
            differenceSet.add(x);
        }
    }
    return differenceSet;
};
let differenceAB2 = difference(setA, setB);
let intersectionAB2 = intersection(setA, setB);


function Dictionary(){
    var items = {};
    this.has = function(key){
        return key in items;
    };
    this.set = function(key, value){
        items[key] = value; //{1}
    };
    this.get = function(key) {
        return this.has(key) ? items[key] : undefined;
    };
    this.delete = function(key){
        if (this.has(key)){
            delete items[key];
            return true;
        }
        return false;
    };
    this.values = function(){
        var values = [];
        for (var k in items) { //{1}
            if (this.has(k)) {
                values.push(items[k]); //{2}
            }
        }
        return values;
    };
    this.keys = function(){
        return Object.keys(items);
    };
    this.getItems = function(){
        return items;
    }
}
var dictionary = new Dictionary();
dictionary.set('Gandalf', 'gandalf@email.com');
dictionary.set('John', 'johnsnow@email.com');
dictionary.set('Tyrion', 'tyrion@email.com');
console.log(dictionary.has('Gandalf'));
// console.log(dictionary.size());
console.log(dictionary.keys());
console.log(dictionary.values());
console.log(dictionary.get('Tyrion'));

function HashTable() {
    var table = [];
    var loseloseHashCode = function (key) {
        var hash = 0;
        for (var i = 0; i < key.length; i++) { //{2}
            hash += key.charCodeAt(i);
        }
        return hash % 37;
    };
    this.put = function (key, value) {
        var position = loseloseHashCode(key); //{5}
        console.log(position + ' - ' + key); //{6}
        table[position] = value; //{7}
    };
    this.get = function (key) {
        return table[loseloseHashCode(key)];
    };
    this.remove = function(key){
        table[loseloseHashCode (key)] = undefined;
    };
    this.print = function () {
        for (var i = 0; i < table.length; ++i) { //{1}
            if (table[i] !== undefined) {
                console.log(i + ": " + table[i]); //{3}
            }
        }
    };
}
var hash = new HashTable();
hash.put('Gandalf', 'gandalf@email.com');
hash.put('John', 'johnsnow@email.com');
hash.put('Tyrion', 'tyrion@email.com');
console.log(hash.get('Gandalf'));
console.log(hash.get('Loiane'));
hash.remove('Gandalf');
console.log(hash.get('Gandalf'));