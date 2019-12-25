import React from 'react';
import {ChildComponent} from './ChildComponent'; 

interface MainComponentProps {
    description: string
    clickMethod?: () => void
}

interface MainComponentState {
    title: string
}

export class MainComponent extends React.Component<MainComponentProps, MainComponentState> {
    constructor(props: MainComponentProps){
        super(props)

        this.state = {
            title: "Initial state"
        }
    }
    static defaultProps = {description:"FUCKING-PROPS-MOPS"}

    click = (): void =>{
        this.setState(
                { title:this.state.title === "Initial state" ? "Post state" : "Initial state" }
            );   
    }

    render() {
        return <>
                 <h1>Main Component</h1>
                 <div>Title {this.state.title}</div>
                 <ChildComponent {...this.props} clickMethod={this.click}/>
               </>
    }
}