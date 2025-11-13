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
        title,
        description: "New task description",
        date_created: new Date().toISOString(),
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
  const { events: initialEvents, fetchEvents, loading } = useInitialEvents();

  return (
    <div className="calendar">
      <Sidebar
        weekendsVisible={weekendsVisible}
        handleWeekendsToggle={handleWeekendsToggle}
        currentEvents={currentEvents}
      />
      <div className="calendar-main">
        {loading ? (
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

import { ConfirmModal } from "@/components/admin/tasks/confirm-modal";
import { deleteDoc } from "firebase/firestore";

export function EventDetailsModal({ event, onClose, onUpdate }) {
  if (!event) return null;

  const [isEditing, setIsEditing] = useState(false);
  const [status, setStatus] = useState("");
  const [showConfirm, setShowConfirm] = useState(false);
  const [formData, setFormData] = useState({
    title: event.title || "",
    description: event.description || "",
    author: event.author || "",
    date_due: event.date_due || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    if (!formData.title.trim()) {
      setStatus("Title cannot be empty");
      return;
    }

    try {
      setStatus("Saving...");
      const taskRef = doc(db, "tasks", event.id);
      await updateDoc(taskRef, {
        ...formData,
        last_modified: new Date().toISOString(),
      });

      if (onUpdate) onUpdate({ ...event, ...formData });
      setStatus("Task updated!");
      setTimeout(() => {
        setIsEditing(false);
        onClose();
      }, 700);
    } catch (error) {
      console.error("Error updating task:", error);
      setStatus("Failed to update task");
    }
  };

  const handleDelete = async () => {
    try {
      setStatus("Deleting...");
      const taskRef = doc(db, "tasks", event.id);
      await deleteDoc(taskRef);

      setStatus("Task deleted!");
      if (onUpdate) onUpdate();
      setTimeout(() => onClose(), 700);
    } catch (error) {
      console.error("Error deleting task:", error);
      setStatus("Failed to delete task");
    }
  };

  return (
    <>
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          {isEditing ? (
            <>
              <h3 className="edit-task-title">Edit Task</h3>

              <label className="form-group">
                <strong className="form-label">Title:</strong>
                <input
                  className="form-input"
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                />
              </label>

              <label className="form-group">
                <strong className="form-label">Description:</strong>
                <textarea
                  className="form-textarea"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                />
              </label>

              {/* <label className="form-group">
                <strong className="form-label">Author:</strong>
                <input
                  className="form-input"
                  type="text"
                  name="author"
                  value={formData.author}
                  onChange={handleChange}
                />
              </label> */}

              <label className="form-group">
                <strong className="form-label">Date Due:</strong>
                <input
                  className="form-input"
                  type="date"
                  name="date_due"
                  value={formData.date_due}
                  onChange={handleChange}
                />
              </label>

              <div className="modal-buttons">
                <button className="btn btn-save" onClick={handleSave}>
                  Save
                </button>
                <button
                  className="btn btn-cancel"
                  onClick={() => setIsEditing(false)}
                >
                  Cancel
                </button>
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
                <button
                  onClick={() => setIsEditing(true)}
                  className="edit-button"
                >
                  Edit
                </button>
                <button
                  onClick={() => setShowConfirm(true)}
                  className="delete-button"
                >
                  Delete
                </button>
                <button className="close-button" onClick={onClose}>
                  Close
                </button>
              </div>

              {status && <p className="status-msg">{status}</p>}
            </>
          )}
        </div>
      </div>

      {showConfirm && (
        <ConfirmModal
          title="Delete Task"
          message="Are you sure you want to permanently delete this task?"
          onConfirm={() => {
            setShowConfirm(false);
            handleDelete();
          }}
          onCancel={() => setShowConfirm(false)}
        />
      )}
    </>
  );
}
