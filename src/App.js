import "./App.css";
import React, { useEffect, useState } from "react";
import PokemonList from "./PokemonList";
import axios from "axios";
import Pagination from "./Pagination";

function App() {
  const [pokemon, setPokemon] = useState([]);
  // const[img,setImg]=useState([]);
  const[currentPageUrl,setCurrentPageUrl]=useState("https://pokeapi.co/api/v2/pokemon")
const [nextPageUrl,setNextPageUrl]=useState();
const [prevPageUrl,setPrevPageUrl]=useState();
const[loading,setLoading]=useState(true);

  useEffect(() => {
    setLoading(true);
    let cancel;
        axios.get(currentPageUrl,{ cancelToken:new axios.CancelToken(c=>cancel=c)}).then((res) => {
      setLoading(false);
      setNextPageUrl(res.data.next);
      setPrevPageUrl(res.data.previous);
      setPokemon(res.data.results.map((p) => p.name));
      // setImg(res.data.results.sprites['front_default']);
    });
    console.log("rendered");
    return ()=>cancel();
    
  }, [currentPageUrl]);

  if(loading)
    return <div className="loading">Loading...</div> 
  
function gotoNextPage(){
  setCurrentPageUrl(nextPageUrl);
}
function gotoPrevPage(){
  setCurrentPageUrl(prevPageUrl);
}

  return (
    <div>
    <div className="header">Poke Verse</div>
    <p className="description">This website has every Pokemon from the original show. <br />API from <a href="https://pokeapi.co/">PokeAPi</a></p>
      <PokemonList pokemon={pokemon} />
      <Pagination 
      gotoNextPage={nextPageUrl ? gotoNextPage:null}
      gotoPrevPAge={prevPageUrl ? gotoPrevPage:null}/>
    </div>
  );
}

export default App;
