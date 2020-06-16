class CoffeeMake{
    on (){
        console.log('CoffeeMake said:   coffee making has started');
    }
    off (){
        console.log('CoffeeMake said:   coffee making is complete');
    }
};



//-----------------------------------------------------------------------------------
class DripCoffeeMaker extends CoffeeMake{
    fillWithWater = function () {
        console.log('DripCoffeeMaker said:   The water tank is empty. Please fill with water.');
    }
    fullReservoir = function () {
        console.log('DripCoffeeMaker said:   The reservoir with the finished drink is overflowing');
    }
};
const dripCoffee = new DripCoffeeMaker();
dripCoffee.fullReservoir();
dripCoffee.fillWithWater();
dripCoffee.on();
dripCoffee.off();



//-----------------------------------------------------------------------------------
class СarobCoffeeMaker extends CoffeeMake{
    pressureError = function () {
        console.log('СarobCoffeeMaker said:   Insufficient pressure in the system. Please contact customer service.');
    }
    cappuccinoMakerError = function () {
        console.log('СarobCoffeeMaker said:   The cappuccino maker is faulty. Please contact customer service.');
    }
};
const carobCoffee = new СarobCoffeeMaker();
carobCoffee.pressureError();
carobCoffee.cappuccinoMakerError();
carobCoffee.on();
carobCoffee.off();



//-----------------------------------------------------------------------------------
class CoffeeMachine extends CoffeeMake{
    grainsOff = function () {
        console.log('CoffeeMachine said:   Warning! Coffee beans run out - please pour them into the tank.');
    }
    milkOff = function () {
        console.log('CoffeeMachine said:   Warning! Low milk level - please add milk to the tank.');
    }
    wasteFull = function () {
        console.log('CoffeeMachine said:   The container with exits is filled! Please clean the waste container immediately.');
    }
};
const machineCoffee = new CoffeeMachine();
machineCoffee.grainsOff();
machineCoffee.milkOff();
machineCoffee.wasteFull();
machineCoffee.on();
machineCoffee.off();