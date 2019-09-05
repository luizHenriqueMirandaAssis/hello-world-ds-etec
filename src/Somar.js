import React, {Component} from 'react'

class Somar extends Component {
    constructor(){
        super()

        this.state = {
            valorUm: 0,
            valorDois: 0,
            resultado: 0
        }
    }

    change(event, valor) {
        const valorAlterado = event.target.value

        this.setState({
            valorUm:   valor === 1 ? valorAlterado : this.state.valorUm,  
            valorDois: valor === 2 ? valorAlterado : this.state.valorDois
        })
    }

    sum() {
        const {valorUm, valorDois} = this.state

        this.setState({
            resultado: parseInt(valorUm) + parseInt(valorDois)
        })
    }

    render(){
        return(
            <div>
                <input type="number" value={this.state.valorUm}   onChange={(event)=> this.change(event,1)}></input>
                <input type="number" value={this.state.valorDois} onChange={(event)=> this.change(event,2)}></input>

                <button onClick={()=> this.sum()}>(+)</button>
                <h1>Resultado: {this.state.resultado}</h1>
            </div>  
        )
    }   
}
export default Somar