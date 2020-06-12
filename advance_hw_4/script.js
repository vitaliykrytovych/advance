function CoffeeMake() { };

CoffeeMake.prototype.on = function () {
    console.log('CoffeeMake said:   coffee making has started');
};

CoffeeMake.prototype.off = function () {
    console.log('CoffeeMake said:   coffee making is complete');
};



//-----------------------------------------------------------------------------------
function DripCoffeeMaker() {
    this.fillWithWater = function () {
        console.log('DripCoffeeMaker said:   The water tank is empty. Please fill with water.');
    };
    this.fullReservoir = function () {
        console.log('DripCoffeeMaker said:   The reservoir with the finished drink is overflowing');
    };
};
DripCoffeeMaker.prototype = CoffeeMake.prototype;

const dripCoffee = new DripCoffeeMaker();
dripCoffee.fullReservoir();
dripCoffee.fillWithWater();
dripCoffee.on();
dripCoffee.off();



//-----------------------------------------------------------------------------------
function СarobCoffeeMaker() {
    this.pressureError = function () {
        console.log('СarobCoffeeMaker said:   Insufficient pressure in the system. Please contact customer service.');
    };
    this.cappuccinoMakerError = function () {
        console.log('СarobCoffeeMaker said:   The cappuccino maker is faulty. Please contact customer service.');
    };
};
СarobCoffeeMaker.prototype = CoffeeMake.prototype;

const carobCoffee = new СarobCoffeeMaker();
carobCoffee.pressureError();
carobCoffee.cappuccinoMakerError();
carobCoffee.on();
carobCoffee.off();



//-----------------------------------------------------------------------------------
function CoffeeMachine() {
    this.grainsOff = function () {
        console.log('CoffeeMachine said:   Warning! Coffee beans run out - please pour them into the tank.');
    };
    this.milkOff = function () {
        console.log('CoffeeMachine said:   Warning! Low milk level - please add milk to the tank.');
    };
    this.wasteFull = function () {
        console.log('CoffeeMachine said:   The container with exits is filled! Please clean the waste container immediately.');
    };
};
CoffeeMachine.prototype = CoffeeMake.prototype;

const machineCoffee = new CoffeeMachine();
machineCoffee.grainsOff();
machineCoffee.milkOff();
machineCoffee.wasteFull();
machineCoffee.on();
machineCoffee.off();