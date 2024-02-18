import React from "react";
import "./messages.scss";
import { Link } from "react-router-dom";

function Messages() {
  const currentUser = {
    id: 1,
    username: "Sherin Shidinas",
    isSeller: true,
  };

  const message =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum placeat eius recusandae laudantium tenetur repudiandae odio aperiam nam, voluptatem labore sequi incidunt dolores neque quia, vero dignissimos dolorem id ipsum error exercitationem ratione ex asperiores. Blanditiis sequi, tempore est natus aspernatur quod! Repellat asperiores est nostrum. Officia fugiat sequi temporibus asperiores consequuntur quos deleniti commodi eligendi, delectus minima mollitia inventore maxime culpa odit q";
  return (
    <div className="messages">
      <div className="container">
        <div className="title">
          <h3>Orders</h3>
        </div>

        <table>
          <tr>
            <th>{currentUser?.isSeller ? "Buyer" : "Seller"}</th>
            <th>Last Message</th>
            <th>Date</th>
            <th>Action</th>
          </tr>

          <tr className="active">
            <td>Maria Anders</td>
            <td><Link to='/message/123' className="link" >{message.substring(0, 100)} ...</Link></td>
            <td>1 hour ago</td>
            <td>
              <button>Mark as Read</button>
            </td>
          </tr>
          <tr className="active">
            <td>Shaun Marsh</td>
            <td><Link to='/message/123' className="link" >{message.substring(0, 100)} ...</Link></td>
            <td>2 hours ago</td>
            <td>
              <button>Mark as Read</button>
            </td>
          </tr>
          <tr>
            <td>Marcus Labuschagne</td>

            <td><Link to='/message/123' className="link" >{message.substring(0, 100)} ...</Link></td>
            <td>1 day ago</td>
          </tr>
          <tr>
            <td>James Faulkner</td>
            <td><Link to='/message/123' className="link" >{message.substring(0, 100)} ...</Link></td>
            <td>2 days ago</td>
          </tr>
          <tr>
            <td>Sherin Shidinas</td>
            <td><Link to='/message/123' className="link" >{message.substring(0, 100)} ...</Link></td>
            <td>4 days ago</td>
          </tr>
          <tr>
            <td>Eoin Morgan</td>
            <td><Link to='/message/123' className="link" >{message.substring(0, 100)} ...</Link></td>
            <td>1 week ago</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Messages;
