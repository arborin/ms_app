import React from 'react'

export default function TaskList(props) {
    return (
        <div>
            <ul>
                {
                    props.todoList.map((item) => {
                        return (
                            <li key={item.id} style={{ color: item.completed ? 'green' : 'black' }}> {item.taskName}
                                <button onClick={() => props.deleteTask(item.id)}>X</button>
                                <button onClick={() => props.complateTask(item.id)}>{!item.completed ? 'done' : 'un-done'}</button>
                            </li>)
                    })
                }
            </ul>
        </div>
    )
}
