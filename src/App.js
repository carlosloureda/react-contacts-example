import React, { Component } from 'react';
import ListContacts from './ListContacts';

class App extends Component {

  /**
   * We could use the object way to call setState, but in this case
   * the new state depends on the old state so we need to use the
   * fucntional mwthod of setState.
  */

  state = {
      contacts: [
          {
              "id": "ryan",
              "name": "Ryan Florence",
              "email": "ryan@reacttraining.com",
              "avatarURL": "http://localhost:5001/ryan.jpg"
          },
          {
              "id": "michael",
              "name": "Michael Jackson",
              "email": "michael@reacttraining.com",
              "avatarURL": "http://localhost:5001/michael.jpg"
          },
          {
              "id": "tyler",
              "name": "Tyler McGinnis",
              "email": "tyler@reacttraining.com",
              "avatarURL": "http://localhost:5001/tyler.jpg"
          }
      ]
  }

  render() {
    return (
      <div>
        <ListContacts 
          contacts={this.state.contacts}
        />
      </div>
    )
  }    
}

export default App;