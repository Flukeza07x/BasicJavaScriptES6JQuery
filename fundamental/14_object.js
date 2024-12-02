// การสร้างข้อมูล object
var person = {
    firstName: "Ratchanon", 
    lastName:"Decha", 
    age: 23,
    gender: "Male",
    fullName: function(){
       return this.firstName + " " + this.lastName;
    }
}


// การเรียกหรือการเข้าถึงสมาชิกใน Object
// Method 1
// ojectName.propertyName
console.log(person.firstName);

// Method 2
// objectName["propertyName"]
console.log(person["lastName"]);

// Method3
// ojectName.methodName()
console.log(person.fullName());

// Object Nested มีการซ้อนกันมากกว่า 1 ชั้น
var user = {
    id: "1",
    email: "Fluke@email.com",
    personInfo: {
        name: "Fluke",
        address: {
            line1: "255 NakhonRatshasima Rd.",
            line2: "BangsNakhonRatshasimaue Distric",
            city: "NakhonRatshasima",
            zipcode: "30000"
        }
    }
}

// การเข้าถึงสมาชิก
console.log(user.personInfo);
console.log(user.personInfo.name);
console.log(user.personInfo.address);
console.log(user.personInfo.address.city);