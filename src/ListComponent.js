import React, {Component} from 'react';
import ListElementComponent from './ListElementComponent'

export default class ListComponent extends Component {

    handleClick(e){
        alert(e.currentTarget.textContent);
    }

    render(){

        let objects = [
            { id: 1, name: "Test1" },
            { id: 2, name: "Test2" },
            { id: 3, name: "Test3" },
            { id: 4, name: "Test4" },
            { id: 5, name: "Test5" },
            { id: 6, name: "Test6" },
            { id: 7, name: "Test7" },
            { id: 8, name: "Test8" }
        ]

        return (
            <div>
                <ul>
                    { objects.map((obj) => {
                        return <ListElementComponent key={obj.id} click={this.handleClick} id={obj.id} name={obj.name}/>
                    })}
                </ul>
                <button>Click me!</button>
            </div>
        );
    }
}