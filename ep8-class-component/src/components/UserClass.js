import React from "react";

class UserClass extends React.Component {

      constructor(props) {
            super(props);
            console.log(props.name + 'constructorr')

            this.state = {
                  value: 2
            }
      }

      componentDidMount(){
            console.log(this.props.name + 'compnenet did mount')
            this.setState({
                  value: this.state.value+1
            })
      }

      componentDidUpdate() {
            console.log(this.props.name + 'component did update')
      }

      render() {
            const { name } = this.props;
            const { value } = this.state;
            console.log(name + 'render')
            return (
                  <div>
                        <h1>Hello from Class</h1>
                        <h2>Name : {name}</h2>
                        <h2>Value : {value}</h2>
                        <button onClick={() => {
                              console.log('fas');
                              this.setState({
                                    value: this.state.value + 1
                              })
                        }}>
                        Increment Value</button>
                  </div>
            )
      }
}

export default UserClass;