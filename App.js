import React from "react"
import ReactDOM from "react-dom/client"

const resList = [
    {
        resName:"meghana",
        cuisine:"biryani"
    },
    {
        resName:"kfc",
        cuisine:"fried chicken"
    }
]

const Header = () =>{
    return (
        <div className="header">
            <div className="logo-container">
                <img 
                className="logo"
                src="https://static.vecteezy.com/system/resources/previews/008/687/818/original/food-delivery-logo-free-vector.jpg"></img>
            </div>
            <div className="nav-bar">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Cart</li>
                    <li>Contact Us</li>
                </ul>
            </div>
        </div>
    )
}

const ResturantCard = (props)=>{
    const {
        resData
    }=props;
    const {
        resName, cuisine
    }=resData;
    return (
        <div className="res-card">
            <img
              className="res-logo"
              alt="res-logo"
              src="https://b.zmtcdn.com/data/pictures/chains/1/50691/0435a03f4d2017a0a64d90b279c2fa63.jpg"
            />
            <h3>{resName}</h3>
            <h4>{cuisine}</h4>
            <h4>4.4 Stars</h4>
            <h4>20 Mins</h4>
        </div>
    )
}

const Body = () =>{
    return (
        <div className="body">
            <div className="search-bar">
                Search
            </div>
            <div className="res-container">
                {
                    resList.map((resturant)=> 
                    (<ResturantCard resData={resturant}/>)
                    )
                }
            </div>
        </div>
    )
}

const AppLayout = () =>{
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);