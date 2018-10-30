import React, {Component} from 'react';

export default class InputComponent extends Component {

    constructor(props){
        super(props);

        this.state = {
            task: ""
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.props.addTask(this.state.task);
        this.setState({ task: ""})
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value});
    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Creae Task: </label>
                    <input name="task" value={this.state.task} onChange={this.onChange}/>
                    <button>Submit</button>
                </form>
                
            </div>
        )
    }
}