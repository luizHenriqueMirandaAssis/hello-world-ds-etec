import React, {Component} from 'react'

class HelloWorldWithState extends Component {

    constructor() {
        super()

        this.state = {
            name: '',
            message: '' 
        }
    }

    nameChange(event) {
     const value = event.target.value;
     
     this.setState({
        name: value
     })
    }

    messageChange(event) {
        const value = event.target.value;
        
        this.setState({
            message: value
        })
    }

    render() {

        const { name, message } = this.state
       
        return (
            <div>
                <input type="text" value={this.state.name} onChange={(e)=> this.nameChange(e)}></input>
                <p>Hello {name}!!!</p>
   
                <input type="text" value={this.state.message} onChange={(e)=> this.mensagemChange(e)}></input>
                <p>{message}</p>
            </div>
        )
    }
}

export default HelloWorldWithState