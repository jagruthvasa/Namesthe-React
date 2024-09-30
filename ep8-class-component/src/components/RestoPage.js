import { useParams } from "react-router-dom";

const RestoPage = () => {
      const {resId} = useParams();
      return (
            <div>
                  Here's the id : {resId}
            </div>
      )
}

export default RestoPage;