const ItemList = (props) => {
      const {item} = props
      const itemCards = item?.card?.card?.itemCards;
      console.log('item cards', itemCards)
      return (
            <div>
                  <h2>{item.card.card.title}</h2>
                  {
                        itemCards.map((item) =>  {
                             return <div key={item?.card?.info?.id}>
                                    <h3>
                                          {item?.card?.info?.name}
                                    </h3>
                                    <h3>
                                          {item?.card?.info?.price / 100}
                                    </h3>
                                    <p>{item?.card?.info?.description}</p>
                              </div>

                        })
                  }

            </div>
      )
      
}

export default ItemList;