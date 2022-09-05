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
const place9= "Londres"

const pricePlace7= 227000;
const pricePlace8= 348751;
const pricePlace9= 238221;


function buyFlight(day,destination,hour){

let dayOfFlight = day;
let DestinationFlight = destination;
let flightHour=hour;
let price = 0;


switch(destination){

    case "Phi Phi islands":
        alert("conformed with the place selected, the price will be: $"+ pricePlace1);
         price = pricePlace1;
         break;
    case "Dominican Republic":
        alert("conformed with the place selected, the price will be: $"+pricePlace2);
         price = pricePlace2;
         break;
    case "Maldives islands":
        alert("conformed with the place selected, the price will be: $"+pricePlace3);
         price = pricePlace3;
         break;
    case "California":
        alert("conformed with the place selected, the price will be: $"+pricePlace4);
         price = pricePlace4;
         break;
    case "Denver":
        alert("conformed with the place selected, the price will be: $"+pricePlace5);
         price = pricePlace5;
         break;
    case "Utah":
        alert("conformed with the place selected, the price will be: $"+pricePlace6);
         price = pricePlace6;
         break;
    case "New york":
        alert("conformed with the place selected, the price will be: $"+pricePlace7);
         price = pricePlace7;
         break;
    case "Dubai":
        alert("conformed with the place selected, the price will be: $"+pricePlace8);
         price = pricePlace8;
         break;
    case "Londres":
        alert("conformed with the place selected, the price will be: $"+pricePlace9);
         price = pricePlace9;
         break;
}

let name = prompt("Please insert your name and surname");
let idNumber = Number(prompt("Type your ID number"));
let email = prompt("Type your email please");
alert("You have your flight ticket for: " + DestinationFlight+ "\n"+ "Travels day: "+dayOfFlight+"\n"+"Time: "+flightHour+"hs"+ "\n" + "Name:"+name+ "\n"+"Id number: " +idNumber+ "\n" +"Charges: $"+price+"\n"+ "On the next minutes you will receive an email with all the info of your travel on the email that you provided: "+email)
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



   let option = Number(prompt("Please enter the day that you would like to travel : \n1."+ option1+"\n2. " + option2 + "\n3. " + option3 + "\n4. " + option4 + "\n5. " + option5 + "\n6. " + option6 +"\n7."+option7));

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

function hour(){

let time = prompt("Please type the time at you can travel,(example format: 22:00)");
return time;
}




























