import React, { useState } from 'react';
import axios from 'axios'; // You may need to install axios via npm or yarn

function Signup() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    country: '',
    gender: '',
    signUpForEmails: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password, firstName, lastName, dateOfBirth, country, gender } = formData;

    if (email && password && firstName && lastName && dateOfBirth && country && gender) {
      axios.post('https://your-api-endpoint.com/signup', formData)
        .then(response => {
          console.log('Signup successful!', response.data);
          // Handle success - maybe redirect or show a success message
        })
        .catch(error => {
          console.error('Signup failed:', error);
          // Handle error - display an error message or retry
        });
    } else {
      alert('Please fill in all required fields.');
    }
  };

  return (
    <div>
      {/* Your form */}
      <form onSubmit={handleSubmit}>
        {/* ...other input fields */}
        <input type="email" placeholder="Email Address" name="email" value={formData.email} onChange={handleChange} /><br /><br />
        {/* Other input fields */}
        <button type="submit">Join Us</button>
      </form>
    </div>
  );
}

export default Signup;
