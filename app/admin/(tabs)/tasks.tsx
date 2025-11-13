import "@/constants/tasks.css";
import { db } from "@/firebaseConfig";
import {
  createEventId,
  useInitialEvents,
} from "@/scripts/admin/tasks/event-utils";
import { formatDate } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
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
        type: "event",
        title,
        description: "New task description",
        date_created: new Date().toISOString(),
        last_modified: new Date().toISOString(),
        date_due: selectInfo.startStr,
        author: "User",
        start: selectInfo.startStr,
      };
      calendarApi.addEvent({ ...newEvent, id: createEventId() });

      addDoc(collection(db, "tasks"), newEvent);
    }
  }

  function handleEventClick(clickInfo) {
    const event = clickInfo.event;
    setSelectedEvent({
      id: event.id,
      title: event.title,
      start: event.start,
      end: event.end,
      ...event.extendedProps,
    });
    setIsModalOpen(true);
  }

  function handleEvents(events) {
    setCurrentEvents(events);
  }

  function closeModal() {
    setIsModalOpen(false);
    setSelectedEvent(null);
    fetchEvents();
  }
  const { events: initialEvents, fetchEvents } = useInitialEvents();

  return (
    <div className="calendar">
      <Sidebar
        weekendsVisible={weekendsVisible}
        handleWeekendsToggle={handleWeekendsToggle}
        currentEvents={currentEvents}
      />
      <div className="calendar-main">
        {initialEvents.length === 0 ? (
          <p>Loading Events...</p>
        ) : (
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
            events={initialEvents}
            select={handleDateSelect}
            eventContent={renderEventContent}
            eventClick={handleEventClick}
            eventsSet={handleEvents}
          />
        )}
      </div>

      {isModalOpen && (
        <EventDetailsModal
          event={selectedEvent}
          onClose={closeModal}
          onUpdate={fetchEvents}
        />
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

import { deleteDoc } from "firebase/firestore";

export function EventDetailsModal({
  event,
  onClose,
  onUpdate,
}: {
  event: any;
  onClose: () => void;
  onUpdate?: (updatedEvent?: any) => void;
}) {
  if (!event) return null;

  const [isEditing, setIsEditing] = useState(false);
  const [status, setStatus] = useState("");
  const [formData, setFormData] = useState({
    title: event.title || "",
    description: event.description || "",
    author: event.author || "",
    date_due: event.date_due || "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  /** ✅ SAVE CHANGES **/
  const handleSave = async () => {
    if (!formData.title.trim()) {
      setStatus("⚠️ Title cannot be empty");
      return;
    }
    try {
      setStatus("Saving...");
      const taskRef = doc(db, "tasks", event.id);
      await updateDoc(taskRef, {
        ...formData,
        last_modified: new Date().toISOString(),
      });

      if (onUpdate) {
        onUpdate({
          ...event,
          ...formData,
          last_modified: new Date().toISOString(),
        });
      }

      setStatus("✅ Task updated!");
      setTimeout(() => {
        setIsEditing(false);
        onClose();
      }, 800);
    } catch (error) {
      console.error("Error updating task:", error);
      setStatus("❌ Failed to update task");
    }
  };

  /** 🗑️ DELETE TASK **/
  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this task?")) return;

    try {
      setStatus("Deleting...");
      const taskRef = doc(db, "tasks", event.id);
      await deleteDoc(taskRef);

      setStatus("✅ Task deleted!");
      if (onUpdate) onUpdate(); // trigger a refresh
      setTimeout(() => onClose(), 500);
    } catch (error) {
      console.error("Error deleting task:", error);
      setStatus("❌ Failed to delete task");
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {isEditing ? (
          <>
            <h3>Edit Task</h3>

            <label>
              <strong>Title:</strong>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
              />
            </label>

            <label>
              <strong>Description:</strong>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
              />
            </label>

            <label>
              <strong>Author:</strong>
              <input
                type="text"
                name="author"
                value={formData.author}
                onChange={handleChange}
              />
            </label>

            <label>
              <strong>Date Due:</strong>
              <input
                type="date"
                name="date_due"
                value={formData.date_due}
                onChange={handleChange}
              />
            </label>

            <div className="modal-buttons">
              <button onClick={handleSave}>💾 Save</button>
              <button onClick={() => setIsEditing(false)}>Cancel</button>
            </div>

            {status && <p className="status-msg">{status}</p>}
          </>
        ) : (
          <>
            <h3>Task Details</h3>
            <p>
              <strong>Title:</strong> {event.title}
            </p>
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
              <strong>Date Due:</strong> {event.date_due}
            </p>

            <div className="modal-buttons">
              <button onClick={() => setIsEditing(true)}>✏️ Edit</button>
              <button onClick={handleDelete}>🗑️ Delete</button>
              <button className="close-button" onClick={onClose}>
                Close
              </button>
            </div>

            {status && <p className="status-msg">{status}</p>}
          </>
        )}
      </div>
    </div>
  );
}
