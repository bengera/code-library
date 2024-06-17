    console.log('----------------Prototype understanding----------------');

    const CrewMember = function (firstName, lastName, age, position) {
        this.firstName = firstName; // assigns value of paramater fistName to property of new object
        this.lastName = lastName;
        this.age = age;
        this.position = position;

    }

    const lister = new CrewMember('Dave','Lister', 26, 'Technician');
    const rimmer = new CrewMember('Arnold','Rimmer', 30, 'Second Technician');
    const cat = new CrewMember('Cat','', 26, '');
    const kryten = new CrewMember('Kryten', '2X4B-523P',3500000, 'Service Mechanoid');
    const kochanski = new CrewMember('Kristine', 'Kochanski', 26, 'Navigation Officer');

    CrewMember.prototype.getFirstLetterOfName = function() {
        console.log('The first letter of ' + this.firstName + ' is ' + this.firstName.charAt(0));
    }

    CrewMember.prototype.getInitials = function() {
        const firstInitial = this.firstName.charAt(0); // this keyword is set to the object that is calling the method
        const secondInitial = this.lastName.charAt(0);
        console.log('Crew member\'s initials: ' + firstInitial.concat(secondInitial));
        
    }

console.log(lister,rimmer,cat, kryten, kochanski);
lister.getFirstLetterOfName();
rimmer.getFirstLetterOfName();
cat.getFirstLetterOfName();
kryten.getFirstLetterOfName();
kochanski.getFirstLetterOfName();

lister.getInitials();
rimmer.getInitials();
cat.getInitials();
kryten.getInitials();
kochanski.getInitials();

console.log(CrewMember.prototype === lister.__proto__); // old
console.log(CrewMember.prototype === Object.getPrototypeOf(lister)); // modern
console.log(CrewMember.__proto__);