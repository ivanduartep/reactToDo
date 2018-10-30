import React, {Component} from 'react';
import InputComponent from './InputComponent';

export default class ToDoComponent extends Component {

    constructor(props){
        super(props);

        this.state = {
            tasksToDo: [],
            tasksInProgress: [],
            tasksDone: []
        }

        this.addTask.bind(this);
    }

    addTask = (task) => {

        let tasks = [...this.state.tasksToDo, ...this.state.tasksInProgress, ...this.state.tasksDone];

        if(tasks.indexOf(task) !== -1)
            alert("You can't create a task with the same name!");
        else
            this.setState({
                tasksToDo: [...this.state.tasksToDo, task]
            });
    }

    moveTask = (from, to, task) => {
        this.setState({
            [to]: [ ...this.state[to], task]
        })

        let copyStateList = this.state[from];
        remove(copyStateList, task);
        

        this.setState({
            [from]: copyStateList 
        });
    }

    render(){
        return(
            <div>
                <InputComponent addTask={this.addTask}/>

                <h3>To Do: </h3>
                <ul>
                    {this.state.tasksToDo.map((task) => {
                        return  <li key={task}>
                                {task} 
                                <a onClick={(e) => {this.moveTask('tasksToDo', 'tasksInProgress', task)}}> [In Progress]</a>
                            </li> 
                    })}
                </ul>

                <h3>In Progress: </h3>
                <ul>
                    {this.state.tasksInProgress.map((task) => {
                        return <li key={task}>
                            {task}
                            <a onClick={(e) => {this.moveTask('tasksInProgress', 'tasksToDo', task)}}> [To Do]</a>
                            <a onClick={(e) => {this.moveTask('tasksInProgress', 'tasksDone', task)}}> [Done]</a>
                            </li>
                    })}
                </ul>

                <h3>Done: </h3>
                <ul>
                    {this.state.tasksDone.map((task) => {
                        return <li key={task}>
                            {task}
                            <a onClick={(e) => {this.moveTask('tasksDone', 'tasksInProgress', task)}}> [In Progress]</a>
                            </li>
                    })}
                </ul>

            </div>
        )
    }

}

function remove(array, element) {
    const index = array.indexOf(element);

    if (index !== -1) {
        array.splice(index, 1);
    }
}