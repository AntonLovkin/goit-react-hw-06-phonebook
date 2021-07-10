import { Component } from "react";
// import { v4 as uuidv4 } from "uuid";
import Filter from "./components/Filter";
import ContactsList from "./components/Contacts/Contacts-list";
import ContactForm from "./components/Contact-form/Contact-form";

class App extends Component {
  state = {};

  // addContact = (name, number) => {
  //   const contact = {
  //     id: uuidv4(),
  //     name,
  //     number,
  //   };

  //   const contactNames = this.state.contacts.map((contact) => contact.name);
  //   this.renderContacts(contactNames, contact.name, contact);
  // };

  // renderContacts = (contactsList, contactName, newContact) => {
  //   if (contactsList.includes(contactName)) {
  //     alert(`${contactName} is already in contacts`);
  //   } else {
  //     this.setState(({ contacts }) => ({
  //       contacts: [newContact, ...contacts],
  //     }));
  //   }
  // };

  // changeFilter = (evt) => {
  //   this.setState({ filter: evt.currentTarget.value });
  // };

  // reset = () => {
  //   this.setState({ name: "", number: "" });
  // };

  componentDidMount() {
    // console.log("componentDidMount");

    const contacts = localStorage.getItem("contacts");
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log("componentDidUpdate");

    if (this.state.contacts !== prevState.contacts) {
      // console.log("Refresh page");

      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm />

        <h2>Contacts</h2>
        <Filter />

        <ContactsList />
      </div>
    );
  }
}

export default App;

//render() {
// const { filter } = this.state;
// // console.log(filter);

// const normalizedFilter = this.state.filter.toLocaleLowerCase();
// // console.log(normalizedFilter);

// const filteredContacts = this.state.contacts.filter((contact) =>
//   contact.name.toLowerCase().includes(normalizedFilter)
// );}

// deleteContact = (contactId) => {
//   this.setState((prevState) => ({
//     contacts: prevState.contacts.filter(
//       (contact) => contact.id !== contactId
//     ),
//   }));
// };
