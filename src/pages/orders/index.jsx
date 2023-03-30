import React from "react";
import "./Orders.scss";

const Orders = () => {

  const currentUser = {
    id: 1,
    username: "John Doe",
    isSeller: true,
  }

  return (
    <div className="orders">
      <div className="container">
        <div className="title">
          <h1>My Orders</h1>
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>{currentUser?.isSeller ? "Buyer" : "Seller"}</th>
            <th>Contact</th>
          </tr>
          <tr>
            <td>
              <img className="img" src="/img/desk.jpg" alt="" />
            </td>
            <td>Maria Andres</td>
            <td>$68.7</td>
            <td>John Doe</td>
            <td>
              <img className="message" src="/img/message.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img className="img" src="/img/desk.jpg" alt="" />
            </td>
            <td>Maria Andres</td>
            <td>$68.7</td>
            <td>John Doe</td>
            <td>
              <img className="message" src="/img/message.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img className="img" src="/img/desk.jpg" alt="" />
            </td>
            <td>Maria Andres</td>
            <td>$68.7</td>
            <td>John Doe</td>
            <td>
              <img className="message" src="/img/message.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img className="img" src="/img/desk.jpg" alt="" />
            </td>
            <td>Maria Andres</td>
            <td>$68.7</td>
            <td>John Doe</td>
            <td>
              <img className="message" src="/img/message.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img className="img" src="/img/desk.jpg" alt="" />
            </td>
            <td>Maria Andres</td>
            <td>$68.7</td>
            <td>John Doe</td>
            <td>
              <img className="message" src="/img/message.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img className="img" src="/img/desk.jpg" alt="" />
            </td>
            <td>Maria Andres</td>
            <td>$68.7</td>
            <td>John Doe</td>
            <td>
              <img className="message" src="/img/message.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img className="img" src="/img/desk.jpg" alt="" />
            </td>
            <td>Maria Andres</td>
            <td>$68.7</td>
            <td>John Doe</td>
            <td>
              <img className="message" src="/img/message.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img className="img" src="/img/desk.jpg" alt="" />
            </td>
            <td>Maria Andres</td>
            <td>$68.7</td>
            <td>John Doe</td>
            <td>
              <img className="message" src="/img/message.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img className="img" src="/img/desk.jpg" alt="" />
            </td>
            <td>Maria Andres</td>
            <td>$68.7</td>
            <td>John Doe</td>
            <td>
              <img className="message" src="/img/message.png" alt="" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Orders;
