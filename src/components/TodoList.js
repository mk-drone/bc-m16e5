import React from 'react';
import style from './TodoList.css';

let TodoList = props => 
    props.items.map((val, index) => {
        return <li className={style.listItem} key={val.id}>
                <span>{`${val.id}. ${val.text} `}</span>
                <a href="#" onClick={() => {props.remove(val.id) }}>Remove</a>
            </li>;
    });

export default TodoList;