import crypto from "crypto";

export default class User {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.friends = []; // Liste von userIds
    this.meetings = []; // Meetings die er erstellt hat
  }

  addFriend(friendId) {
    if (!this.friends.includes(friendId)) {
      this.friends.push(friendId);
    }
  }

  createMeeting(title, description, date, location, type = "private") {
    const newMeeting = {
      id: crypto.randomUUID(),
      title,
      description,
      date,
      location,
      type, // "private" oder "public"
      participants: [this.id], // Creator ist automatisch Teilnehmer
    };
    this.meetings.push(newMeeting);
    return newMeeting;
  }

  inviteToMeeting(meeting, friendId) {
    if (meeting.type === "private" && this.friends.includes(friendId)) {
      if (!meeting.participants.includes(friendId)) {
        meeting.participants.push(friendId);
      }
    }
  }

  joinMeeting(meeting) {
    if (meeting.type === "public" && !meeting.participants.includes(this.id)) {
      meeting.participants.push(this.id);
    }
  }
}
