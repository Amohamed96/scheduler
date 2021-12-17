import React from "react";
import DayListItem from "components/DayListItem.js";
import "components/DayListItem.js";

export default function DayList(props) {
  const listDays = props.days.map((days) => (
    <DayListItem
      key={days.id}
      name={days.name}
      spots={days.spots}
      selected={days.name === props.value}
      setDay={props.setDay}
    />
  ));
  return <ul>{listDays}</ul>;
}

