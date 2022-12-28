// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {

  // TODO: Define how you want to store the list of rooms
  _data: [],

  // TODO: Define methods which allow you to add rooms, update the list,
  // mark a room as selected, etc.
  select: function() {

  },

  add: function(roomname) {
    if (!this._data.includes(JSON.stringify(roomname))) {
      this._data.push(JSON.stringify(roomname));
      RoomsView.renderRoom(JSON.stringify(roomname));
    }
  }
};