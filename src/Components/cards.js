
import 'bootstrap/dist/css/bootstrap.min.css';
import dog from './dog.jpg';
import './cards.css'

function cards () {
    return( 
    <div class="user-card">        
         
          <span class="avatar-holder">
          <img src={dog} alt="Avatar"></img></span>
          <span class="user-info-holder">
          <h2 class="name">Product Name</h2>
          <span class="skill">Brand Name</span>
          <span class="skill">$44.7</span>

          </span>
    </div>
    );
}
export default cards;
