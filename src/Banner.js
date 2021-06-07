import { Button } from '@material-ui/core';
import React, {useState} from 'react'; 
import { useHistory } from 'react-router';
import "./Banner.css";
import Search from "./Search.js"

 

function Banner() {

    const [showSearch, setshowSearch] = useState(false);
    const History = useHistory(); 
    return (
    <div className="banner">
        <div className="banner__search">
          {showSearch && <Search />}
          <Button onClick={() => {
              setshowSearch(!showSearch)
          }} 
          variant="outlined">{showSearch ? "Hide": "Search dates"}</Button>   
        </div>
        <div className="banner__info">
          <h1>Get out and strech your imagination</h1>
          <h5>Plan a different kind of getaway to discover hidden gems near you</h5>
          <Button onClick={()=> History.push("/search")} variant="outlined">Explore Nearby</Button>

        </div>
           
    </div>
    )
}

export default Banner; 
