/*
  HTML Part

  <div id="root3">點我3</div>
  <div id="root4">點我4</div>

*/

class User {
  constructor(data) {
    this.data = data;
    var r3 = document.getElementById("root3");
    var r4 = document.getElementById("root4");
    var t = this.handleEvent2.bind(this);
    r3.addEventListener('click', this.handleEvent);
    r4.addEventListener('click', t);
  }
  handle() {
    console.log("handle ---> hello, " + this.data);
  }
  handleEvent() {
    document.getElementById('root3').innerHTML = this.data;
  }
   handleEvent2() {
    document.getElementById('root4').innerHTML = this.data;
  }
}
function handle2() {
   console.log("handle2 ---> hello, " + this.data);
}
User.prototype.handle2 = handle2;
var u = new User('Jeff');
u.handle(); // handle ---> hello, Jeff
u.handle2(); // handle2 ---> hello, Jeff
