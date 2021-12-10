import React, {Fragment} from "react"
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";

import "components/Appointment/styles.scss"
export default function Appointment (props) {
  return (
    <article className="appointment"> 
    <Header time={props.time}  />
    {props.interview ? <Show interviewer={props.interviewer} student={props.interview.student} /> : <Empty /> }
    </article>
  );

  }