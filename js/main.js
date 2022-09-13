//BEACH DESTINATION
const place1= "Phi Phi islands"
const place2= "Dominican Republic"
const place3= "Maldives islands"

const pricePlace1= 434284;
const pricePlace2= 196318;
const pricePlace3= 802716;

//SNOW DESTINATION
const place4= "California"
const place5= "Denver"
const place6= "Utah"

const pricePlace4= 196722;
const pricePlace5= 325242;
const pricePlace6= 802716;

//URBAN DESTINATION
const place7= "New york"
const place8= "Dubai"
const place9= "London"

const pricePlace7= 227000;
const pricePlace8= 348751;
const pricePlace9= 238221;

//PRINCIPAL FUNCTION
function buyFlight(day,destination,hour){

let dayOfFlight = day;
let DestinationFlight = destination;
let flightHour=hour;
let price = 0;
let initialPeople=1;
let peopleAmount= Number(prompt("How many people will travel with you?, please type the amount"));
peopleAmount=peopleAmount+initialPeople;

//OBJECT 

class person {
    constructor(name,surname,idNumber,email){
      this.name = name;
      this.surname=surname;
      this.idNumber=idNumber;
      this.email=email;
    }
 }
 let i=0;

 //ARRAY
 let peoplePack=[];
 
 while(i!=peopleAmount){
 peoplePack.push(new person (prompt("Please insert full name"),prompt("Please type the surname"),prompt("Id number"),prompt("Email")));
 i++;
 }

 console.log (peoplePack);
      

switch(destination){

    case "Phi Phi islands":
        alert("conformed with the place selected and with the people amount, the price will be: $"+ pricePlace1*peopleAmount);
         price = pricePlace1*peopleAmount;
         break;
    case "Dominican Republic":
        alert("conformed with the place selected and with the people amount, the price will be: $"+pricePlace2*peopleAmount);
         price = pricePlace2*peopleAmount;
         break;
    case "Maldives islands":
        alert("conformed with the place selected and with the people amount, the price will be: $"+pricePlace3*peopleAmount);
         price = pricePlace3*peopleAmount;
         break;
    case "California":
        alert("conformed with the place selected and with the people amount, the price will be: $"+pricePlace4*peopleAmount);
         price = pricePlace4*peopleAmount;
         break;
    case "Denver":
        alert("conformed with the place selected and with the people amount, the price will be: $"+pricePlace5*peopleAmount);
         price = pricePlace5*peopleAmount;
         break;
    case "Utah":
        alert("conformed with the place selected and with the people amount, the price will be: $"+pricePlace6*peopleAmount);
         price = pricePlace6*peopleAmount;
         break;
    case "New york":
        alert("conformed with the place selected and with the people amount, the price will be: $"+pricePlace7*peopleAmount);
         price = pricePlace7*peopleAmount;
         break;
    case "Dubai":
        alert("conformed with the place selected and with the people amount, the price will be: $"+pricePlace8*peopleAmount);
         price = pricePlace8*peopleAmount;
         break;
    case "London":
        alert("conformed with the place selected and with the people amount, the price will be: $"+pricePlace9*peopleAmount);
         price = pricePlace9*peopleAmount;
         break;
}

if(peopleAmount==1){
alert("You have your flight ticket for: " + DestinationFlight+ "\n"+ "Travels day: "+dayOfFlight+"\n"+"Time: "+flightHour+ "\n" + "Person/s info: " + peoplePack[0].name +" "+ peoplePack[0].surname +"\n"+ "Email/s: "+peoplePack[0].email+",you will receive all the info on these emails"+ "\n"+ "Charges: $" + price);
}
     else if (peopleAmount==2){
    alert("You have your flight ticket for: " + DestinationFlight+ "\n"+ "Travels day: "+dayOfFlight+"\n"+"Time: "+flightHour+ "\n" + "Person/s info: " + peoplePack[0].name +" "+ peoplePack[0].surname +", " +peoplePack[1].name +" "+ peoplePack[1].surname +"\n"+ "Email/s: "+peoplePack[0].email+", "+peoplePack[1].email+",you will receive all the info on these emails"+ "\n"+ "Charges: $" + price);
    }
        else if (peopleAmount==3){
        alert("You have your flight ticket for: " + DestinationFlight+ "\n"+ "Travels day: "+dayOfFlight+"\n"+"Time: "+flightHour+ "\n" + "Person/s info: " + peoplePack[0].name +" "+ peoplePack[0].surname +", " +peoplePack[1].name +" "+ peoplePack[1].surname+", " +peoplePack[2].name +" "+ peoplePack[2].surname +"\n"+ "Email/s: "+peoplePack[0].email+", "+peoplePack[1].email+", "+peoplePack[2].email+",you will receive all the info on these emails"+ "\n"+ "Charges: $" + price);
        }
}


