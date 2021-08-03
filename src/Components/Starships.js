// import React, {useState,useEffect}from 'react';
// import {Menu, Container} from 'semantic-ui-react';
import {Card, Grid} from 'semantic-ui-react';
// import React,  from 'react';
// import People from './People';


export default function Starships({data}){
    return(
        <>
        <h1>Starships</h1>
        <Grid columns ={3}>
         {data.map((starships, i) =>{
       
         return(
             <Grid.Column key={i}>
                 <Card>
                 <Card.Content>
                     <Card.Header>{starships.name}</Card.Header>
                     <Card.Description>
                       
                        <div>
                        <ul>
                        {/* {starships.url.map((item, i) => {
                            // var resident=[];
                            // for ( j in planets.residents){resident.push(planets.residents[j]);}

                            return <li key={i}>{item}</li>
                            })} */}
                        </ul>
                        </div>
                         <strong>URL</strong>
                         <p>{starships.url}</p>
                         {/* <strong>Population</strong>
                         <p> {planets.population}</p>
                         <strong>Mass</strong> */}
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