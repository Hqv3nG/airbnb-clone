import React from 'react'; 
import "./Home.css"; 
import Banner from "./Banner.js"; 
import Card from "./Card.js"

function Home() {
    return (
        <div className="home">
          
          <Banner /> 

          <div className="home__section"> 
          <Card src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOr7UcPH0tcmKk4_bqyQy3Mfg3UbSNobdIhw&usqp=CAU" 
          description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour." price="" title="Unique experience" />
          <Card src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIDI2Kp6Zi1PxO4ip4BWMY6RmI7dOPCKzk8A&usqp=CAU" 
          description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour." price="" title="Sun and Sea" /> 
          <Card src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqCYSwKsl7q6g8oq25B4kfdOEl4qBFFOhoWw&usqp=CAU" 
          description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour." price="" title="Get lost in the magic"/> 
          </div> 

          <div className="home__section"> 
          <Card src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvtLeBeAJ9hyGWk410eDBpYgqI9eb10hZosw&usqp=CAU" 
          description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour." price="350€/night" title="Authentic trip" />
          <Card src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8AeGEtks3ireYl4CCEHDuV0Op0Gps_pr8xQ&usqp=CAU" 
          description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour." price="280€/night" title="Deep senses" /> 
          <Card src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb0OKSEojvBM0vBGBFw863SSbETRpPqiOqGg&usqp=CAU" 
          description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour." price="120€/night" title="Exotic passion"/> 
          </div> 

        </div>
    )
}

export default Home; 





