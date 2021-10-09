import React from 'react'


const greeting = ({name}) => {
    const date = new Date()
    const hour = date.getHours()

    if(hour < 12){return `Guten Morgen ${name}`}
    else if(hour < 18){return `Guten Tag ${name}`} 
    else if (hour < 23) {return `Guten Abend ${name}`} 
    else {return `Hallo ${name}`}

};

const Greets = ({name}) => {
    return (
        <div class="greets">
          <h1>{greeting({name})}</h1>  
        </div>
    )
}

export default Greets
