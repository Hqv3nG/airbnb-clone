import { FavoriteBorder, Star } from '@material-ui/icons'
import React from 'react'
import "./SearchComponent.css"

function SearchComponent({
    src, location, title, description, stars, price, total
})
 {
    return (
        <div className="result">
          <img src={src} alt=""/>
          <FavoriteBorder className="result__heart" /> 
          <div className="resultInfo">
              <div className="resultInfo__top">
                  <p>{location}</p>
                  <h3>{title}</h3>
                  <p>___</p>
                  <p>{description}</p>
              </div>
             
              <div className="resultInfo__bot">
                <div className="result__stars">
                  <Star className="result__star" />
                  <p><strong>{stars}</strong></p>
                  </div>
            </div> 
                 <div className="result__price">
                  <h2>{price}</h2>
                  <p>{total}</p>
            </div>  
          </div>
        </div>
    )
}

export default SearchComponent
