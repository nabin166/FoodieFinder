
import Categorytoggle from './Component/Categorytoggle';
import Foodcarousel from './Component/Foodcarousel';
import Heading from './Component/Heading';
import Ourrestaurant from './Component/Ourrestaurant';
import './SCSS/App.scss';

function App() {
  return (
    <div >
     <Heading/>
     <Categorytoggle/>
     <Ourrestaurant/>
     <Foodcarousel/>
    </div>
  );
}

export default App;
