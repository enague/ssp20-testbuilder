// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
 // create convenience variable to store an split array of numbers
  var splitCardNumber= cardNumber.split('')
 // if second number is 8 or 9 and cardNumber.length= 14, return 'Diner's Club'
  if (splitCardNumber[1] =='8' ||splitCardNumber[1]=='9' && cardNumber.length== 14) {
    return 'Diner\'\s Club';
  }
 //if second number is 4 or 7 and cardNumber.length= 15, return 'American Express'
  if ((splitCardNumber[1] =='4' || splitCardNumber[1]=='7')&& cardNumber.length== 15) {
    return 'American Express';
  }


//Switch
  if (splitCardNumber[0]=='4' && splitCardNumber[1]== '9' && (cardNumber.length== 16 || cardNumber.length ==18 || cardNumber.length ==19)) {
    return 'Switch';
  }

  if (splitCardNumber[0]=='5' && splitCardNumber[1]=='6') {
    return 'Switch';
  }

  if (splitCardNumber[0]=='6' && splitCardNumber[1]=='3' && splitCardNumber[2]=='3') {
    return 'Switch'
  }

  if (splitCardNumber[0]=='6'  && splitCardNumber[1]=='7') {
    return 'Switch'
  }


//China UnionPay
  if (splitCardNumber[0]== '6' && splitCardNumber[1]== '2' && (cardNumber.length== 16 ||cardNumber.length==17 || cardNumber.length ==18 || cardNumber.length ==19)) {
    return 'China UnionPay';
  }


//Discover
  if (splitCardNumber[0]== '6' && splitCardNumber[1]== '4' && Number(splitCardNumber[2]) >= 4 && Number(splitCardNumber[2]) <= 9 && (cardNumber.length== 16 ||cardNumber.length==17 || cardNumber.length ==18 || cardNumber.length ==19)) {
    return 'Discover';
  }

  if (splitCardNumber[0] == '6' && (splitCardNumber[1] == '4' || splitCardNumber[1] =='5') && (cardNumber.length ==16 ||cardNumber.length ==19)) {
      return 'Discover';
    }

  if (splitCardNumber[0] == '6' && splitCardNumber[1] == '0' && splitCardNumber[2] =='1' && (cardNumber.length ==16 ||cardNumber.length ==19)) {
      return 'Discover';
    }



 //Visa

  if (splitCardNumber[0] =='4' && (cardNumber.length==13 || cardNumber.length==16 || cardNumber.length==19)) {
  	return 'Visa';
  }

  //Maestro

  if (splitCardNumber[0] == '5' && splitCardNumber[1] == '0' && cardNumber.length >= 12 && cardNumber.length <=19) {
    return 'Maestro';
  }
  if (splitCardNumber[0] == '6' && splitCardNumber[1] == '3' && cardNumber.length >=12 && cardNumber.length <= 19) {
    return 'Maestro'
  }

  //MasterCard
  
  if (splitCardNumber[0] =='5' && Number(splitCardNumber[1]) <= 5 && cardNumber.length==16) {
    return 'MasterCard';
}

}