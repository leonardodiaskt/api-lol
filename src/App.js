import React, { useState } from 'react';
import './App.css';
import axios from 'axios';




function App() {

  const [searchText, setSearchText] = useState("");
  const [playerData, setPlayerData] = useState({});
  const APIKEY = "RGAPI-b82051be-bbe3-467d-942c-e1948fb34513";

  function searchPlayer(event){
    var APIString = "https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/"+ searchText + "?api_key=" + APIKEY;
    axios.get(APIString).then(function(response){
      setPlayerData(response.data);
    }).catch(function(error){
      console.log(error);
    });
  }

  console.log(playerData);

  return (
    <div className="App">
      <div className="bloco">
        <div className="container">
          <h3>League Of Senai</h3>
          <input type="text" onChange={e => setSearchText(e.target.value)} placeholder="Nome do Invocador"></input>
          <button onClick={e => searchPlayer(e)}>Pesquisar</button>
        </div>
        {JSON.stringify(playerData) != '{}' ? 
        <>
        <p>{playerData.name}</p> 
        <img width="100" height="100" src={"http://ddragon.leagueoflegends.com/cdn/12.5.1/img/profileicon/" + playerData.profileIconId + ".png"}></img>
        <p>Level do Invocador: {playerData.summonerLevel}</p>
        </>
        : 
        <><p>O invocador não tem dados</p></>}
      </div>
    </div>
  );
}

export default App;
