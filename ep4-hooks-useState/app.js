import React from 'react';
import ReactDOM from 'react-dom/client';
import './app.css';
import { useState } from 'react';

const data = [
      {
            "id": "93499",
            "name": "Oven Story Pizza Standout Toppings",
            "cuisines": [
                  "Pizzas",
                  "Pastas",
                  "Italian",
                  "Desserts",
                  "Beverages"
            ],
            "avgRating": 4.4,
            "deliveryTime": 27,
      },
      {
            "id": "93500",
            "name": "Burger King",
            "cuisines": [
                  "Burgers",
                  "Fast Food",
                  "American"
            ],
            "avgRating": 4.2,
            "deliveryTime": 22,
      },
      {
            "id": "93501",
            "name": "Domino's Pizza",
            "cuisines": [
                  "Pizzas",
                  "Italian",
                  "Fast Food"
            ],
            "avgRating": 4.3,
            "deliveryTime": 25,
      },
      {
            "id": "93502",
            "name": "KFC",
            "cuisines": [
                  "Chicken",
                  "Fast Food",
                  "American"
            ],
            "avgRating": 4.1,
            "deliveryTime": 20,
      },
      {
            "id": "93503",
            "name": "Starbucks",
            "cuisines": [
                  "Beverages",
                  "Coffees",
                  "Snacks",
                  "Desserts"
            ],
            "avgRating": 4.6,
            "deliveryTime": 15,
      },
      {
            "id": "93504",
            "name": "Subway",
            "cuisines": [
                  "Healthy Food",
                  "Sandwiches",
                  "Salads"
            ],
            "avgRating": 4.0,
            "deliveryTime": 18,
      },
      {
            "id": "93505",
            "name": "McDonald's",
            "cuisines": [
                  "Burgers",
                  "Fast Food",
                  "American"
            ],
            "avgRating": 4.2,
            "deliveryTime": 24,
      },
      {
            "id": "93506",
            "name": "Pizza Hut",
            "cuisines": [
                  "Pizzas",
                  "Italian",
                  "Fast Food"
            ],
            "avgRating": 4.1,
            "deliveryTime": 23,
      },
      {
            "id": "93507",
            "name": "Taco Bell",
            "cuisines": [
                  "Mexican",
                  "Fast Food"
            ],
            "avgRating": 4.0,
            "deliveryTime": 26,
      },
      {
            "id": "93508",
            "name": "Baskin Robbins",
            "cuisines": [
                  "Desserts",
                  "Ice Creams",
                  "Beverages"
            ],
            "avgRating": 4.5,
            "deliveryTime": 16,
      }
];


const NavBar = () => {
      return (
            <div className="container">
                  <div className="logo-container">
                        <img className="logo" src="https://imgs.search.brave.com/rOLwQJEuFtyT2OvPZ-mKNBK1MAlGXmWrt1SlfumyaQ0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbmdp/bWFnZXNmcmVlLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvU3dp/Z2d5LUxvZ28tUE5H/LnBuZw" alt="Swiggy" />
                  </div>
                  <div className="nav-items">
                        <ul>
                              <li>Home</li>
                              <li>Contacts</li>
                              <li>Profile</li>
                              <li>Log Out</li>
                        </ul>
                  </div>
            </div>
      )
}

const RestarandCard = (props) => {
      const { img, resName, cuisines, rating, deliveryTime } = props;
      return (
            <div className="card-container">
                  <img className="res-logo" src={img} alt="Swiggy" />
                  <h3>{resName}</h3>
                  <h4>{cuisines}</h4>
                  <h4>{rating}</h4>
                  <h4>{deliveryTime}</h4>
            </div>
      )
}

const AppComponent = () => {
      const [restaurentData, setRestaurentData] = useState(data);

      return (
            <div>
                  <NavBar />
                  <button onClick={() => {
                        setRestaurentData(restaurentData.filter((restaurant) => restaurant.avgRating > 4.2));
                  }}> Sort By Rating </button>

                  <div className="res-containter">
                        {restaurentData.map((restaurant) => (
                              <RestarandCard
                                    key={restaurant.id}
                                    img="https://imgs.search.brave.com/rOLwQJEuFtyT2OvPZ-mKNBK1MAlGXmWrt1SlfumyaQ0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbmdp/bWFnZXNmcmVlLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvU3dp/Z2d5LUxvZ28tUE5H/LnBuZw"
                                    resName={restaurant.name}
                                    cuisines={restaurant.cuisines.join(", ")}
                                    rating={restaurant.avgRating}
                                    deliveryTime={restaurant.deliveryTime}
                              />
                        ))}
                  </div>
            </div>
      )
}


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppComponent />);

