import './NavBar.css'
import React from 'react'
import { Image} from 'semantic-ui-react'
import Cart from '../Cart/Cart'

function handleLogout(){
    window.localStorage.removeItem('f_name');
    window.localStorage.removeItem('l_name');
    window.localStorage.removeItem('email');    
    window.localStorage.removeItem('score');
    window.localStorage.removeItem('cart');
    console.log("Logged out");
    window.location.replace("/");
}

function NavBar(){

    let f_name = window.localStorage.getItem('f_name');
    let cart = window.localStorage.getItem('cart');

    let cart_notification=null;
    if(cart != null && cart.length!=0){
        cart_notification = (
            <Cart />
        )
    }

    if(f_name != null){
        f_name=(
            <div className="nav-auth">
                <div className = "nav-text-vertical-align"><Image src='https://media-exp1.licdn.com/dms/image/C4E03AQF_uzk_FzJdyg/profile-displayphoto-shrink_200_200/0/1636397936222?e=1649289600&v=beta&t=8L1ipuAsbVf7qGYm2RR5EfYymJHCB2f0Kl9ooxkWl08' avatar /></div>
                {cart_notification}
                <div className = "nav-text-vertical-align" onClick={handleLogout}> Logout </div>
            </div>
        )
    }

    return (
        <div className="nav">
            <div className="logo-name nav-text-vertical-align">Carbon Score</div>
            <div className="nav-text-vertical-align"><h1 className="my-score">{window.localStorage.getItem('score')}</h1></div>
            {f_name}
        </div>
    )
}

export default NavBar