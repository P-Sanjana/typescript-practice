function sayHello(name: string): string {
    return "Hello, " + name;
}
function disp_details(id: number, name: string, mail_id?: string) {
    console.log("ID:", id);
    console.log("Name", name);

    if (mail_id != undefined)
        console.log("Email Id", mail_id);
}

// anonymous function
var msg = function() { 
    return "hello, I am anonymous function !!";  
 } 

console.log(sayHello("Pavan"));
disp_details(123, "John");
disp_details(111, "mary", "mary@xyz.com");

console.log(msg());
