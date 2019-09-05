import React, {Component} from 'react'

class Contador extends Component {
    constructor (){
        super()

        this.state = {
            valor: 0
        }
    }

    incrementar() {
        const valorAtual = this.state.valor

      this.setState({
          valor: valorAtual + 1
      })
    }

    render() {
        return(
            <div>
                <h1>{this.state.valor}</h1>
                <button onClick={() => this.incrementar()}>Mais um!</button>
            </div>
        )
    }
}

export default Contador