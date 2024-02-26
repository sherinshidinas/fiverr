import React from "react";
import "./message.scss";
import { Link } from "react-router-dom";
import newRequest from "../../utils/newRequest";
import { useParams } from "react-router-dom";
import { useQueryClient, useQuery, useMutation } from "@tanstack/react-query";

function Message() {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const { id } = useParams();
  const queryClient = useQueryClient();

  const { isLoading, error, data } = useQuery({
    queryKey: ["message"],
    queryFn: () =>
      newRequest.get(`/messages/${id}`).then((res) => {
        return res.data;
      }),
  });

  

  const mutation = useMutation({
    mutationFn: (message) => {
      return newRequest.post(`/messages`, message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["messages"]);
    },
  });

  const handleSumbit = (e) => {
    e.preventDefault();
    mutation.mutate({
      conversationId: id,
      desc: e.target[0].value,
    });
    // after sending messages the text area should be empty
    e.target[0].value = "";
  };

  console.log("messages", data);
  return (
    <div className="message">
      <div className="container">
        <span className="breadcrumbs">
          <Link to="/messages" className="link">
            MESSAGES
          </Link>{" "}
          > SHERIN SHIDINAS >
        </span>

        {isLoading ? (
          "Loading"
        ) : error ? (
          "something went wrong"
        ) : (
          <div className="messages">
            {data.map((message) => (
              <div
                className={
                  message.userId === currentUser._id ? "owner item" : "item"
                }
                key={message._id}
              >
                <img src={currentUser.img || "/images/noavatar.jpg"} alt="" />
                <p>{message.desc}</p>
              </div>
            ))}
          </div>
        )}
        <hr />
        <form onSubmit={handleSumbit} className="write">
          <textarea
            name=""
            placeholder="write a message"
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}

export default Message;
