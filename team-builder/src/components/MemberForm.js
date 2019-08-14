import React from 'react';
// import List from './List';

const MemberForm = props => {
  return (
    <form className="formContainer">
      <label htmlFor="title">Member: </label>
      <input type="text" name="title" placeholder="Member Name" />
      <label htmlFor="body">Note Body: </label>
      <textarea name="body" placeholder="Type your text here" />
      <button type="submit">Add Member</button>
    </form>
  );
};

export default MemberForm;
