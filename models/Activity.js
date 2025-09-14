import crypto from "crypto";

export default class Activity {
  constructor(title, description, date, location, type = "private", creatorId) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.description = description;
    this.date = date;
    this.location = location;
    this.type = type; // "private" oder "public"
    this.participants = [creatorId];
  }

  invite(userId) {
    if (this.type === "private" && !this.participants.includes(userId)) {
      this.participants.push(userId);
    }
  }

  join(userId) {
    if (this.type === "public" && !this.participants.includes(userId)) {
      this.participants.push(userId);
    }
  }
}
