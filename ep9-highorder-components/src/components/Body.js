import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import data from "../utils/constants";
import RestarandCard, { promotedCard } from "./RestarandCard";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";


const Body = () => {
      const [restaurentData, setRestaurentData] = useState([]);
      const [search, setSearch] = useState("");
      console.log('body');
      const PromotedCard = promotedCard(RestarandCard)
      const fun = async () => {
            // const swiggyData = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
            // const jsonData = await swiggyData.json();
            // console.log(jsonData?.data?.cards[1]?.card?.card?.gridElements.infoWithStyle?.restaurants);
            // setRestaurentData(jsonData?.data?.cards[1]?.card?.card?.gridElements.infoWithStyle?.restaurants);
            setRestaurentData(data);
      }

      useEffect(() => {
            fun();
            console.log('useeffect');
      });

      if (restaurentData.length === 0) {
            return (
                  <div>
                        <Shimmer />
                  </div>
            )
      }

      return (
            <div>
                  <div className="filter">
                        <div>
                              <input type="text" placeholder="Search for restaurants" value={search}
                                    onChange={(e) => {
                                          setSearch(e.target.value);
                                    }} />
                              <button onClick={() => {
                                    setRestaurentData(restaurentData.filter((restaurant) => restaurant.info.name.toLowerCase().includes(search.toLowerCase())));
                              }} > Search </button>
                        </div>
                        <button onClick={() => {
                              setRestaurentData(restaurentData.filter((restaurant) => restaurant.info.avgRating > 4.5));
                        }}> Sort By Rating </button>
                  </div>

                  <div className="res-containter">
                        {restaurentData.map((restaurant) => (
                              // <RestarandCard
                              //       key={restaurant.info.id}
                              //       img="https://imgs.search.brave.com/rOLwQJEuFtyT2OvPZ-mKNBK1MAlGXmWrt1SlfumyaQ0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbmdp/bWFnZXNmcmVlLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvU3dp/Z2d5LUxvZ28tUE5H/LnBuZw"
                              //       resName={restaurant.info.name}
                              //       cuisines={restaurant.info.cuisines.join(", ")}
                              //       rating={restaurant.info.avgRating}
                              //       deliveryTime={restaurant.info.sla.deliveryTime}
                              // />
                              <Link to={"restaurant/" + restaurant.id} key={restaurant.id}>
                                    {restaurant?.promoted ? <PromotedCard
                                          img="https://imgs.search.brave.com/rOLwQJEuFtyT2OvPZ-mKNBK1MAlGXmWrt1SlfumyaQ0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbmdp/bWFnZXNmcmVlLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvU3dp/Z2d5LUxvZ28tUE5H/LnBuZw"
                                          resName={restaurant.name}
                                          cuisines={restaurant.cuisines.join(", ")}
                                          rating={restaurant.avgRating}
                                          deliveryTime={restaurant.deliveryTime}
                                    /> :
                                    <UserContext.Provider value={{loggedUser: "Sai"}}>

                                          <RestarandCard
                                                img="https://imgs.search.brave.com/rOLwQJEuFtyT2OvPZ-mKNBK1MAlGXmWrt1SlfumyaQ0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbmdp/bWFnZXNmcmVlLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvU3dp/Z2d5LUxvZ28tUE5H/LnBuZw"
                                                resName={restaurant.name}
                                                cuisines={restaurant.cuisines.join(", ")}
                                                rating={restaurant.avgRating}
                                                deliveryTime={restaurant.deliveryTime}
                                          />
                                    </UserContext.Provider>}</Link>
                        ))}
                  </div>
            </div>
      )
}

export default Body;