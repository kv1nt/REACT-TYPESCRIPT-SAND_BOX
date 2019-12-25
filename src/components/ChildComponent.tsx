import React from 'react';

interface ChildComponentProps {
     description: string
     clickMethod: () => void
}

interface ChildComponentState {
    age?: number
    name?: string 
}

export class ChildComponent extends React.Component<ChildComponentProps, ChildComponentState> {
    constructor(props: ChildComponentProps){
        super(props)

        this.state = {
            age: 3,
            name: "Test"
        }
    }

    click = () : void =>{
        this.props.clickMethod()
    }

    render() {
        console.log(this.props)
        return (
            <>
                <h2>Child Component</h2>
                <p>AGE: {this.state.age}</p>
                <p>NAME: {this.state.name}</p>
                <p>PROPS FROM MAIN:  {this.props.description}</p>
                <button onClick={this.click}>Click</button>
            </>
        )
    }
}