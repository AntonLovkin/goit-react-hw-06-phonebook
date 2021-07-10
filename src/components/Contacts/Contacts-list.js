import React from "react";
import { connect } from "react-redux";
import contactsActions from "../../redux/contacts/contacts-actions";
// import './TodoList.css';

const ContactsList = ({ filteredContacts, onDeleteContact }) => (
  <ul>
    {filteredContacts.map(({ name, number, id }) => (
      <li key={id} className="TodoList__item">
        <p>
          {name} : {number}
        </p>
        <button onClick={() => onDeleteContact(id)}>Удалить</button>
      </li>
    ))}
  </ul>
);

const getFilteredContacts = (allContacts, filter) => {
  // const { filter, contacts } = this.state;

  const normalizedFilter = filter.toLowerCase();

  return allContacts.filter((contact) =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  filteredContacts: getFilteredContacts(items, filter),
});

const mapDispatchToProps = (dispatch) => ({
  onDeleteContact: (id) => dispatch(contactsActions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);

// const mapStateToProps = state => {
//   const { filter, contacts } = state.phonebook;
//   // const normalizedFilter = filter.toLowerCase();

//   const filteredContacts = getFilteredContacts(contacts, filter) // getFilteredContacts=contacts.filter((contact) => contact.name.toLowerCase().includes(normalizedFilter));

//  return {filteredContacts: filteredContacts}
// }
