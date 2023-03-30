import React from "react";
import { Link } from "react-router-dom";
import "./Messages.scss";

const Messages = () => {
  const message = `
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis cum repudiandae quas voluptas. Commodi, similique. Nemo rem non nisi at eos architecto quis.`;

  return (
    <div className="messages">
      <div className="container">
        <div className="title">
          <h1>My Messages</h1>
        </div>
        <table>
          <tr>
            <th>Buyer</th>
            <th>Last Message</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
          <tr className="active">
            <td>John Doe</td>
            <td>
              <Link className="link" to="/message/123">{message.substring(0, 80)}...</Link>
            </td>
            <td>25 minute ago</td>
            <td>
              <button>Mark as Read</button>
            </td>
          </tr>
          <tr className="active">
            <td>John Doe</td>
            <td>
              <Link className="link" to="/message/123">{message.substring(0, 80)}...</Link>
            </td>
            <td>25 minute ago</td>
            <td>
              <button>Mark as Read</button>
            </td>
          </tr>
          <tr>
            <td>John Doe</td>
            <td>
              <Link className="link" to="/message/123">{message.substring(0, 80)}...</Link>
            </td>
            <td>25 minute ago</td>
          </tr>
          <tr>
            <td>John Doe</td>
            <td>
              <Link className="link" to="/message/123">{message.substring(0, 80)}...</Link>
            </td>
            <td>25 minute ago</td>
          </tr>
          <tr>
            <td>John Doe</td>
            <td>
              <Link className="link" to="/message/123">{message.substring(0, 80)}...</Link>
            </td>
            <td>25 minute ago</td>
          </tr>
          <tr>
            <td>John Doe</td>
            <td>
              <Link className="link" to="/message/123">{message.substring(0, 80)}...</Link>
            </td>
            <td>25 minute ago</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Messages;
