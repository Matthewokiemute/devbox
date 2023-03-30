import React from "react";
import { Link } from "react-router-dom";
import "./MyProjects.scss";

const MyGigs = () => {
  return (
    <div className="myGigs">
      <div className="container">
        <div className="title">
          <h1>Gigs</h1>
          <Link to="/add" className="link">
            <button>Add New Gig</button>
          </Link>
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Sales</th>
            <th>Action</th>
          </tr>
          <tr>
            <td>
              <img className="img" src="/img/desk.jpg" alt="" />
            </td>
            <td>Gig One</td>
            <td>$59.9</td>
            <td>23</td>
            <td>
              <img className="delete" src="/img/delete.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img className="img" src="/img/desk.jpg" alt="" />
            </td>
            <td>Gig One</td>
            <td>$59.9</td>
            <td>23</td>
            <td>
              <img className="delete" src="/img/delete.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img className="img" src="/img/desk.jpg" alt="" />
            </td>
            <td>Gig One</td>
            <td>$59.9</td>
            <td>23</td>
            <td>
              <img className="delete" src="/img/delete.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img className="img" src="/img/desk.jpg" alt="" />
            </td>
            <td>Gig One</td>
            <td>$59.9</td>
            <td>23</td>
            <td>
              <img className="delete" src="/img/delete.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img className="img" src="/img/desk.jpg" alt="" />
            </td>
            <td>Gig One</td>
            <td>$59.9</td>
            <td>23</td>
            <td>
              <img className="delete" src="/img/delete.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img className="img" src="/img/desk.jpg" alt="" />
            </td>
            <td>Gig One</td>
            <td>$59.9</td>
            <td>23</td>
            <td>
              <img className="delete" src="/img/delete.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img className="img" src="/img/desk.jpg" alt="" />
            </td>
            <td>Gig One</td>
            <td>$59.9</td>
            <td>23</td>
            <td>
              <img className="delete" src="/img/delete.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img className="img" src="/img/desk.jpg" alt="" />
            </td>
            <td>Gig One</td>
            <td>$59.9</td>
            <td>23</td>
            <td>
              <img className="delete" src="/img/delete.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img className="img" src="/img/desk.jpg" alt="" />
            </td>
            <td>Gig One</td>
            <td>$59.9</td>
            <td>23</td>
            <td>
              <img className="delete" src="/img/delete.png" alt="" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default MyGigs;
