import React from 'react';
// import {Menu, Container} from 'semantic-ui-react';
import {Card, Grid} from 'semantic-ui-react';

export default function People({data}){
    return(
           <>
           <h1>people</h1>
           <Grid columns ={4}>
            {data.map((people, i) =>{
            return(
                <Grid.Column key={i}>
                    <Card>
                    <Card.Content>
                        <Card.Header>{people.name}</Card.Header>
                        <Card.Description>
                            <strong>URL NAME</strong>
                            <p>{people.url}</p>
                            <strong>StarShip url</strong>
                            <ul>
                        {people.starships.map((item, i) => {
                            return <li key={i}>{item}</li>
                            })}</ul>
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