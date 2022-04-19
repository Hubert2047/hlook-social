
import { BrowserRouter as Router,Routes,
  Route
} from "react-router-dom";
import GlobalStyles from "./components/GlobalStyle/GlobalStyles";
import Header from "./components/Header/Header";
import Error from "./Pages/error/Error";
import Home from "./Pages/Home/Home";
import MarketPlace from "./Pages/MarketPlace/MarketPlace";
function App() {    
    return ( 
            <GlobalStyles>
                  <Router>
                        <Header/>
                        <Routes >
                              <Route path="/" element={<Home/>}/>
                              <Route path="/marketPlace" element={<MarketPlace/>}/>
                              <Route path="*" element={<Error/>}/>
                        </Routes>             
                  </Router>      
            </GlobalStyles>
    )
}

export default App;