"use client";
import { useState } from "react";
import MeetingCard from "@/components/MeetingCard";
import styles from "@/styles/Home.module.css";

// Beispiel-Daten
const initialMeetings = [
  {
    id: "m1",
    title: "Pizzaabend",
    description: "Gemeinsam Pizza essen 🍕",
    date: "2025-09-13T18:00:00.000Z",
    location: "Berlin Mitte",
    type: "public",
    participants: ["u1"],
  },
  {
    id: "m2",
    title: "Joggen im Park",
    description: "Runde joggen gehen 🏃",
    date: new Date(Date.now() + 3600000).toISOString(),
    location: "Hamburg Stadtpark",
    type: "private",
    participants: ["u2"],
  },
];

export default function HomePage() {
  const [meetings, setMeetings] = useState(initialMeetings);

  function handleJoin(meetingId) {
    setMeetings((prev) =>
      prev.map((m) =>
        m.id === meetingId
          ? { ...m, participants: [...m.participants, "me"] }
          : m
      )
    );
  }

  return (
    <main className={styles.main}>
      <h1 className={styles.heading}>📅 Anstehende Meetings</h1>
      <div className={styles.list}>
        {meetings.map((meeting) => (
          <MeetingCard
            key={meeting.id}
            meeting={meeting}
            onJoin={handleJoin}
          />
        ))}
      </div>
    </main>
  );
}
