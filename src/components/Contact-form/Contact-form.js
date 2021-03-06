import React, { Component } from "react";
import { connect } from "react-redux";
import contactsActions from "../../redux/contacts/contacts-actions";
import "../base.css";
import "../Contact-form/contact-form.css";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();

    const { name, number } = this.state;
    // console.log({ name }, { number });

    this.props.onSubmit(name, number);
    // console.log(name , number);
    this.reset();
  };

  reset = () => {
    this.setState({ name: "", number: "" });
  };

  render() {
    return (
      <form className="contacts-form" onSubmit={this.handleSubmit}>
        <label className="label">
          Name
          <input
            className="input"
            value={this.state.name}
            onChange={this.handleChange}
            placeholder="Name"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title=" "
            required
          />
        </label>

        <label className="label">
          Number
          <input
            className="input"
            value={this.state.number}
            onChange={this.handleChange}
            type="tel"
            name="number"
            placeholder="Number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </label>

        <button className="button add" type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (name, number) =>
    dispatch(contactsActions.addContact(name, number)),
});

export default connect(null, mapDispatchToProps)(ContactForm);
