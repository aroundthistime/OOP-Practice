interface Job {
    companyName : string;
    position : string;
}

class User {
    private static money  = 10000;
    private constructor (private internalName : string, private age : number, private job?:Job) { }
    static create(name : string, age : number, job?:Job) {
        return new User(name, age, job)
    }
    get description() : string {
        return `Hello my name is ${this.internalName}, i am ${this.age} years old`
    }
    set name(name : string) {
        this.name = name
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