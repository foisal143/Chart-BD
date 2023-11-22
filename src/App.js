import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Products from './components/Products/Products';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Products></Products>
      <Footer></Footer>
    </div>
  );
}

export default App;
