// code your solution here


function saturdayFun(defaultActivity="roller-skate"){

    
     return `This Saturday, I want to ${defaultActivity}!`

    //  console.log("`This Saturday, I want to ${defaultActivity}!`")
        
       
}

let mondayWork= function(defaultActivity="go to the office"){

    // defaultActivity="work from home."

    return`This Monday, I will ${defaultActivity}.`;

   
    
    

}


const wrapAdjective = function(activity="*") {
    return function(adjective="special") {
      return `You are ${activity}${adjective}${activity}!`
    }
  }


