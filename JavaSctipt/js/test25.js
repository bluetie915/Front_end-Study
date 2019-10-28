/**
 * Created by 张艺成 on 2019/7/18.
 */
(function(){
    function people(name){
        this.name = name;
    }
    people.prototype.say = function(){
        alert("Hello"+this.name);
    }
    window.people = people;
}());

(function (){
    function student(name){
        this.name = name;
    }
    student.prototype = new people();
    var superSay = student.prototype.say;
    student.prototype.say = function(){
        superSay.call(this);
        alert("stu-Hello"+this.name);
    }
    window.student = student;
}());
var t1 = new student("zhangsan");
t1.say();