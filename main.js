const{split}=require('./1')
const {permute} = require('./2')
const{factorial}=require('./3')
const{frequency}=require('./4')
const {calendar} = require('./5');
const {QuickSort} = require('./6');

//task1
let mas = "my name iz Dzvina\n";
split(mas);

//task2
let string='top'
permute(string);

//task3
let n=4  
factorial(n);

//task4
let arr=[1,6,3,4,1,6,3,1];
let res={};
frequency(arr,res)

//task5
calendar(2, 2020);


//task6
let A = [1, 213, 3, 5, 2, 8, 7];
QuickSort(A);

//task7
class Passenger {
    constructor(number, name, ticketNumber ){
        this.number = number;
        this.name = name;
        this.ticketNumber=ticketNumber;
    }
}

class Train {
    constructor(number, name, passenger) {
        this.number = number;
        this.name = name;
        this.passenger = passenger;
    }

    info() {
        console.log(this)
    }
}

class Tickets{
constructor(number,trainNumber){
    this.number=number;
    this.trainNumber=trainNumber;
    }
}

class soldedTickets {

    constructor(number, trainNumber, PassengerNumber) {
        this.number = number;
        this.trainNumber = trainNumber;
        this.PassengerNumber = PassengerNumber;
    }
}

let tickets=[
    new Tickets(1,45),new Tickets(2,145),new Tickets(3,68),
    new Tickets(4,47),new Tickets(5,368),new Tickets(6,854)
]

let soldedtickets=[
    new soldedTickets(1,45,1),new soldedTickets(2,145,2),new soldedTickets(3,68,3),
    new soldedTickets(4,47,4),new soldedTickets(5,368,undefined),new soldedTickets(6,854,6)
]

let trains=[
    new Train(1,'tr1',3),new Train(2,'tr2',2),new Train(3,'tr3',1),
    new Train(4,'tr4',4),new Train(5,'tr5',35),new Train(6,'tr6',6)
]

let passengers=[
    new Passenger(1,'Yulia',1),new Passenger(2,'Iryna',2),new Passenger(3,'Oksana',3),
    new Passenger(4,'Ivan',4),new Passenger(5,'Oleksandr',5),new Passenger(6,'Nazar',6)
]

//додавання нового пасажира
let newPassenger= new Passenger(Math.round(Math.random()*10),"New Passenger",undefined);
console.log('\nДодавання нового пасажира:\n');
console.log(passengers);

let addNewPassenger=(newPassenger)=>{
    passengers.push(newPassenger);
};
addNewPassenger(newPassenger);
console.log(passengers);

//Редагування пасажира в колекції
console.log('\nРедагування пасажира в колекції:');

let edditPassengerClass=()=>{
    let editedPassenger
    passengers.forEach((value,index)=>{
        if(
            value.number===4){editedPassenger=value;
            value.ticketNumber+=" edited";}
        
    });
    console.log(`Пасажир №: ${editedPassenger.number}, ${editedPassenger.name}, номер квитка ${editedPassenger.ticketNumber}`)
    console.log(passengers);
};
edditPassengerClass();

//Видалення першого пасажира з колекції
console.log('\ВВидалення першого пасажира:');
console.log(passengers);
let deletePassenger=(passengers)=>{
    passengers.shift();
};
deletePassenger(passengers);
console.log(passengers);

//Пошук одного пасажира в колекції

console.log('\nПошук одного пасажира в колекції:');
let findPassenger = passengers.find(value => {
    return value.name = 'Oksana'
});
console.log(findPassenger);

//Додавання потяга в колекцію
console.log('\nДодавання потяга в колекцію:');

console.log(trains);
trains.push(new Train(Math.round(Math.random()*999), "NewTrain", undefined));
console.log(trains);

//Редагування потяга в колекції
console.log('\nРедагування потяга в колекції:');

let editTrainClass=()=>{
    let renameTrain
    trains.forEach((value,index)=>{
        if(
            value.number===1){renameTrain=value;
            value.name+=" renamed";}
   });
    console.log(trains);
};
editTrainClass();

//Видалення потяга з колекції
console.log('\nВидалення першого потяга:');
console.log(trains);
let deleteTrain=(trains)=>{
    trains.shift();
};
deleteTrain(trains);
console.log(trains);

//Пошук одного потяга в колекції
console.log('\nПошук одного потяга в колекції:');
let findTrain = trains.find(value => {
    return value.name = 'tr6'
});
console.log(findTrain);

//Покупка пасажиром квитка на потяг
console.log('\nПокупка пасажиром квитка на потяг');

let withoutTicket = soldedtickets.find(value => {
    return value.PassengerNumber === undefined
});
console.log(soldedtickets);

withoutTicket.PassengerNumber= soldedtickets[Math.round(Math.random()*soldedtickets.length-1)].PassengerNumber;

console.log(soldedtickets);

//Зміна квитка із одного потяга на інший
console.log('\nЗміна квитка із одного потяга на інший');
let changeTicket = soldedtickets.find(value => {
    return value.PassengerNumber === 4
});
console.log(soldedtickets);

changeTicket.PassengerNumber= soldedtickets[Math.round(Math.random()*soldedtickets.length-1)].PassengerNumber;

console.log(soldedtickets);


//Скасування покупки квитка
console.log('\nСкасування покупки квитка');
let withTicket = soldedtickets.filter(value => {
    return value.PassengerNumber !== undefined
});

console.log(soldedtickets);
withTicket[Math.floor(Math.random() * withTicket.length - 1)].number = undefined;
console.log(soldedtickets);

//Пошук потяга на який продали найбільше/найменше квитків
console.log('\nПошук потяга на який продали найбільше квитків:');

let MaxTrain = trains.filter(value => {
    return value.passenger === 35;
});

console.log(MaxTrain);

console.log('\nПошук потяга на який продали найменше квитків:');
//let minTr=Math.min(trains.passenger)
let MinTrain = trains.filter(value => {
    return value.passenger === 1;
});

console.log(MinTrain);
