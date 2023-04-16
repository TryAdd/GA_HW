class car{
    constructor(make, year ,model ,color,seats ){
        this.make = make;
        this.year = year;
        this.model = model;
        this.color = color;
        this.seats = seats;
        this.previousOwners = [];
        this.owner = 'munufacturer';
        this.running = false;
        this.passengers = [];

    }

    sell(newOwner){
        this.previousOwners.push(this.owner);
        return this.owner = newOwner;
        // console.log(this.previousOwners)
    }
    paint(newColor){
        this.color = newColor;
    }
    start(){
        this.running = true;
    }
    off(){
        this.running = false;
    }

    driveto(destination){
        if(this.running){
            console.log(`driving to ${destination}`);
            return true;
        }else{
            // console.log(`the car is not running`);
            return false;
        }
    }

    park(){
        if(!this.running){
            console.log('parked!!');
            return true;
        }else{
            // console.log(`cant park a running car`);
            return false;
        }
    }

    pickUp(name){
        if(this.running && this.passengers.length + 1 < this.seats){
            console.log(`Driving to pickup ${name}`);
            this.passengers.push(name);
            return true;
        }else{
            return false;
        }
    }

    dropOff(name){
        if(this.running){
            let i = this.passengers.indexOf(name);
            if(i !== -1){
                console.log(`Driving to drop off ${name}`);
                this.passengers.splice(i,1);
                return true;
            }else{
                return false;
            }
        }else{
            return false;
        }
    }

    passengerCount(){
        return this.passengers.length;
    }

}

const mycar = new car('Honda', 'Civic', '2021','grey','4');
// car3.sell('ahmed')
mycar.sell('ahmed');
mycar.sell('a7lam');
console.log(mycar);

mycar.start();
console.log(mycar.running);

mycar.driveto('s3odia');

mycar.off();
console.log(mycar.running);
mycar.driveto('bibf')


console.log(mycar.seats);
console.log(mycar.passengerCount());
mycar.start();
mycar.pickUp('Ahmed');
console.log(mycar.passengerCount());
mycar.pickUp('a7lam');
console.log(mycar.passengerCount());
mycar.pickUp('m7md');
console.log(mycar.passengerCount());



