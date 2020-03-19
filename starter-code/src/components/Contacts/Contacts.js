import React, { Component } from 'react';
import contacts from './contacts.json';

class Contacts extends Component {
  render() {
    return (
      <table>
        <li> {contacts.map(person => person.name)}</li>
      </table>
    );
  }
}

export default Contacts;
