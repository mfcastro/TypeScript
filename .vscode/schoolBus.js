var SchoolBus = (function () {
    function SchoolBus(busType) {
        this.Name = busType;
        this.wheels = 8;
    }
    SchoolBus.prototype.boardBus = function (passenger) {
        this.passengers.push(passenger);
    };
    SchoolBus.prototype.listPassengers = function () {
        console.log("Available passengers");
        this.passengers.forEach(function (x) {
            console.log(x.name);
        });
    };
    return SchoolBus;
}());
var magicSchoolBus = new SchoolBus("school bus");
magicSchoolBus.boardBus(emily);
magicSchoolBus.listPassengers();
//# sourceMappingURL=schoolBus.js.map