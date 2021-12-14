import React from "react";
import "components/DayListItem.js";
import classNames from "classnames";
import DayListItem from "components/DayListItem.js";

export default function DayList(props) {
  const listItems = props.days.map((days) => (
    <DayListItem
      key={days.id}
      name={days.name}
      spots={days.spots}
      selected={days.name === props.value}
      setDay={() => props.onChange}
    />
  ));
  return <ul>{listItems}</ul>;
}

