
import { BrowserRouter as Router,Routes,
  Route
} from "react-router-dom";
import Error from "./pages/error/Error";
import Home from "./pages/home/Home";
import MarketPlace from "./pages/marketPlace/MarketPlace";
import Video from "./pages/videos/Video";
function App() {    
    return ( 
      <div>
        <Video/>
      </div>
        // <Router>
        //           <Routes >
        //             <Route path="/" element={<Home/>}/>
        //             <Route path="/marketPlace" element={<MarketPlace/>}/>
        //             <Route path="*" element={<Error/>}/>
        //       </Routes>
        // </Router>
    )
}

export default App;