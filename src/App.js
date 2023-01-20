
import './App.css';
import {Route, Routes,BrowserRouter} from 'react-router-dom';
import Mainpage from "./screens/mainpage"
import Signup from "./screens/signUp.js"
import Home from "./screens/home.js"
import Chase from "./screens/chase.js"
import Bbt from "./screens/bbt.js"
import Boa from "./screens/Boa.js"
import CapitalOne from "./screens/capitalone.js"
import Chime from "./screens/chime.js"
import Citibank from "./screens/citibank.js"
import Citizen from "./screens/citizenlogs.js"
import FifthThird from "./screens/fifththird.js"
import Go2Bank from "./screens/go2bank.js"
import Golden from "./screens/goldencredit.js"
import Huntington from "./screens/huntington.js"
import Keybank from "./screens/keybank.js"
import Navyfcu from './screens/navy';
import Pnc from './screens/pnclogs';
import Regions from './screens/regions';
import Suntrust from './screens/suntrust';
import Tdbank from './screens/TdBank';
import Usaaa from './screens/usaa';
import WellsFargo from './screens/wellsfargo';
import Addfunds from './screens/Addfunds';

import Btc from './screens/btc';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
    
    <Routes> 
   
        <Route  path='/' index element={<Mainpage />}/>
        <Route  path='/signup'  element={<Signup />}/>
        <Route  path='/home'  element={<Home/>}/>
        <Route  path='/chasebank'  element={<Chase/>}/>
        <Route  path='/Bbt'  element={<Bbt/>}/>
        <Route  path='/CapitalOne'  element={<CapitalOne/>}/>
        <Route  path='/Boa'  element={<Boa/>}/>
        <Route  path='/Chime'  element={<Chime/>}/>
        <Route  path='/Citibank'  element={<Citibank/>}/>
        <Route  path='/Citizen'  element={<Citizen/>}/>
        <Route  path='/FifthThird'  element={<FifthThird/>}/>
        <Route  path='/Go2Bank'  element={<Go2Bank/>}/>
        <Route  path='/Golden'  element={<Golden/>}/>
        <Route  path='/Huntington'  element={<Huntington/>}/>
        <Route  path='/Keybank'  element={<Keybank/>}/>
        <Route  path='/Navyfcu'  element={<Navyfcu/>}/>
        <Route  path='/Pnc'  element={<Pnc/>}/>
        <Route  path='/Regions'  element={<Regions/>}/>
        <Route  path='/Suntrust'  element={<Suntrust/>}/>
        <Route  path='/Tdbank'  element={<Tdbank/>}/>
        <Route  path='/Usaaa'  element={<Usaaa/>}/>
        <Route  path='/WellsFargo'  element={<WellsFargo/>}/>
        <Route  path='/Addfunds'  element={<Addfunds/>}/>
        <Route  path='/btc'  element={<Btc/>}/>
       
       
    </Routes>
</BrowserRouter> 
    </div>
  );
}

export default App;
