function Human(name, gender) {
  this.name = name;
  this.gender = gender;
}

function Apartment() {
  this.residents = [];

  this.createResident = function(newResident) {
    this.residents.push(Human);
    
  } 
}

function Building(maxApartment) {
  this.maxApartment = maxApartment;
  this.apartments = [];

if(this.apartments > this.maxApartment || this.createApartment instanceof Apartment) {
	console.log(`Error`)
} else {
		this.createApartment = function(newApartment) {
    this.apartments.push(Apartment)
		}
	}
  console.log(this.apartments)
}

const newBuilding = new Building(7);
const Flat = new Apartment();
const Max = new Human('Max', 'female');
const Lara = new Human('Lara', 'male');
const Mark = new Human('Mark', 'female');
Flat.createResident(Max);
Flat.createResident(Lara);
newBuilding.createApartment(Flat)