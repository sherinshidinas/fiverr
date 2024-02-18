import React from "react";
import "./order.scss";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";

function Orders() {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const { isLoading, error, data } = useQuery({
    queryKey: [""],
    queryFn: () =>
      newRequest.get("/orders").then((res) => {
        return res.data;
      }),
  });
//hello shidinass
  return (
    <div className="orders">
      {isLoading ? (
        "Loading"
      ) : error ? (
        "Something went wrong"
      ) : (
        <div className="container">
          <div className="title">
            <h3>Orders</h3>
          </div>

          <table>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>

              <th>Contact</th>
            </tr>

            {data.map((order) => (
              <tr key={order._id}>
                <td>
                  <img className="image" src={order.img} alt="" />
                </td>
                <td>{order.title}</td>
                <td>{order.price}</td>

                <td>
                  <img className="message" src="./images/message.png" alt="" />
                </td>
              </tr>
            ))}
          </table>
        </div>
      )}
    </div>
  );
}

export default Orders;
