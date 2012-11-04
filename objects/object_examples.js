// testing out javascript
/*
  The following code is a series of lessons to help me understand objects and 
  object prototypal inheritence in javascript
 */

window.onload = getstarted;
var responseDiv;

function getstarted() {
  responseDiv = document.getElementById("response");

  doObjectInstantiation();
  demonstrateScoping();
  demonstrateObjects();
  basicScope();
}

function doObjectInstantiation() {
  /***** Object instantiation - this all works correctly ****/
  function User(name, age) {
    this.name = name;
    this.age = age;
  }

  User.prototype.getName = function() {
    return this.name;
  };

  User.prototype.getAge = function() {
    return this.age;
  };

  var user = new User("Chris",31);
  var user2 = new User("Rebecca",30);

  
  responseDiv.innerHTML += "user1 name = " + user.getName() + "; age = " + user.getAge() + "<br>";
  responseDiv.innerHTML += "user2 name = " + user2.getName() + "; age = " + user2.getAge() + "<br>";
}

function demonstrateScoping() {
  function obj() {
    this.val = false;
    this.no = function() {
      this.val = false;
    }
    this.yes = function() {
      this.val = true;
    }
  };
  obj.prototype.thisWillWork = function() {
    return "this works!";
  };

  var myobj = new obj();
  myobj.yes();
  responseDiv.innerHTML += "myobj.yes();<br>";
  responseDiv.innerHTML += "myobj.val = " + (myobj.val?"true":"false") + "<br>";
  responseDiv.innerHTML += "myobj.thisWillWork() " + myobj.thisWillWork() + "<br>";
}

function demonstrateObjects() {
    /*
      b can get access to a because both a and b are able to be declared when obj2 is instantiated.
      When b is called on obj2, the b function is given the scope of obj2
     */
    var obj2 = {
      a: 5,
      b: function() {
        return this.a + 3;
      }
    };

    responseDiv.innerHTML += "obj2.b() " + obj2.b() + "<br>";
}

function basicScope() {
    function Classroom(students,teacher) {
      function disp(scope) {
        return scope.students.join(", ");
      }
      this.students = students;
      this.teacher = teacher;

      this.display = function() {
        disp(this);
      }
    }

    var classroom = new Classroom(["John","Bob"],"Mr. Smith");

    responseDiv.innerHTML += "classroom.display() = " + classroom.display() + "<br>";
    responseDiv.innerHTML += "classroom.students = " + classroom.students + "<br>";
}
