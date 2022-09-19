let people = [
    {
        id:1,
        name:"Marwin Siburn",
        birthdate:"9/15/1950",
        children:3,
        country:"Thailand",
        can_program:false
    },
    {
        id:2,
        name:"Suki Mabbot",
        birthdate:"1/18/1961",
        children:1,
        country:"Saudi Arabia",
        can_program:false
    },
    {
        id:3,
        name:"Enrichetta Lehemann",
        birthdate:"8/3/1969",
        children:0,
        country:"China",
        can_program:true
    },
    {
        id:4,
        name:"Alicea Lapworth",
        birthdate:"10/12/1953",
        children:0,
        country:"Sweden",
        can_program:true
    },
    {
        id:5,
        name:"Ortensia Bynold",
        birthdate:"11/28/1974",
        children:2,
        country:"United States",
        can_program:true
    },
    {
        id:6,
        name:"Justina Kisby",
        birthdate:"11/24/1966",
        children:3,
        country:"Portugal",
        can_program:false
    },
    {
        id:7,
        name:"Leoline McKimm",
        birthdate:"4/30/1964",
        children:4,
        country:"Honduras",
        can_program:false
    },
    {
        id:8,
        name:"Nickey Beavan",
        birthdate:"3/29/1969",
        children:1,
        country:"Ukraine",
        can_program:false
    },
    {
        id:9,
        name:"Rhonda Tidridge",
        birthdate:"9/2/1999",
        children:2,
        country:"Russia",
        can_program:false
    },
    {
        id:10,
        name:"Martha Warder",
        birthdate:"1/2/1999",
        children:3,
        country:"Jordan",
        can_program:true
    }
]

// Output how many children all people have, in total
let total = 0;
for(let i =0; i<people.length;i++){
   (total += people[i].children);
}
console.log(total)

// Output one string per person
for(let i =0;i<people.length;i++){
    console.log(people[i].name)
    console.log(people[i].birthdate)
}

// Output all properties of all people using for…in
for (let i in people) {
    console.log(people[i]);
}