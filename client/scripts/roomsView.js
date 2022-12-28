// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),
  $form: $('form'),

  initialize: function() {
    $('#rooms').on('click', '.add', RoomsView.handleClick);
    this.render();
    this.$select.change(this.handleChange);
  },

  render: function() {
    for (let i = 0; i < Rooms._data.length; i++) {
      this.renderRoom(Rooms._data[i]);
    }
  },

  renderRoom: function(roomname) {
    // TODO: Render out a single room.
    var $room = $('<option>' + roomname + '</option>');
    $room.appendTo(this.$select);
  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.
    console.log(3);
    MessagesView.render($('#rooms select').val().slice(1, $('#rooms select').length - 2));
  },

  handleClick: function(event) {
    let text = $('#message').val();
    Rooms.add(text);
    // TODO: Handle the user clicking the "Add Room" button.
  }

};
