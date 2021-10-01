// Variables
let selectList = document.querySelector('#building-type');
let inputTitle = $("#input-title");
let numOfApartments = $("#number-of-apartments");
let numOfFloors = $("#number-of-floors");
let numOfBasements = $("#number-of-basements");
let numOfParkingSpots = $("#number-of-parking-spots");
let numOfCompanies = $("#number-of-companies");
let numOfCorporations = $("#number-of-corporations");
let maxOccupancy = $("#maximum-occupancy");
let businessHours = $("#business-hours");
let numOfElevators = $("#number-of-elevators");
let typeOfElevators = $("#selection-services-button")
let elevatorAmount = $("#elevator-amount");
let elevatorUnitPrice = $("#elevator-unit-price");
let elevatorTotalPrice = $("#elevator-total-price");
let installationFees = $("#installation-fees");
let finalPrice = $("#final-price");

let numApts = document.querySelector("#num-apts");
let numFloors = document.querySelector("#num-floors");
let numBasements = document.querySelector("#num-basements");
let numBusinesses = document.querySelector("#num-businesses");
let numParking = document.querySelector("#num-parking");
let numElevators = document.querySelector("#num-elevators");
let numCorporations = document.querySelector("#num-corporations");
let numOccupantsFloor = document.querySelector("#num-occupants-floor");
let numHoursActivity = document.querySelector("#num-hours-activity");
let elevatorAmountInput = document.querySelector("#amount-elevator");
let elevatorUnitPriceInput = document.querySelector("#unit-price");
let elevatorTotalPriceInput = document.querySelector("#total-cost");
let installationFeesInput = document.querySelector("#installation-cost");
let finalPriceInput = document.querySelector("#cost-final");
let standardBtn = document.querySelector('#standard');
let premiumBtn = document.querySelector('#premium');
let exceliumBtn = document.querySelector('#excelium');

// Input Show/Hide Event
inputTitle.hide();
numOfApartments.hide();
numOfFloors.hide();
numOfBasements.hide();
numOfParkingSpots.hide();
numOfCompanies.hide();
numOfCorporations.hide();
maxOccupancy.hide();
businessHours.hide();
numOfElevators.hide();
typeOfElevators.hide();
elevatorAmount.hide();
elevatorUnitPrice.hide();
elevatorTotalPrice.hide();
installationFees.hide();
finalPrice.hide();

$("#building-type").change(function(e){

    numApts.value = 0;
    numFloors.value = 0;
    numBasements.value = 0;
    numBusinesses.value = 0;
    numParking.value = 0;
    numElevators.value = 0;
    numCorporations.value = 0;   
    numOccupantsFloor.value = 0;
    numHoursActivity.value = 0;
    elevatorAmountInput.value = 0;
    elevatorUnitPriceInput.value = 0;
    elevatorTotalPriceInput.value = 0;
    installationFeesInput.value = 0;
    finalPriceInput.value = 0;
   

    if(e.target.value == "select"){

        inputTitle.hide();
        numOfApartments.hide();
        numOfFloors.hide();
        numOfBasements.hide();
        numOfParkingSpots.hide();
        numOfCompanies.hide();
        numOfCorporations.hide();
        maxOccupancy.hide();
        businessHours.hide();
        numOfElevators.hide();
        typeOfElevators.hide();
        elevatorAmount.hide();
        elevatorUnitPrice.hide();
        elevatorTotalPrice.hide();
        installationFees.hide();
        finalPrice.hide();
        
   
    }
        
    if(e.target.value == "residential"){
        
        inputTitle.show();
        numOfApartments.show();
        numOfFloors.show();
        numOfBasements.show();
        numOfParkingSpots.hide();
        numOfCompanies.hide();
        numOfCorporations.hide();
        maxOccupancy.hide();
        businessHours.hide();
        numOfElevators.hide();
        typeOfElevators.show();
        elevatorAmount.show();
        elevatorUnitPrice.show();
        elevatorTotalPrice.show();
        installationFees.show();
        finalPrice.show();
  
    }

    if(e.target.value == "commercial"){
        
        inputTitle.show();
        numOfApartments.hide();
        numOfFloors.show();
        numOfBasements.show();
        numOfParkingSpots.show();
        numOfCompanies.hide();
        numOfCorporations.hide();
        maxOccupancy.hide();
        businessHours.show();
        numOfElevators.show();
        typeOfElevators.show();
        elevatorAmount.show();
        elevatorUnitPrice.show();
        elevatorTotalPrice.show();
        installationFees.show();
        finalPrice.show();
    
    }

    if(e.target.value == "corporate"){
        
        inputTitle.show();
        numOfApartments.hide();
        numOfFloors.show();
        numOfBasements.show();
        numOfParkingSpots.show();
        numOfCompanies.hide();
        numOfCorporations.show();
        maxOccupancy.show();
        businessHours.hide();
        numOfElevators.hide();
        typeOfElevators.show();
        elevatorAmount.show();
        elevatorUnitPrice.show();
        elevatorTotalPrice.show();
        installationFees.show();
        finalPrice.show();
    
    }

    if(e.target.value == "hybrid"){
        
        inputTitle.show();
        numOfApartments.hide();
        numOfFloors.show();
        numOfBasements.show();
        numOfParkingSpots.show();
        numOfCompanies.hide();
        numOfCorporations.hide();
        maxOccupancy.show();
        businessHours.show();
        numOfElevators.hide();
        typeOfElevators.show();
        elevatorAmount.show();
        elevatorUnitPrice.show();
        elevatorTotalPrice.show();
        installationFees.show();
        finalPrice.show();
    
    }
})

