import './App.css';
import Header from "./Header.js"; 
import Home from "./Home.js"; 
import Footer from "./Footer"; 
import SearchPage from "./SearchPage.js"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';




function App() {
  return (
    // BEM
    <div className="App">

     <Router>   

      <Header />

         <Switch> 
          
           <Route path="/search">
           <SearchPage />
           </Route>
           
           <Route path="/">
           <Home /> 
           </Route>

         </Switch>
         
      <Footer />   

     </Router>

    </div>
  );
}

export default App;
