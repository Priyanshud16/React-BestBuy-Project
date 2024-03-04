import { MainNavbar, UpperNavBar,NavDown } from "./Navbar"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Scrollbars } from 'react-custom-scrollbars-2';
import './Cart.css'
function Cart(){
return(
    <div>
    <header id="head">
<div className="continue-shopping">
<img width="30" height="30" src="https://img.icons8.com/ios-filled/50/long-arrow-left.png" alt="long-arrow-left" className="arrow-icon"/>
<h3>Continue Shopping</h3>
</div>
<div className="cart-icon">
<img width="44" height="44" src="https://img.icons8.com/material-sharp/24/shopping-cart.png" alt="shopping-cart" className="cart-icon"/>
</div>
</header>
<hr />
<section className="main-cart-section">
<h1>Shopping Cart</h1>
<p className="total-items">you have <span className="total-items-count">7</span> items in cart</p>
<div className="cart-items">
    <div className="cart-item-container">
    <Scrollbars> 
        <div className="cart-item-info">
            <div className="product-img">
                <img src="https://th.bing.com/th/id/OIP.PXLMRYD0xXhzwsQ38uD7dQHaFU?w=270&h=194&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />
            </div>

            <div className="title">
                <h2>Samsung s12</h2>
                <p>black color</p>
            </div>
            <div className="add-minus-quality">
            <FontAwesomeIcon icon={faPlus} className="plus" />
            <input type="text"  placeholder="2" style={{width:"10%"}}/>
            <FontAwesomeIcon icon={faMinus} className="minus" />
            </div>

            <div className="price">
                <h3>2000</h3>
            
            </div>
            <div className="remove-item">
            <FontAwesomeIcon icon={faTrash} className="minus" />
            </div>
        </div>
        </Scrollbars>
    </div>
</div>

<div className="cart-total">
    <h3>Cart Total: <span>23000</span></h3>
    <button>Check out</button>
</div>
</section>

</div>
)
}

export default Cart