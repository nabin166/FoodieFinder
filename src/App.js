

import Routing from './Component/Routing';
import './SCSS/App.scss';
import { BrowserRouter , Routes , Route } from 'react-router-dom'

function App() {
  return (
    <div >
       <BrowserRouter basename="">
       <Routing/>
     </BrowserRouter>
    
    </div>
  );
}

export default App;
