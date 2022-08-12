class Parent {
  constructor() {
    this.array = [];
  }

  displayArray() {
    console.log(this.array);
  }
}

class Child extends Parent {
  constructor() {
    super();
    // "this" is new Child()
    // BUG: it don't push nothing 
    Parent.array.push(this);
    
    // console.log(Parent.array)
  }
}

// here I create 3 copies (as a example)
new Child();
new Child();
new Child();

// here the Parent Array need to be like this:
// this.array = [new Child(), new Child(), new Child()];
new Child();

// so I can do some loops and stuff with that array...

