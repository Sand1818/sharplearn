import React, { useState } from "react";
import DatePicker from "react-datepicker";
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";
import styles from './Planner.module.css'
import NavigationBar from "../Navigation/NavigationBar";


function Planner() {
    const locales = {
        "en-ZA": require("date-fns/locale/en-ZA"),
    };
    const localizer = dateFnsLocalizer({
        format,
        parse,
        startOfWeek,
        getDay,
        locales,
    });

    const events = [
        {
            title: "Study Week",
            allDay: true,
            start: new Date(2024, 10, 18),
            end: new Date(2024, 10, 24),
        },
        {
            title: "Exam Period",
            start: new Date(2024, 10, 25),
            end: new Date(2024, 11, 6),
        },
        {
            title: "Holiday",
            start: new Date(2024, 11, 15),
            end: new Date(2025, 0, 5), 
        },
    ];

    const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
    const [allEvents, setAllEvents] = useState(events);

    function handleAddEvent() {

        for (let i = 0; i < allEvents.length; i++) {

            const date1 = new Date(allEvents[i].start);
            const date2 = new Date(newEvent.start);
            const date3 = new Date(allEvents[i].end);
            const date4 = new Date(newEvent.end);

            console.log(date1 <= date2);
            console.log(date2 <= date3);
            console.log(date1 <= date4);
            console.log(date4 <= date3);

            if (
                ((date1 <= date2) && (date2 <= date3)) || ((date1 <= date4) &&
                    (date4 <= date3))
            ) {
                alert("CLASH");
                break;
            }

        }

        setAllEvents([...allEvents, newEvent]);
    }

    return (
        <>
        <NavigationBar />
        <div className={styles.Planner}>
            <h1>Schedule</h1>
            <div>
                <input type="text" placeholder="Add New Event" style={{ width: "20%", marginRight: "10px" }} 
                    value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} />
                <DatePicker placeholderText="Start Date" style={{ marginRight: "10px" }} 
                    selected={newEvent.start} onChange={(start) => setNewEvent({ ...newEvent, start })} />
                <DatePicker placeholderText="End Date" selected={newEvent.end} onChange={(end) => 
                    setNewEvent({ ...newEvent, end })} />
                <button stlye={{ marginTop: "5px" }} onClick={handleAddEvent}>
                    Add to Schedule
                </button>
            </div>
            <Calendar localizer={localizer} events={allEvents} startAccessor="start" endAccessor="end" style={{ height: 500, margin: "50px" }} />
        </div>
        </>
    );
}

export default Planner;
