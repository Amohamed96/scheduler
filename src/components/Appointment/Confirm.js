import React from "react"
import Button from "components/Button";

export default function Confirm(props) {

  return (
    <main className="appointment__card appointment__card--confirm">
  <h1 className="text--semi-bold">{props.message}</h1>
  Are you sure you want to delete this Appointment?
  <section className="appointment__actions">
    <Button danger onClick={props.onCancel}>Cancel</Button>
    <Button danger onClick={props.onConfirm}>Confirm</Button>
  </section>
</main>
  );
}