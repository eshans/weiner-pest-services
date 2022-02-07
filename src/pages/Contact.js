import React, { useState, useReducer } from "react";
const formReducer = (state, event) => {
  {/*Not being used*/ }

  if (event.reset) {
    return {
      name: '',
      service_select: 0,
      current_customer: 0,
    }
  }
  return {
    ...state,
    [event.name]: event.value
  }
}

function Contact() {
  const [formData, setFormData] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = event => {
    event.preventDefault()
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setFormData({
        reset: true
      })
    }, 3000)
  }

  const handleChange = event => {
    const isCheckbox = event.target.type === 'checkbox';
    setFormData({
      name: event.target.name,
      value: isCheckbox ? event.target.checked : event.target.value
    });
  }

  return (
    <div className="contact-wrapper">
      <h2 class="header">Contact us below and we'll get right back to you</h2>
      {submitting &&
        <div>
          You are submitting the following:
         <ul>
            {Object.entries(formData).map(([name, value]) => (
              <li key={name}><strong>{name}</strong>:{value.toString()}</li>
            ))}
          </ul>
        </div>
      }

      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>
            <p>Name</p>
            <input type="text" name="name" onChange={handleChange} value={formData.name || ''} />
          </label>
        </fieldset>
        <fieldset>
          <label>
            <p> Select your need from the dropdown</p>
            <select name="service_select" onChange={handleChange} value={formData.service_select || ''}>

              <option value="">--Please choose an option--</option>
              <option value="service_request">New Service Request</option>
              <option value="general_question">General Questions</option>
            </select>
          </label>
          <label>
            <p>Are you a current customer of Weiner Pest Services?</p>
            <select name="current_customer" onChange={handleChange} value={formData.current_customer || ''} >
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </label>
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </div >
  )
}

export default Contact