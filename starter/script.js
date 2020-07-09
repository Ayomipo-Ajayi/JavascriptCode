 //define the variables
 var markMass =  66.9; //kg
 var markHeight = 1.76; //meters
 var markBMI;

 var johnMass = 70; //kg
 var johnHeight = 1.825; //meters
 var johnBMI;

  //calculate BMI
 markBMI = markMass / (markHeight * markHeight);

 johnBMI = johnMass / (johnHeight * johnHeight);

 if (johnBMI > markBMI) {
     console.log("John's BMI is higher than Mark's ");
 } else {
      console.log("Mark's BMI is higher than John's ");
 }

 var firstName = 'John';
 var age = 17;

 if (age < 13) {
     console.log(firstName + " is a boy")
 } else if (age >= 13 && age < 20) { //between 13 and 20
      console.log(firstName + " is a teenager");
 } else if (age >= 20 && age < 30) { //between 20 and 30
      console.log(firstName + " is a young man");
 } 
 else {
     console.log(firstName + " is a man");
 }

 //Ternary operator
 age >= 18 ? console.log(firstName + " can drink alcohol") : console.log(firstName + " can only drink fruit juice");

 //challenge 2
 var scoreJohn = (89 + 120 + 103) / 3;
 var scoreMike = (116 + 95 + 123) / 3;
 var scoreMary = (97 + 138 + 109) / 3;
 console.log(scoreJohn, scoreMike, scoreMary);

 //check who wins on average score
 if (scoreJohn > scoreMike && scoreJohn > scoreMary){
     console.log("John's team won with " + scoreJohn + " points");
 } else if (scoreMike > scoreJohn && scoreMike > scoreMary){
  console.log("Mike's team won with " + scoreMike + " points");
 } else if (scoreMary > scoreJohn && scoreMary > scoreMike){
  console.log("Mary's team won with " + scoreMary + " points");
 } 
 else {
  console.log("It ended with draw");
 }

 // functions
 function calculateAge(birthyear){
     return 2020 - birthyear;
 }

 // call the function 
 var age = calculateAge(1994);
 console.log(age);

 function calculateRetirement(year, firstname){
     var currentAge = calculateAge(year);
     var retireYear  = 65 - currentAge;
     if (retireYear > 0) {
          console.log(firstname + " has " + retireYear + " more years to retire");
     } else {
          console.log(firstname + " has been retired for " + Math.abs(retireYear) + " years now");
     }
 }

 // call the function
 calculateRetirement(1949, "Segun");
 calculateRetirement(1990, "Jimi");
 calculateRetirement(2000, "Adigun");

 //coding challenge
 function tipCalculator(bill) {
     var tipArray = [];
     var paidAmountArray = [];
    if (bill < 50) {
        var tip1 = bill * (20/100);
        tipArray.push(tip1);
        var amountPaid1 = tip1 + bill;
        paidAmountArray.push(amountPaid1);
    } else if (bill >= 50 && bill <= 200) {
        var tip2 = bill * (15/100);
        tipArray.push(tip2);
        var amountPaid2 = tip2 + bill;
        paidAmountArray.push(amountPaid2);
    } else {
        var tip3 = bill * (10/100);
        tipArray.push(tip3);
        var amountPaid3 = tip3 + bill;
        paidAmountArray.push(amountPaid3);
    } 
    console.log(tipArray);
    console.log(paidAmountArray);
 }

 // call the function 
 tipCalculator(124);
 tipCalculator(48);
 tipCalculator(268);

 // another method
 function tipCalculate(bill) {
     var percentage;
     if (bill < 50) {
        percentage = 0.2;
     } else if (bill >= 50 && bill <= 200) {
        percentage = 0.15;
     } else {
         percentage = 0.1;
     }
     return percentage * bill;
 }

 var bills = [124, 48, 268];
var tips = [tipCalculate(bills[0]),
            tipCalculate(bills[1]),
            tipCalculate(bills[2])];

var finalValue = [bills[0] + tips[0],
                bills[1] + tips[1],
                bills[2] + tips[2],]
console.log(bills, tips, finalValue);

//object
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthyear: 1990,
    family: ['Jane', 'Mark', 'Bob'],
    job: 'teacher',
    isMarried: false,
    calcAge: function() {
        return this.age = 2020 - this.birthyear;
    }
};

console.log(john.calcAge());

//calculate BMI with object
var mark = {
    fullName: 'Mark Alalibo',
    mass: 66.9,
    height: 1.76,
    calcBMI: function() {
        return this.markBMI = this.mass / (this.height * this.height);
    }
}

var john = {
    fullName: 'John Abruzi',
    mass: 70,
    height: 1.825,
    calcBMI: function() {
        return this.johnBMI = this.mass / (this.height * this.height);
    }
}

console.log(mark, john);

// who has the highest BMI
if (mark.calcBMI() > john.calcBMI()){
    console.log(mark.fullName + " has the highest BMI of " + mark.calcBMI());
} else if (john.calcBMI() > mark.calcBMI()) {
    console.log(john.fullName + " has the highest BMI of " + john.calcBMI());
} else {
    console.log("They both have the same BMI ");
}

// for descending order challenge
var johnObj = ['John', 'Smith', 1990, 'designer', false, 'blue'];
for (var i = johnObj.length - 1; i >= 0; i--){
    console.log(johnObj[i]);
}

//coding challenge
jObj = {
    fullName: 'John Smith',
    theBills : [124, 48, 268, 180, 42],
    tipCalculator: function() {
                this.tips = [];
                this.finalBills = [];
                for (var i = 0; i < this.theBills.length; i++) {
                    //determine percentage based on tipping rules
                    var percentage;
                    var bill = this.theBills[i];

                    if (bill < 50) {
                        percentage = 0.2;
                     } else if (bill >= 50 && bill <= 200) {
                        percentage = 0.15;
                     } else {
                         percentage = 0.1;
                     }
                    //Add results to d corresponding arrays
                    this.tips[i] = bill * percentage;
                    this.finalBills[i] = bill + bill * percentage;
                }

            }
}
jObj.tipCalculator();
console.log(jObj);

mObj = {
    fullName: 'Mark Miller',
    theBills : [77, 375, 110, 45],
    tipCalculator: function() {
                this.tips = [];
                this.finalBills = [];
                for (var i = 0; i < this.theBills.length; i++) {
                    //determine percentage based on tipping rules
                    var percentage;
                    var bill = this.theBills[i];

                    if (bill < 100) {
                        percentage = 0.2;
                     } else if (bill >= 100 && bill < 300) {
                        percentage = 0.1;
                     } else {
                         percentage = 0.25;
                     }
                    //Add results to d corresponding arrays
                    this.tips[i] = bill * percentage;
                    this.finalBills[i] = bill + bill * percentage;
                }

            }
           
}


mObj.tipCalculator();
console.log(mObj);

 function calculateAverage(tips) {
    var total = 0;
    for(var i = 0; i < tips.length; i++){
        
        total = total + tips[i];
    }
    
   return  total / tips.length;
} 
jObj.average = calculateAverage(jObj.tips);
mObj.average = calculateAverage(mObj.tips);
console.log(jObj, mObj);

if (jObj.average > mObj.average) {
    console.log(jObj.fullName + "'s family pays higher tips, with an average of $" + jObj.average);
} else if (mObj.average > jObj.average) {
    console.log(jObj.fullName + "'s family pays higher tips, with an average of $" + jObj.average);
} else {
    console.log("The two families pay equal tips");
}