buyFlight(travelDayOpcion(),intoDestination(),hour());



















function travelDayOpcion(){
    const option1= "Monday";
    const option2= "Tuesday";
    const option3= "Wednesday";
    const option4= "Thursday";
    const option5= "Friday";
    const option6= "Saturday";
    const option7= "Sunday";



   let option = Number(prompt("Interactive simulator, flight agency, (ATTENTION: the maximum of passengers that you can upload besides you= 2)"+"\n"+"Please enter the day that you would like to travel : \n1."+ option1+"\n2. " + option2 + "\n3. " + option3 + "\n4. " + option4 + "\n5. " + option5 + "\n6. " + option6 +"\n7."+option7));

   switch(option){

        case 1:
            alert("Day selected: "+option1);
            return option = option1;
        case 2:
            alert("Day selected: "+option2);
            return option = option2;
        case 3:
            alert("Day selected: "+option3);
            return option = option3;
        case 4:
            alert("Day selected: "+option4);
            return option = option4;
        case 5:
            alert("Day selected: "+option5);
            return option = option5;
        case 6:
            alert("Day selected: "+option6);
            return option = option6;
        case 7:
            alert("Day selected: "+option7);
            return option = option7;


   }
}



function travelDestination(){

   const destination1= "Beach";
   const destination2= "Snow";
   const destination3= "Urban";

     let destination = Number(prompt("Enter the destination number that you would like to visit: \n1."+ destination1 + "\n2." + destination2 + "\n3."+destination3));

   switch(destination){

       case 1: 
          alert("Nice select,your choice was: " + destination1);
          return destination = destination1;
       case 2: 
          alert("Nice select,your choice was: " + destination2);
          return destination = destination2;
       case 3: 
          alert("Nice select,your choice was: " + destination3);
          return destination = destination3;

   }
}


function intoDestination (){
  let answer = travelDestination();
  

  if (answer=="Beach"){

    let questionBeach = Number(prompt("Following this process, please select the number of the place that you want to travel: \n1." + place1 + "\n2."+place2+"\n3."+place3));
                if(questionBeach==1){
                    alert("The place selected was: "+ place1 )
                    return questionBeach = place1;
                    
                }
                if(questionBeach==2){
                    alert("The place selected was: "+ place2 );
                    return questionBeach = place2;
                    
                }
                if(questionBeach==3){
                    alert("The place selected was: "+ place3 );
                    return questionBeach = place3;
                    
                }
         }

       else if(answer=="Snow"){
         let questionSnow = Number(prompt("Following this process, please select the number of the place that you want to travel:\n1." + place4 + "\n2."+place5+"\n3."+place6));
                
                if(questionSnow==1){
                    alert("The place selected was: "+ place4 );
                    return questionBeach = place4;
                    
                    
                    
                }
                if(questionSnow==2){
                    alert("The place selected was: "+ place5 );
                    return questionBeach = place5;
                    
                }
                if(questionSnow==3){
                    alert("The place selected was: "+ place6 );
                    return questionBeach = place6;
                    
                }
       
        }

              else if(answer=="Urban"){
                let questionUrban = Number(prompt("Following this process, please select the number of the place that you want to travel:\n1." + place7 + "\n2."+place8+"\n3."+place9));
                
                
                    if(questionUrban==1){
                        alert("The place selected was: "+ place7 );
                        return questionBeach = place7;
                        
                    }
                    if(questionUrban==2){
                        alert("The place selected was: "+ place8 );
                        return questionBeach = place8;
                        
                    }
                    if(questionUrban==3){
                        alert("The place selected was: "+ place9 );
                        return questionBeach = place9;
                        
                    }
            
        }
}

function hour(){   //function to find flight hour
let selection = prompt("Do you want your flight in the morning or afternoon?, please select your choice: \n Morning: type AM"+"\n Afernoon: type PM" ).toUpperCase();

switch(selection){
    case "AM": selection = "AM";
    
   
    case "PM": selection = "PM";
    
}

let time=-1;//variable time with initial value -1  

while(time<=0 || time>=12){
time= Number(prompt("Type at what time do you want your flight,(only the number in the 12hs format)"));
}
let fullTime = time + selection;
return fullTime;
}

























