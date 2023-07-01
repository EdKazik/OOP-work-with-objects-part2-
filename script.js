function Human(name, gender) {
    this.name = name;
    this.gender = gender;
}

function Apartment() {
    this.residents = [];

    this.createResident = function (newResident) {
        
        if(newResident instanceof Human === true){
            this.residents.push(Human);

        } else {
            console.log(`Error, wrong type`);
            }
    }
}

function Building(maxApartment) {
    this.maxApartment = maxApartment;
    this.apartments = [];
    
    if (this.apartments > this.maxApartment) {
        console.log(`Error, the number of apartments is too high`);
    } else {
        this.createApartment = function(newApartment) {

        if (newApartment instanceof Apartment === true ) {
            this.apartments.push(Apartment)
        } else {
            console.log(`Error`);	
        }
	}
}
}

const newBuilding = new Building(3);
const Flat = new Apartment();
const Max = new Human('Max', 'female');
const Lara = new Human('Lara', 'male');
const Mark = new Human('Mark', 'female');

Flat.createResident(Max);
Flat.createResident(Lara);
Flat.createResident(Mark);

newBuilding.createApartment(Flat)
