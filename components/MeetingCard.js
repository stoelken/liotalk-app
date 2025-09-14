"use client";
import styles from "./MeetingCard.module.css";

export default function MeetingCard({ meeting, onJoin }) {
  const date = new Date(meeting.date);

  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{meeting.title}</h2>
      <p className={styles.description}>{meeting.description}</p>
      <p className={styles.info}>
        📍 {meeting.location} | 🕒 {date.toLocaleString()}
      </p>
      <p className={styles.participants}>
        👥 Teilnehmer: {meeting.participants.length}
      </p>
      {meeting.type === "public" && (
        <button
          className={styles.joinBtn}
          onClick={() => onJoin(meeting.id)}
        >
          Beitreten
        </button>
      )}
    </div>
  );
}
