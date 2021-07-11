import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/layout/NavBar"
import PokemonsList from "./components/pokemon/PokemonsList"
import styled from "styled-components";
import PokemonDetails from "./components/pokemon/PokemonDetails";
import PokemonTypes from "./components/types/PokemonTypes";


function App() {

  return (
    
    <Router>

      <div>
        <NavBar />
        <Main>
          <Route exact path="/pokemons" component={PokemonsList} />
          <Route exact path="/types" component={PokemonTypes}/>
          <Route exact path="/pokemon/:id"  component={PokemonDetails}/>
          </Main>
      </div>
  </Router>
     
    
  )
}


const Main = styled.div`
  background-color: ${(props) => props.theme.mainColor};
  width: 80%;
  position: relative;
  transform: translate(-50%);
  left: 50%;
  border: 1px black solid;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
`;
export default App