import React from "react";

export default function Status(props) {
/*
manages the messages when appointment is saving or deleting
*/
    return (
<main className="appointment__card appointment__card--status">
  <img
    className="appointment__status-image"
    src="images/status.png"
    alt="Loading"
  />
  <h1 className="text--semi-bold">{props.message}</h1>
</main>

  );
}