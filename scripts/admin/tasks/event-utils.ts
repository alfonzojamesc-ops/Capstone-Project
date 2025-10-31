let eventGuid = 0;
let todayStr = new Date().toISOString().replace(/T.*$/, "");
// sample events
export const INITIAL_EVENTS = [
  {
    id: createEventId(),
    title: "All-day event",
    start: todayStr,
  },
  {
    id: createEventId(),
    title: "Timed event",
    start: todayStr + "T12:00:00",
  },
  {
    id: createEventId(),
    title: "Complete Project Report",
    description: "Finalize and submit the project report for Q3.",
    date_created: todayStr,
    last_modified: todayStr,
    date_due: "2025-11-15",
    author: "Jane Doe",
    start: "2024-010-15",
  },
  {
    id: createEventId(),
    title: "Reservation for Project Alpha",
    description: "Reservation for the upcoming project meeting.",
    date_created: todayStr,
    last_modified: todayStr,
    date_due: "2025-11-12",
    author: "Admin",
    start: "2025-11-12",
  },
  {
    id: createEventId(),
    title: "Appointment with Bob C. Williams",
    description: "Discuss project milestones and deliverables.",
    date_created: todayStr,
    last_modified: todayStr,
    date_due: "2025-11-14",
    author: "John Smith",
    start: "2025-11-14T10:00:00",
  },
  {
    id: createEventId(),
    title: "Finalize Budget Proposal",
    description: "Complete the budget proposal for Q2.",
    date_created: todayStr,
    last_modified: todayStr,
    date_due: "2025-11-20",
    author: "Finance Team",
    start: "2025-11-20",
  },
  {
    id: createEventId(),
    title: "Reservation for Site Visit",
    description: "Reserve site visit for new office location.",
    date_created: todayStr,
    last_modified: todayStr,
    date_due: "2025-11-18",
    author: "Operations",
    start: "2025-11-18",
  },
  {
    id: createEventId(),
    title: "Meeting with Project Team",
    description: "Weekly sync-up with the project team.",
    date_created: todayStr,
    last_modified: todayStr,
    date_due: "2025-11-22",
    author: "Project Manager",
    start: "2025-11-22T09:00:00",
  },
];

export function createEventId() {
  return String(eventGuid++);
}
