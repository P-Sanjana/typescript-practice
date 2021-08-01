class Student{
    name:string;
    phone:string;
    eli:string;
    city:string;
    constructor(name:string,phone:string,eli:string,city:string){
        this.name=name;
        this.phone=phone;
        this.eli=eli;
        this.city=city;
    }
}
class wsa extends Student{
    cname:string;
    cstatus:String;
    cfee:string;
    bfee:string;
    cfeestatus:string;
    constructor({name,phone,eli,city,cname,cstatus,cfee,bfee,cfeestatus}:{name:string;phone:string;eli:string;city:string;cname:string;
    cstatus:string;cfee:string;bfee:string;cfeestatus:string}) {
        super(name,phone,eli,city);
        this.cname=cname;
        this.cstatus=cstatus;
        this.cfee=cfee;
        this.bfee=bfee;
        this.cfeestatus=cfeestatus;
    }
}
let s=new wsa({name:"ram",phone:"987654321",eli:"eligible",city:"hyd",cname:"wt",cstatus:"ongoing",cfee:"5000",bfee:"2000",cfeestatus:"unpaid"});
if(getplace(s)=="false")
console.log("not eligible to get placed");
else
console.log("eligible to get placed");
function getplace(s:wsa) :string{
    if(s.eli=="eligible" && s.cfeestatus=="paid")
    return "true";
    return "false";
}
pay(s,2000);
function pay(s:wsa,a:number){
    var a1=s.bfee;
    s.bfee=(parseInt(a1)-a).toString();
    if(s.bfee=="0")
    s.cfeestatus="paid";
}
if(getplace(s)=="false")
console.log("not eligible to get placed");
else
console.log("eligible to get placed");