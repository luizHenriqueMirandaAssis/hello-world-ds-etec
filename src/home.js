import React from 'react'

class Home extends React.Component {

    render() {
        return (
            <div>
                <h1>Hello {this.props.nome} {this.props.mensagem}</h1>
            </div>
        )
    }
}
export default Home
