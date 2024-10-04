import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

const RestoPage = () => {
      const { resId } = useParams();
      const [items, setItems] = useState([]);

      const fetchItems = async () => {
            const response = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.96340&lng=77.58550&restaurantId=" + resId)
            const jsonData = await response.json();

            const data = jsonData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

            console.log(data);

            const itemsData = data.filter((item) => {
                  return item?.card?.card?.['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
            })
            setItems(itemsData)

      }

      useEffect(() => {
            fetchItems();
      }, [])

      return (
            <div>
                  {
                        items.map((item) => {
                              return (
                                    <div key={item.card.card.title}> {/* Added a key to the outermost element */}
                                          <ItemList item={item} />
                                    </div>
                              );
                        })
                  }
            </div>
      )
}

export default RestoPage;