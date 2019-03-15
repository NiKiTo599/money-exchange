// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    currency = parseInt(currency);
    let exchange = {"H":0,"Q":0,"D":0,"N":0,"P":0};
    if(currency > 10000){
      return {error: "You are rich, my friend! We don't have so much coins for exchange"};
  }
    if(currency >= 50){
      exchange.H += Math.floor(currency / 50);
      currency = currency - (exchange.H * 50);
    }
    if(currency >= 25){
      exchange.Q += Math.floor(currency / 25);
      currency = currency - (exchange.Q * 25);
    }
    if(currency >= 10){
      exchange.D += Math.floor(currency / 10);
      currency = currency - (exchange.D * 10);
    }
    if(currency >= 5){
      exchange.N += Math.floor(currency / 5);
      currency = currency - (exchange.N * 5);
    }
    if(currency >= 1){
      exchange.P += Math.floor(currency / 1);
      currency = currency - (exchange.P * 1);
    }
    for(var key in exchange){
      if(exchange[key] == 0){
        delete exchange[key];
      }
    }
    return exchange;
}
