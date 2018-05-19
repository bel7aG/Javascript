let anyPerson = {
   firstname : "Default",
   lastname : "Default",
   getFullName : function() {
      return this.firstname + " " + this.lastname;
   }
}

let Belhassen =  {
   firstname : 'Belhassen',
   lastname : 'Gharsallah'
}
//dont do this ever
Belhassen.__proto__ = anyPerson;   //manesta3mélhéch interdit trazeli el 5edma
console.log(Belhassen.getFullName());


let John = {
   firstname : 'John'
}

John.__proto__ = Belhassen;
console.log(John.getFullName());
console.log('------');
for (let prop in John) {
      console.log(prop + " " + John[prop]);
}

console.log('------');
for (let prop in John) {
   if (John.hasOwnProperty(prop)) {
      console.log(prop + " " + John[prop]);
   }
}

let jane = {
   address : 'Abd Rahmen Ben aouf',
   getFormalFullName : function() {
      return this.firstname + " , " + this.lastname
   }
}
let jim = {
   getFirstName: function() {
      return firstname;
   }
}
