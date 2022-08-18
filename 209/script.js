class MyClass {
  // no () just static and { your code }
  static {
    console.log("called once");
  }

  myOtherMethod() {
    console.log("run when I want or every time")
  }
}

/* other code  */
new MyClass();
new MyClass();
new MyClass();
new MyClass();
new MyClass();