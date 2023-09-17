import React from 'react';
import Card from './Card';

const CardList = ({robots}) => 
{
    if(false){
        //used to only check the error boundary
        
        throw new Error('NOOOOOOOOO');
    }
    // we are giving a unique key 
    return(
    <div>
   {robots.map((user,i)=>{
        return (<Card 
        key={i} 
        id={robots[i].id} 
        name={robots[i].name} 
        email={robots[i].email} />)
    })}
    </div>
    );
} 

export default CardList;