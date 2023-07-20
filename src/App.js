import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './App.css';
import { Routing } from './components/Routes';


function App() {
  return (
    <div className="App">
     
      <Header/>
      <Routing/>
      <Main/>       
      <Footer/>
      
    </div>
  );
}

export default App;
