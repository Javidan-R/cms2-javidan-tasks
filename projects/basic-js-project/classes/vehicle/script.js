// Vehicle class
class Vehicle {
    constructor(fuel, wheelCount, landOrAir) {
      this.fuel = fuel;
      this.wheelCount = wheelCount;
      this.landOrAir = landOrAir;
    }
  }
  
  // Car class
  class Car extends Vehicle {
    constructor(model, country, fuel, wheelCount, landOrAir) {
      super(fuel, wheelCount, landOrAir);
      this.model = model;
      this.country = country;
    }
  }
  
  // Plane class
  class Plane extends Vehicle {
    constructor(model, country, fuel, wheelCount, landOrAir) {
      super(fuel, wheelCount, landOrAir);
      this.model = model;
      this.country = country;
    }
  }
  
  // DOM elements
  const vehicleList = document.getElementById('vehicle-list');
  const vehicleForm = document.getElementById('vehicle-form');
  
  // Array to store vehicles
  const vehicles = [];
  
  // Function to add a vehicle
  function addVehicle(event) {
    event.preventDefault();
  
    // Get form input values
    const model = document.getElementById('model').value;
    const country = document.getElementById('country').value;
    const fuel = document.getElementById('fuel').value;
    const wheelCount = document.getElementById('wheelCount').value;
    const landOrAir = document.getElementById('landOrAir').value;
  
    // Create a new vehicle object based on form inputs
    const vehicle = new Car(model, country, fuel, wheelCount, landOrAir);
  
    // Add the vehicle to the array
    vehicles.push(vehicle);
  
    // Clear form inputs
    vehicleForm.reset();
  
    // Display the updated list of vehicles
    displayVehicles();
  }
  
  // Function to display vehicles
  function displayVehicles() {
    // Clear the vehicle list
    vehicleList.innerHTML = '';
  
    // Iterate over the vehicles array and create vehicle cards
    for (const vehicle of vehicles) {
      const vehicleCard = document.createElement('div');
      vehicleCard.classList.add('vehicle-card');
  
      const modelPara = document.createElement('p');
      modelPara.textContent = `Model: ${vehicle.model}`;
      vehicleCard.appendChild(modelPara);
  
      const countryPara = document.createElement('p');
      countryPara.textContent = `Country: ${vehicle.country}`;
      vehicleCard.appendChild(countryPara);
  
      const fuelPara = document.createElement('p');
      fuelPara.textContent = `Fuel: ${vehicle.fuel}`;
      vehicleCard.appendChild(fuelPara);
  
      const wheelCountPara = document.createElement('p');
      wheelCountPara.textContent = `Wheel Count: ${vehicle.wheelCount}`;
      vehicleCard.appendChild(wheelCountPara);
  
      const landOrAirPara = document.createElement('p');
      landOrAirPara.textContent = `Land or Air: ${vehicle.landOrAir}`;
      vehicleCard.appendChild(landOrAirPara);
  
      vehicleList.appendChild(vehicleCard);
    }
  }
  
  // Event listener for form submission
  vehicleForm.addEventListener('submit', addVehicle);
      