import UserContext from "../utils/UserContext";
import { useContext } from "react";


const RestarandCard = (props) => {
      const { loggedUser } = useContext(UserContext);
      const { img, resName, cuisines, rating, deliveryTime } = props;
      return (
            <div className="card-container">
                  <img className="res-logo" src={img} alt="Swiggy" />
                  <h3>{resName}</h3>
                  <h4>{cuisines}</h4>
                  <h4>{rating}</h4>
                  <h4>{deliveryTime}</h4>
                  <h2>{loggedUser}</h2>
            </div>
      )
}

export const promotedCard = (RestarandCard) => {
      return (props) => {
            return (
                  <div>
                        <p>Promoted</p>
                        <RestarandCard {...props} />
                  </div>
            )
      }
}

export default RestarandCard;