// import React, {useState,useEffect}from 'react';
// import {Menu, Container} from 'semantic-ui-react';
import {Card, Grid} from 'semantic-ui-react';
// import React,  from 'react';
// import People from './People';


export default function Planets({data}){
    
    return(
        <>
        <h1>planets</h1>
        <Grid columns ={3}>
         {data.map((planets, i) =>{
        if(planets.residents != null) {
            var items=[];
            planets.residents.map((item, j) => {
                for ( i in planets.residents){items.push(planets.residents[i]);}
                // console.log(items)
                return <li key={i}>{item}</li>
                })
            }
        
         return(
             <Grid.Column key={i}>
                 <Card>
                 <Card.Content>
                     <Card.Header>{planets.name}</Card.Header>
                     <Card.Description>
                        <strong>Residents</strong>
                        <div>
                        <ul>
                        {planets.residents.map((item, i) => {
                            return <li key={i}>{item}</li>
                            })}
                        </ul>
                        </div>
                        <strong>Planet URL</strong>
                         <p>{planets.url}</p>
                         <strong>Diameter</strong>
                         <p>{planets.diameter}</p>
                         <strong>Population</strong>
                         <p> {planets.population}</p>
                         {/* <strong>Mass</strong> */}
                     </Card.Description>
                 </Card.Content>
                 </Card>
             </Grid.Column>
         )
                        
     })}
        </Grid>
        </>
    )
}