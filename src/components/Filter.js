import React from "react";
import { connect } from "react-redux";
import contactsActions from "../redux/contacts/contacts-actions";

const Filter = ({ value, onChange }) => (
  <label>
    Find contacts by name
    <input type="text" value={value} onChange={onChange}></input>
  </label>
);

const mapStateToProps = (state) => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (evt) => dispatch(contactsActions.changeFilter(evt.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
