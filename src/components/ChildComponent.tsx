import React from 'react';

interface ChildComponentProps {}

interface ChildComponentState {
    age?: number
    name?: string 
}

export class ChildComponent extends React.Component<ChildComponentProps, ChildComponentState> {
    constructor(props: ChildComponentProps){
        super(props)

        this.state = {
            age: 5,
            name: "Test"
        }
    }

    render() {
        return (
            <>
                <h2>Child Component</h2>
                <p>AGE: {this.state.age}</p>
                <p>NAME: {this.state.name}</p>
            </>
        )
    }
}