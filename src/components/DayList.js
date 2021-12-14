import React from "react";
import DayListItem from "components/DayListItem.js";

export default function DayList(props) {
  const days = props.days;
  const listDays = props.days.map((days) => (
    <DayListItem
      key={days.id}
      name={days.name}
      spots={days.spots}
      selected={days.name === props.value}
      setDay={() => props.onChange}
    />
  ));
  return <ul>{listDays}</ul>;
}

