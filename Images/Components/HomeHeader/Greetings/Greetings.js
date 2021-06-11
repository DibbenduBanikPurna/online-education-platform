import React from 'react';

const Greetings = () => {

    var time=new Date();
    var hours=time.getHours();
    console.log(hours);
    var Greet="";
    if(hours>1 && hours<12){
        Greet="Good Morning"
    }
    else if(hours>12 && hours<15){
        Greet="Good Noon"
    }
    else if(hours>15 && hours<17){
        Greet="Good Afternoon"
    }
    else if(hours>17 && hours<19)
    {
        Greet="Good Evening"
    }
    else {
        Greet="Good Night"
    }
   
    return (
        <div className="home">
            <h3 className="text-primary text-center"> {Greet}   </h3>
           
        </div>
    );
};

export default Greetings;