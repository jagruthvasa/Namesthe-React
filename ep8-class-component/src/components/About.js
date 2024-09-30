import { useEffect } from "react";
import User from "./User";
import UserClass from "./UserClass";

const About = () => {

      console.log('parent constructor');

      useEffect(() => {
            var timer = setInterval(() => {
                  console.log('abc');
            }, 1000)

            return () => {
                  clearInterval(timer);
            }
      }, [])


      return (
            <div>
                  <h1>This is the testing of the About route</h1>
                  <User name="sai" />
                  <User name="sai Jagruth" />
                  {/* <UserClass name="first " />
                  <UserClass name="second" /> */}

            </div>
      );
}

export default About;