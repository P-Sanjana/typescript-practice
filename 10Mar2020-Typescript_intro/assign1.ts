class d{
    name:string;
    seg:string;
    worth:string;
    constructor(name:string,seg:string,worth:string){
        this.name=name;
        this.seg=seg;
        this.worth=worth;
    }
}
class m extends d{
    
}
class ak extends m{
    
}
let d1:new d({name:"dhirubhai ambani",seg:"retail and textile",worth:"1Billion"});
console.log(d1.name);