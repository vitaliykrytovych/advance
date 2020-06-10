let cash = 1000; //початкова каса
const assortment = { //початковий асортимент
    beer: {
        num: 100,
        price: 25
    },
    wine: {
        num: 50,
        price: 130
    },
    pepsi: {
        num: 80,
        price: 15
    }
};

function calculation (obj){
    if (obj.beer){
        assortment.beer.num -= obj.beer.num;
        cash += obj.beer.num * assortment.beer.price;
    };
    if (obj.wine){
        assortment.wine.num -= obj.wine.num;
        cash += obj.wine.num * assortment.wine.price;
    };
    if (obj.pepsi){
        assortment.pepsi.num -= obj.pepsi.num;
        cash += obj.pepsi.num * assortment.pepsi.price;
    }; 
};

export {cash, assortment, calculation};