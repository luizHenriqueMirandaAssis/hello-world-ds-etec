import React from 'react'

function HelloWorldWithProps(props) {
    return (
        <div>
            <h3>Hello {props.name}, {props.message}</h3>
        </div>
    );
}

export default HelloWorldWithProps