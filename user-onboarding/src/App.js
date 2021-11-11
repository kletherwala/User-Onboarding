import './App.css';
import React, { useState } from 'react';
import axios from 'axios';
import * as yup from 'yup';
import schema from './validation/formSchema';

import Form from './Components/Form';

const initialFormValues = {
  username: '',
  password: '',
  email: '',
  tos: false
}

const initialFormErrors = {
  username: '',
  email: '',
  password: '',
  tos: false
}

function App() {
  const [users, setUsers] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);

  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: '' }))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }

  const handleChange = (name, value) => {
    validate(name, value);
    setFormValues({...formValues, [name]: value });
  }

  const handleSubmit = () => {
    axios.post('https://regres/in/api/users', formValues)
    .then(res => {
      setUsers([ res.data, ...users ]);
    })
    .catch(err => console.error(err))
 }
  
  return (
    <div className="App">
      <h1>Hello, world!</h1>
      <Form 
      values={formValues} 
      change={handleChange} 
      submit={handleSubmit} 
      errors={formErrors}
      />
      {users.map(user => (
        <div key={user.id}>
          <p>{user.createdAt}</p>
          <p>{user.email}</p>
          </div>
      ))}
    </div>
  );
}

export default App;
