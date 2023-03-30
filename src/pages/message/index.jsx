import React from 'react'
import { Link } from 'react-router-dom';
import "./Message.scss";

const Message = () => {
  return (
    <div className='message'>
      <div className="container">
        <span className="breadcrumbs">
          <Link to="/messages" className='link'>MESSAGES</Link> {">"} JOHN DOE
        </span>
        <div className="messages">
          <div className="item">
            <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae optio quis accusamus voluptatum corporis eveniet totam sit nostrum, cum vel.
            </p>
          </div>
          <div className="item owner">
            <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae optio quis accusamus voluptatum corporis eveniet totam sit nostrum, cum vel.
            </p>
          </div>
          <div className="item">
            <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae optio quis accusamus voluptatum corporis eveniet totam sit nostrum, cum vel.
            </p>
          </div>
          <div className="item owner">
            <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae optio quis accusamus voluptatum corporis eveniet totam sit nostrum, cum vel.
            </p>
          </div>
          <div className="item">
            <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae optio quis accusamus voluptatum corporis eveniet totam sit nostrum, cum vel.
            </p>
          </div>
          <div className="item owner">
            <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae optio quis accusamus voluptatum corporis eveniet totam sit nostrum, cum vel.
            </p>
          </div>
          <div className="item">
            <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae optio quis accusamus voluptatum corporis eveniet totam sit nostrum, cum vel.
            </p>
          </div>
          <div className="item owner">
            <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae optio quis accusamus voluptatum corporis eveniet totam sit nostrum, cum vel.
            </p>
          </div>
        </div>
        <hr />
        <div className="write">
          <textarea placeholder='Write a message' name="" id="" cols="30" rows="10"></textarea>
          <button>Send</button>
        </div>
      </div>
    </div>
  )
}

export default Message