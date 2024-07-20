import React from 'react'

export default function Task(props) {
    if(props.isDone === true){  
        return(
        <div className="d-flex p-3 gap-2 align-items-center border-bottom">
            <span className="text-decoration-line-through">{props.title}</span>
            <button className="btn btn-success">Done</button>
            <button className="btn btn-danger">Delete</button>
        </div>
        )
    }
    return (
    <div className="d-flex p-3 gap-2 align-items-center border-bottom">
          <span>{props.title}</span>
          <button className="btn btn-success">Done</button>
          <button className="btn btn-danger">Delete</button>
    </div>
  ) 
}