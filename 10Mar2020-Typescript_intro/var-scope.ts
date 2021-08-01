var global_num = 12          //global variable 
class Numbers {
    num_val = 13;             //class variable 
    static sval = 10;         //static field 

    storeNum(): void {
        var local_num = 14;    //local variable 

        console.log("storeNum() Global: " + global_num)
        console.log("storeNum() local_num: " + local_num)
        console.log("storeNum() static: " + Numbers.sval)
        console.log("storeNum() num_val: " + this.num_val)
    }
}
console.log("Global num: " + global_num)
console.log("Static variable value: " + Numbers.sval)   //static variable  
var obj = new Numbers();
obj.storeNum();
console.log("Instance member: " + obj.num_val)
console.log("Sum of global, static and class variables: " +
    (global_num + Numbers.sval + obj.num_val));
