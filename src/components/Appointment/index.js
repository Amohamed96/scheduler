import React from "react";
import useVisualMode from "hooks/useVisualMode.js";
import "components/Appointment/styles.scss";
import Header from "./Header.js";
import Show from "./Show.js";
import Empty from "./Empty.js";
import Form from "./Form.js";
import Status from "./Status.js";
import Confirm from "./Confirm.js";
import Error from "./Error.js";
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const SAVING = "SAVING";
const DELETING = "DELETING";
const CONFIRM = "CONFIRM";
const EDIT = "EDIT";
const ERROR_SAVE = "ERROR_SAVE";
const ERROR_DELETE = "ERROR_DELETE";

export default function Appointment(props) {
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );
  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer,
    };

    transition(SAVING);
    props
      .bookInterview(props.id, interview)
      .then(() => transition(SHOW))
      .catch((error) => {
        transition(ERROR_SAVE, true);
      });
  }

  function deleteInterview() {
    const interview = {
      student: "",
      interviewer: null,
    };

    transition(DELETING, true);
    props
      .cancelInterview(props.id, interview)
      .then(() => transition(EMPTY))
      .catch((error) => {
        transition(ERROR_DELETE, true);
      });
  }

  return (
    <article className="appointment">
      <Header time={props.time} />
      {mode === SHOW && (
        <Show
          key={props.id}
          interviewer={props.interview.interviewer}
          student={props.interview.student}
          onDelete={() => transition(CONFIRM)}
          onEdit={() => transition(EDIT)}
        />
      )}
      {mode === CONFIRM && (
        <Confirm onConfirm={deleteInterview} onCancel={back} />
      )}
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === CREATE && (
        <Form
          interviewers={props.interviewers}
          onCancel={() => back(EMPTY)}
          onSave={save}
        />
      )}
      {mode === EDIT && (
        <Form
          interviewers={props.interviewers}
          onCancel={() => back(EMPTY)}
          onSave={save}
          student={props.interview.student}
          interviewer={props.interview.interviewer.id}
        />
      )}
      {mode === SAVING && <Status message="Saving..." />}
      {mode === DELETING && <Status message="Deleting..." />}
      {mode === ERROR_SAVE && (
        <Error message={"There was an error!"} onClose={back} />
      )}
      {mode === ERROR_DELETE && (
        <Error message={"Error!"} onClose={back} />
      )}
    </article>
  );
}