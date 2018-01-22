import React from 'react';
import uuid from 'uuid';
import style from './App.css';
import Title from './../components/Title';
import TodoList from './../components/TodoList';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: [
                {
                    id: 1,
                    text: 'clean room'
                }, 
                {
                    id: 2,
                    text: 'wash the dishes'
                }, 
                {
                    id: 3,
                    text: 'feed my cat'
                }
            ]
        };
    }

    addTodo(val){
        const todo = { 
            text: val,
            id: uuid.v4(),
        };
        const data = [...this.state.data, todo];
        this.setState({data});
    }

    removeTodo(id){
        const rest = this.state.data.filter(todo=>todo.id !== id);
        console.log(rest);
        this.setState({data:rest});
    }
    
    render(){
        return (
            <div className={style.TodoApp}>
                <Title title={'TodoList'} left={this.state.data.length} />
                <ul className={style.todoList}>
                    <TodoList items={this.state.data} remove={this.removeTodo.bind(this)} />
                </ul>
            </div>
        );
    }
}

export default App;