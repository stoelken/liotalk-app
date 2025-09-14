import { v4 as uuidv4 } from "uuid";

export default class User {
  constructor(name, email) {
    this.id = uuidv4();
    this.name = name;
    this.email = email;
    this.friends = []; // List of friends
    this.meetings = []; // List of meetings created by the user
  }

  addFriend(friendId) {
  const friend = getUserById(friendId); // Friend immer abrufen

  if (this.friends.includes(friendId)) {
    throw new Error(`${friend.name} is already a friend.`);
  }

  this.friends.push(friendId);
}

  removeFriend(friendId) {
    this.friends = this.friends.filter((id) => id !== friendId);
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
