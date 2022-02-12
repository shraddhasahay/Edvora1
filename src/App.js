import logo from './logo.svg';
import './App.css';
import dog from './dog.jpg';
import cards from './Components/cards'
import menu from './Components/menu'


function App() {
  return (
    
    <div className="App">
      
      <header className="App-header">
      
      <div class="float-container">
        
        <div class="float-child1">
        <section class="container1">{menu()}</section>
        </div>

        <div class="float-child">        
        <aside>   
        <h2 align="left">Edvora</h2>
        <br />
        <h6 align="left" >Products</h6> 
        <br />
        <h4 align="left">Product Name</h4>
        <hr></hr>  
        <div class="container scroll" id="style-3">
        <div style={{display: 'flex', flexDirection: 'row',paddingLeft:'10px'}}>{cards()}{cards()}{cards()}{cards()}{cards()}{cards()}{cards()}{cards()}</div>
        </div>
        <br></br>
        <h4 align="left">Product Name</h4>
        <hr></hr>
        <div class="container scroll" id="style-3">
        <div style={{display: 'flex', flexDirection: 'row',paddingLeft:'10px'}}>{cards()}{cards()}{cards()}{cards()}{cards()}{cards()}{cards()}</div>
        </div>
        </aside>
        </div>

      </div>
      
      </header>
    </div>
  );
}

export default App;
