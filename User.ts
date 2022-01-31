interface Job {
    companyName : string;
    position : string;
}

class User {
    private static money  = 10000;
    private name : string;
    private age : number;
    private job? : Job;
    private constructor (name : string, age : number, job?:Job) {
        this.name = name;
        this.age = age;
        this.job = job;
    }
    static create(name : string, age : number, job?:Job) {
        return new User(name, age, job)
    }
    changeAge(age : number){
        this.age = age;
    }
    changeJob(job : Job){
        this.job = job;
    }
}

const me = User.create("유동환", 23, {companyName : "서울", position : "개발"});
console.log(me)
me.changeAge(26);
console.log(me)