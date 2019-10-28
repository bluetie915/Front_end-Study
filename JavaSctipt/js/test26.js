/**
 * Created by 张艺成 on 2019/7/18.
 */
function Person(name){
    var _this = {};
    _this.name = name;
    _this.sayHello = function(){
      alert("Hello"+_this.name);
    };
    return _this;
}
function Teacher(name){
    var _this = Person(name);//将父类给子类
    var supSay = _this.sayHello;//调用父类方法
    _this.sayHello = function(){//重写父类
        supSay.call(_this);
        alert("t-hello"+_this.name);
    };
    return _this;
}
var t = Teacher("zhangsan");
t.sayHello();