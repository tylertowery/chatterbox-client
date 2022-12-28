// This object houses all the friend _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Friends = {
  // TODO: Define how you want to store your list of friends.

  _data: [],

  // TODO: Define methods which allow you to add, toggle,
  // and check the friendship status of other users.
  addFriend: function(friend) {
    // push friend into _data
    this._data.push(friend);
  },

  toggleStatus: function (friend) {
    if (!this._data.includes(friend)) {
      this.addFriend(friend);
    } else {
      var index = this._data.indexOf(friend);
      this._data.splice(index, 1);
    } MessagesView.render();
  }
};