import './HomePage.css'
import Auth from '../Auth/Auth'
import NavBar from '../NavBar/NavBar';
import Dashboard from '../Dashboard/Dashboard'

function HomePage(){

    let user = window.localStorage.getItem('email');

    if(user != null){
        user = <Dashboard />
    }else{
        user = (
            <div className="homePage">
                <div className="auth-form">
                    <Auth />
                </div>
            </div>
        )
    }

    return (
        <div>
            <NavBar />
            {user}
        </div>
    );
}

export default HomePage