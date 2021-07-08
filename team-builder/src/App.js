import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import './components/memberForm.css';

import MemberForm from './components/MemberForm';
// import List from './components/List';

function App() {
  const { member, setMember } = useState();

  return (
    <div className="App">
      <MemberForm />
      {/* <List memberList={member} /> */}
    </div>
  );
}

export default App;
