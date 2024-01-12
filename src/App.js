
import Categorytoggle from './Component/Categorytoggle';
import Foodcarousel from './Component/Foodcarousel';
import Footer from './Component/Footer';
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
     <Footer/>
    </div>
  );
}

export default App;
