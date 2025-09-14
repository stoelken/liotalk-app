const users = [];

export default class UserService {
  static getUserById(id) {
    return users.find(user => user.id === id) || null;
  }

  static getAllUsers() {
    return users;
  }

  // Beispiel: User hinzufügen
  static addUser(user) {
    users.push(user);
    return user;
  }

  // Beispiel: User löschen
  static removeUser(id) {
    const index = users.findIndex(user => user.id === id);
    if (index !== -1) {
      return users.splice(index, 1)[0];
    }
    return null;
  }
}