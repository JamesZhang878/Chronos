// "use client";

import React, { useEffect } from "react";

import { Calendar } from "@/components/ui/calendar";

const CalendarDemo = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  useEffect(() => {
    console.log("DATE: " + date);
  }, [date]);

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border"
    />
  );
};

export default CalendarDemo;
