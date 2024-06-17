// Contstructor function
const Person = function(firstName, lastName, birthYear){
    // Instance properties
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;

    // Instance methods
    this.calcAge = function(){
        console.log(2024 - this.birthYear);
    }
}
  
 const ben = new Person('Ben','Geraghty',1989);
 console.log(ben);
 ben.calcAge();