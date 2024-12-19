class CrewMemberCL {
    constructor(firstName,secondName, rank){
        this.firstName = firstName;
        this.secondName = secondName;
        this.rank = rank;
    }

    get greetCrewMember(){
        console.log(`Welcome aboard ${this.rank} ${this.firstName} ${this.secondName}`)
    }
}


const dave = new CrewMemberCL('Dave','Lister','third-class technician');
const arnold = new CrewMemberCL('Arnold','Rimmer', 'second-technician');
dave.greetCrewMember;
arnold.greetCrewMember;

CrewMemberCL.hey = function() {
    console.log('Hey there 🍕');
}

CrewMemberCL.hey(); // not found in prototype of dave or arnold objects

const PersonProto = {
    calcAge() {
        console.log(2037 - this.birthYear);
    },

    init(firstName, birthYear){
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
}

const steven = Object.create(PersonProto);
console.log(steven)

steven.init('Steven', 1920)
steven.calcAge()
console.log(steven)
