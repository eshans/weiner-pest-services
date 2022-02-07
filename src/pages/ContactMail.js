import React from "react";
import 'semantic-ui-css/semantic.min.css';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import { Form, Input, TextArea, Button, Radio, Grid, Header } from 'semantic-ui-react';

function ContactMail() {

  const SERVICE_ID = "service_k70qckl";
  const TEMPLATE_ID = "template_ret4yvv";
  const USER_ID = "user_UJIGh7FYjyL6iEDWvrH3H";

  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then((result) => {
        console.log(result.text);
        Swal.fire({
          icon: 'success',
          title: 'Message Sent Successfully'
        })
      }, (error) => {
        console.log(error.text);
        Swal.fire({
          icon: 'error',
          title: 'Ooops, something went wrong',
          text: error.text,
        })
      });
    e.target.reset()
  };


  return (
    <>
      <Grid>
        <Grid.Column textAlign="left">
          <Header> Please fill out the form below to contact us. Someone from Weiner Pest Services will get back to you shortly.</Header>
        </Grid.Column>
      </Grid>
      <div className="mail-form">
        <Form onSubmit={handleOnSubmit}>
          <Form.Field
            id='form-input-control-email'
            control={Input}
            label='Email'
            name='user_email'
            placeholder='Email…'
            required
            icon='mail'
            iconPosition='left'
          />
          <Form.Field
            id='form-input-control-last-name'
            control={Input}
            label='Name'
            name='user_name'
            placeholder='Name…'
            required
            icon='user circle'
            iconPosition='left'
          />
          <Form.Field
            id='form-input-control-customer'
            control={Radio}
            label='Are you a customer of Weiner Pest Services?'
            name='customer'
            placeholder='Are you a customer of Weiner Pest Services'
            required
            icon='user circle'
          />
          <Form.Field
            id='form-textarea-control-opinion'
            control={TextArea}
            label='Please describe your issue'
            name='user_message'
            placeholder='Message…'
            required
          />
          <Button id="submit" type='submit'>Submit</Button>
        </Form >
      </div >
    </>
  );
}

export default ContactMail