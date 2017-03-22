words = ["Ho", "Chi", "Minh", "City", "was", "once", "known", "as", "Prey", "Nokor"];

=> logs ["HO", "CHI", "MINH", "CITY", "WAS", "ONCE", "KNOWN", "AS", "PREY", "NOKOR"]

var a = ['a', 'b', 'c'];

words.forEach(function(element) {
    console.log(element);
});

var flag = 0;
myOrder.forEach(function(order) {
  order.forEach(function(item){
    if(flag === 1){
      console.log(item);
    });
  });
