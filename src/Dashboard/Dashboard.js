import NavBar from '../NavBar/NavBar'
import ScoreCard from '../ScoreCard/ScoreCard'
import Products from '../Products/Products'
import './Dashboard.css'


function HomePage(){

    return (
        <div className="dashbaord-page">
            <div className="profile-card">
                <ScoreCard />
            </div>
            
            <div className="products-card">
                <Products />
            </div>
        </div>
    );
}

export default HomePage