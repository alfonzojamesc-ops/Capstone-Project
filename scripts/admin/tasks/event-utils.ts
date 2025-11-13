import { db } from "@/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

let eventGuid = 0;
let todayStr = new Date().toISOString().replace(/T.*$/, "");
// sample events
export function useInitialEvents() {
  const [events, setEvents] = useState([]);

  const fetchEvents = async () => {
    try {
      const snapshot = await getDocs(collection(db, "tasks"));
      if (snapshot.empty) {
        console.log("No tasks found");
        setEvents([]);
        return;
      }

      const eventsData = snapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          id: doc.id,
          title: data.title,
          description: data.description,
          date_created: data.date_created,
          last_modified: data.last_modified,
          date_due: data.date_due,
          author: data.author,
          start: data.date_due,
          type: "event",
        };
      });
      setEvents(eventsData);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return { events, fetchEvents };
}

export function createEventId() {
  return String(eventGuid++);
}
