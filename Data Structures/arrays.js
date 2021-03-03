// Implimenting arrays using class and hashmap

class MyArrays{
  constructor(){
    this.length = 0;
    this.data = {};
  }

  push(item){
      this.data[this.length++] = item;
  }

  get(index){
    console.log(this.data[index]);
  }

  pop(){
    let deletedItem = this.data[this.length - 1];
    delete this.data[--this.length];
  }

  delete(index){
    let deletedIndex = this.data[index];
    this.shiftElements(index);
  }

  shiftElements(index){
    for(let i = index; i < this.length-1 ; i++){
      this.data[i] = this.data[i + 1];
    }
    delete this.data[--this.length];
  }
}

let newArray = new MyArrays();
newArray.push("hello");
newArray.push("World");
newArray.push("!");
newArray.delete(1);
console.log(newArray);