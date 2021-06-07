import { Button } from '@material-ui/core'; 
import React from 'react';
import "./SearchPage.css";
import SearchComponent from "./SearchComponent.js"

function SearchPage() {
    return (
        <div className="searchpage">
          <div className="searchpage__info">
            <p> 62 stays - 26 august to 30 august - 2 guests</p>
            <h1>Stays nearby</h1> 
            <Button variant="outlined">CANCELATION FLEXIBILITY</Button>
            <Button variant="outlined">TYPE OF PLACE</Button> 
            <Button variant="outlined">ROOMS AND BED</Button>
            <Button variant="outlined">PRICE</Button>  
            <Button variant="outlined">MORE FILTERS</Button>  
          </div>
         <SearchComponent src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzw0SXSNJPQ4jlXrBbVqNgZU9RsM_BgoFzKQ&usqp=CAU" 
         location="Palma de Mallorca city center" title="Private room in flat hosted by Marta" 
         description="Wifi - Lift - Washing machine - Air conditioning - Patio or balcony - Luggage drop-off allowed" 
         stars={4.7} price="40€/night" total="€90 total" />
         <SearchComponent src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcyyq7axBXSeQB1EQTsr9VcV0cUaYo1B8YFw&usqp=CAU" 
         location="Palma de Mallorca city center" title="Luxury bedroom downtown" 
         description="Wifi - Lift - Washing machine - Air conditioning - Patio or balcony - Luggage drop-off allowed" 
         stars={4.8} price="70€/night" total="€150 total" />
         <SearchComponent src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeAwNqYk_kkiAlgfBYapUnA0TFAVsMENztRA&usqp=CAU" 
         location="Palma de Mallorca city center" title="Freshly designed bedroom in the center" 
         description="Wifi - Lift - Washing machine - Air conditioning - Patio or balcony - Luggage drop-off allowed" 
         stars={4.8} price="80€/night" total="€170 total" />  
         <SearchComponent src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVwGyt0Fe1ZJt9lK3KXQcCERM1q6bhK9KYxQ&usqp=CAU" 
         location="Palma de Mallorca city center" title="Cozy double bedroom La Villa Joyosa" 
         description="Wifi - Lift - Washing machine - Air conditioning - Patio or balcony - Luggage drop-off allowed" 
         stars={4.8} price="110€/night" total="€230 total" />  
         <SearchComponent src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4lJvGR_9KYLqQhsDMOu81lVZpbhSxJ-_jhw&usqp=CAU" 
         location="Palma de Mallorca city center" title="High standing flat with all comodities" 
         description="Wifi - Lift - Washing machine - Air conditioning - Patio or balcony - Luggage drop-off allowed" 
         stars={4.8} price="125€/night" total="€385 total" />  
         <SearchComponent src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfIBhl8NHsh6b-Op2Jx8TTMhPOuukyEFim3A&usqp=CAU" 
         location="Palma de Mallorca city center" title="Luxury appartments in the higher building of Mallorca" 
         description="Wifi - Lift - Washing machine - Air conditioning - Patio or balcony - Luggage drop-off allowed" 
         stars={4.8} price="145€/night" total="€455 total" />     
        </div>
    )
}

export default SearchPage; 
