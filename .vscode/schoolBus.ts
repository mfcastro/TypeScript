class SchoolBus{
    Name: string;
    wheels: number;
    passengers:person[];

    constructor(busType: string){
        this.Name = busType;
        this.wheels = 8;
    }

    boardBus(passenger:person){
        this.passengers.push(passenger);
    }

    listPassengers(){
        console.log("Available passengers");
        this.passengers.forEach(function(x){
            console.log(x.name);
        });
    }
}



let magicSchoolBus = new SchoolBus("school bus");

magicSchoolBus.boardBus(emily);
magicSchoolBus.listPassengers();
