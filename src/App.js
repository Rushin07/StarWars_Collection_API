// import logo from './logo.svg';
import './App.css';
import React, {useState,useEffect} from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import People from './Components/People';
import Planets from './Components/Planets';
import Starships from './Components/Starships';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import {Container, Dimmer, Loader} from 'semantic-ui-react';


function App() {
  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [starships, setStarships] = useState([]);
  const [loading, setLoading] = useState(true);

 
useEffect( () =>{
async function fetchPeople(){
  let res = await fetch("https://swapi.dev/api/people/?format=json");
  let data = await res.json();
  setPeople(data.results);
  setLoading(false);
}
async function fetchPlanets(){
  let res = await fetch("https://swapi.dev/api/planets/?format=json");
  let data = await res.json();
  setPlanets(data.results)
  setLoading(false);
}
async function fetchStarships(){
  let res = await fetch("https://swapi.dev/api/starships/?format=json");
  let data = await res.json();
  setStarships(data.results)
  setLoading(false);
}

fetchPeople();
fetchPlanets();
fetchStarships();

setLoading(false);
}, [])

  return (
    <>
      <Router>
      <Navbar/>
      <Container>
        {loading ? (
          <Dimmer active inverted>
            <Loader inverted>Loading</Loader>
            </Dimmer>
        ) : (
          <Switch>
          <Route exact path='/'>
          <Home /> 
          </Route >
          <Route exact path='/people'>
          <People data={people}/>
          </Route>

          <Route exact path='/planets'>
            <Planets data={planets} />
          </Route>

          <Route exact path='/starships'>
            <Starships data={starships} />
          </Route>

        </Switch>
        )}
      </Container>
      </Router>
    </>
  );
}

export default App;
