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

export default RestarandCard;