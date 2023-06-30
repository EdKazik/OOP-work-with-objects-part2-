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

if(this.apartments > this.maxApartment) {
	console.log(`Error`)
} else {
		this.apartments.push(Apartment)
	}
  /* console.log(this.apartments) */
}

const newBuilding = new Building(7);
const Flat = new Apartment();
const Max = new Human('Max', 'gender');
Flat.createResident(new Human(Max));