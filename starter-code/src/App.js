import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';

const contactList = contacts;

const contactList1 = [...contactList];

class App extends Component {
  render() {
    return (
      <div className="App">
        <table>
          <div>
            <strong>
              <h1>Picture</h1>
              {contactList1.map(photo => photo.pictureUrl).splice(0, 5)}
            </strong>
          </div>
          <div>
            {' '}
            <strong>
              {' '}
              <h1>Name</h1>
              {contactList1.map(person => person.name).splice(0, 5)}
            </strong>
          </div>
          <div>
            <h1>Popularity</h1>
            <strong>
              {contactList1.map(popular => popular.popularity).splice(0, 5)}
            </strong>
          </div>
        </table>
      </div>
    );
  }
}

export default App;
