import { useEffect, useState } from "react";

const User = (props) => {
      const [ value, setValue ] = useState(2);
      const { name } = props;
      console.log(name + 'constructor')

      useEffect(() => {
            console.log(name + 'use Effect');
      }, [])

      
      return (
            <div>
                  <h1>Hello from function</h1>
                  <h2>Name : {name}</h2>
                  <h2>Value : {value}</h2>
            </div>
      )
}

export default User;