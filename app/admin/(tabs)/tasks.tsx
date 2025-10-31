import "@/constants/tasks.css";
import {
  INITIAL_EVENTS,
  createEventId,
} from "@/scripts/admin/tasks/event-utils";
import { formatDate } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import React, { useState } from "react";

export default function TasksPage() {
  const [weekendsVisible, setWeekendsVisible] = useState(true);
  const [currentEvents, setCurrentEvents] = useState([]);

  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleWeekendsToggle() {
    setWeekendsVisible(!weekendsVisible);
  }

  function handleDateSelect(selectInfo) {
    let title = prompt("Please enter a new title for your task");
    let calendarApi = selectInfo.view.calendar;

    calendarApi.unselect();

    if (title) {
      const newEvent = {
        id: createEventId(),
        title,
        description: "New task description",
        date_created: new Date().toISOString(),
        last_modified: new Date().toISOString(),
        date_due: selectInfo.startStr,
        author: "User",
        start: selectInfo.startStr,
      };
      calendarApi.addEvent(newEvent);
    }
  }

  function handleEventClick(clickInfo) {
    setSelectedEvent({ ...clickInfo.event.extendedProps });
    setIsModalOpen(true);
  }

  function handleEvents(events) {
    setCurrentEvents(events);
  }

  function closeModal() {
    setIsModalOpen(false);
    setSelectedEvent(null);
  }

  return (
    <div className="calendar">
      <Sidebar
        weekendsVisible={weekendsVisible}
        handleWeekendsToggle={handleWeekendsToggle}
        currentEvents={currentEvents}
      />
      <div className="calendar-main">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          initialView="dayGridMonth"
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          weekends={weekendsVisible}
          initialEvents={INITIAL_EVENTS}
          select={handleDateSelect}
          eventContent={renderEventContent}
          eventClick={handleEventClick}
          eventsSet={handleEvents}
        />
      </div>

      {isModalOpen && (
        <EventDetailsModal event={selectedEvent} onClose={closeModal} />
      )}
    </div>
  );
}

function renderEventContent(eventInfo) {
  return (
    <>
      <b className="event-time">{eventInfo.timeText}</b>
      <i className="event-title">{eventInfo.event.title}</i>
    </>
  );
}

function Sidebar({ weekendsVisible, handleWeekendsToggle, currentEvents }) {
  return (
    <div className="calendar-sidebar">
      <div className="calendar-sidebar-section">
        <h2>Instructions</h2>
        <ul>
          <li>Select dates and you will be prompted to create a new task</li>
          <li>Drag, drop, and resize tasks</li>
          <li>Click a task to view details</li>
        </ul>
      </div>
      <div className="calendar-sidebar-section">
        {/* <label>
          <input
            type="checkbox"
            checked={weekendsVisible}
            onChange={handleWeekendsToggle}
          /> toggle weekends
        </label> */}
      </div>
      <div className="calendar-sidebar-section">
        <h2>All Tasks ({currentEvents.length})</h2>
        <ul>
          {currentEvents.map((event) => (
            <SidebarEvent key={event.id} event={event} />
          ))}
        </ul>
      </div>
    </div>
  );
}

function SidebarEvent({ event }) {
  return (
    <li>
      <b>
        {formatDate(event.start, {
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
      </b>
      <i>{event.title}</i>
    </li>
  );
}

function EventDetailsModal({ event, onClose }) {
  if (!event) return null;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2 className="modal-title">{event.title}</h2>
        <p>
          <strong>Description:</strong> {event.description}
        </p>
        <p>
          <strong>Author:</strong> {event.author}
        </p>
        <p>
          <strong>Date Created:</strong> {event.date_created}
        </p>
        <p>
          <strong>Last Modified:</strong> {event.last_modified}
        </p>
        <p>
          <strong>Date Due:</strong> {event.date_due}
        </p>
        <p>
          <strong>Start:</strong> {event.start}
        </p>
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}
