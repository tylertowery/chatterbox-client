// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.


var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    this.render();
    $('#chats').on('click', '.username', function (event) {
      console.log(event.currentTarget.innerText);
      Friends.toggleStatus(event.currentTarget.innerText.substr(1));
    });
  },

  render: function(roomname) {
    this.$chats.empty();
    Parse.readAll((data) => {
      for (let i = 0; i < data.length; i++) {
        if (roomname === undefined) {
          this.renderMessage(data[i]);
        } else {
          if (data[i].roomname === roomname) {
            this.renderMessage(data[i]);
          }
        }
      }
    });
  },

  renderMessage: function(message) {
    // TODO: Render a single message.\
    // console.log(message);
    var $message = $('<div class="message"></div>');
    if (message.text === null || message.text.indexOf('<') > 0 || message.text.indexOf('>') > 0) {
      // console.log(message);
      message.text = 'rat';
    }
    if (Friends._data.includes(message.username)) {
      $('<p class="username friend">@' + message.username + '</p>').appendTo($message);
      console.log('added a friends message');
    } else {
      $('<p class="username">@' + message.username + '</p>').appendTo($message);
    }
    $('<p class="github_handle">' + message.github_handle + '</p>').appendTo($message);
    $('<div class="text">' + message.text + '</div>').appendTo($message);
    $('<div class="roomname">' + message.roomname + '</div>').appendTo($message);
    $message.appendTo(this.$chats);
    if (!!message.roomname) {
      Rooms.add(message.roomname);
    }
  },

  handleClick: function(event) {
    console.log($(event.currentTarget));
  }

};