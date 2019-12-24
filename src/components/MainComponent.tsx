import React from 'react';
import {ChildComponent} from './ChildComponent'; 

interface MainComponentProps {
    description: string
}

interface MainComponentState {

}

export class MainComponent extends React.Component<MainComponentProps, MainComponentState> {
    constructor(props: MainComponentProps){
        super(props)

        this.state = {
            
        }
    }
    static defaultProps = {description:"FUCKING-PROPS-MOPS"}

    click = async () =>{
        alert("Click nah...")
    }

    render() {
        return <>
                 <h1>Main Component</h1>
                 <ChildComponent {...this.props}/>
                 <button onClick={this.click}>Click</button>
               </>
    }
}