// Commercial Result
function calculateNumElevatorsCommercial(){
   let numElevators = document.getElementsById("num-elevators").value || 0;
   document.getElementsById("elevator-amount").value = numElevators;
   return numElevators;
}
// Residential Result
function calculateNumOfElevatorResidential(){
    if (numFloors.value != 0){
        let Rx = Math.ceil(numApts.value/(numFloors.value*6));
        let Ry = Math.ceil(numFloors.value/20);
        let rTotal= Rx*Ry;
        elevatorAmountInput.value=rTotal;
    } else {
        elevatorAmountInput.value = 0;
    }
}
// Corp. & Hyrid Result
function calculateNumOfElevatorCorporate(){
    let stories = parseFloat(numFloors.value)+parseFloat(numBasements.value);
    let numOccupants = (numOccupantsFloor.value)*(stories);
    let elevatorRequired = Math.ceil(numOccupants/1000);
    let columns = Math.ceil(stories/20)
    let elevatorPerColumns= Math.ceil(elevatorRequired/columns)
    let totalElevators = (elevatorPerColumns*columns)
    elevatorAmountInput.value= totalElevators 
    console.log(elevatorPerColumns)
    }

//  Product Line Functions
    function totalPriceElevator () {

        let x = parseInt(elevatorAmountInput.value);
        let y = parseInt(elevatorUnitPriceInput.value);

        document.getElementById('total-cost').value = x * y;
        
    }

    function costForInstallationStandard () {

        let amountElevator = parseFloat(elevatorAmountInput.value);
        let elevatorUnit = parseFloat(elevatorUnitPriceInput.value);
        let servicesFees = 0.10;
        

        document.getElementById('installation-cost').value = (elevatorUnit * servicesFees) * amountElevator;

    }

    function costForInstallationPremium () {

        let amountElevator = parseFloat(elevatorAmountInput.value);
        let elevatorUnit = parseFloat(elevatorUnitPriceInput.value);
        let servicesFees = 0.13;
        

        document.getElementById('installation-cost').value = (elevatorUnit * servicesFees) * amountElevator;

    }

    function costForInstallationExcelium () {

        let amountElevator = parseFloat(elevatorAmountInput.value);
        let elevatorUnit = parseFloat(elevatorUnitPriceInput.value);
        let servicesFees = 0.16;
        

        document.getElementById('installation-cost').value = (elevatorUnit * servicesFees) * amountElevator;

    }

    function costFinal () {

        let costTotal = parseFloat(elevatorTotalPriceInput.value);
        let costInstallation = parseFloat(installationFeesInput.value);

        document.getElementById('cost-final').value = costInstallation + costTotal;
    
    }

    $(document).on("click", "input[name='selection-btn']", function(){
        thisRadio = $(this);
        if (thisRadio.hasClass("imChecked")) {
            thisRadio.removeClass("imChecked");
            thisRadio.prop('checked', false);
        } else { 
            thisRadio.prop('checked', true);
            thisRadio.addClass("imChecked");
        };
    })
    
    // Result
    numApts.addEventListener('input', (e) => {
        if (selectList.value == 'residential'){
            calculateNumOfElevatorResidential();
        }
        if (selectList.value == 'corporate' || selectList.value == 'hybrid'){
        calculateNumOfElevatorCorporate();
        }
    })
    numFloors.addEventListener('input', (e) => {
        if (selectList.value == 'residential'){
            calculateNumOfElevatorResidential();
        }
        if (selectList.value == 'corporate' || selectList.value == 'hybrid'){
            calculateNumOfElevatorCorporate();
        }
    })
    numBasements.addEventListener('input', (e) => {
        if (selectList.value == 'residential'){
            calculateNumOfElevatorResidential();
        }
        if (selectList.value == 'corporate' || selectList.value == 'hybrid'){
            calculateNumOfElevatorCorporate();
        }
    })
    numOccupantsFloor.addEventListener('input', (e) => {
        if (selectList.value == 'residential'){
        }
        if (selectList.value == 'corporate' || selectList.value == 'hybrid'){
            calculateNumOfElevatorCorporate()
        }
    })
    numElevators.addEventListener('input', (e) => {
        elevatorAmountInput.value = numElevators.value;
    })

    standardBtn.addEventListener('change', (e) => {

    if (standardBtn.checked == true){

        elevatorUnitPriceInput.value = 7565.00
        totalPriceElevator();
        costForInstallationStandard();
        costFinal();
    }           

    })
    premiumBtn.addEventListener('change', (e) => {

    if (premiumBtn.checked == true){

        elevatorUnitPriceInput.value = 12345.00
        totalPriceElevator();
        costForInstallationPremium();
        costFinal();
    }           

    })
    exceliumBtn.addEventListener('change', (e) => {

    if (exceliumBtn.checked == true){

        elevatorUnitPriceInput.value = 15400.00
        totalPriceElevator();
        costForInstallationExcelium();
        costFinal();
    }           

    })