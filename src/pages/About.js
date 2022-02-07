import React from 'react';
import truck from '../img/truck.jpg';
import person from '../img/wpsjustin.jpg';

export default function About() {
  return (
    <>
      <section className="image">
        <img alt="logo" src={truck} />
      </section>

      <div className="description">
        <h2>Protecting your children, your pets, and the environment</h2>
        <p>
          Weiner Pest Services has been in business for over 65 years and is family owned and operated. We carry Public Liability Insurance, we're a member of the New Jersey Pest Management Association, National Pest Management Association, and we are duly registered by the state of New Jersey, Department Of Environmental Protection #50955A.</p>

        <p>We are dedicated to your health, comfort, and peace of mind, as well as the protection of your property. And safety is at the center of everything we do. The community, our clients, and our client’s children, pets, homes, and the environment are of paramount important to us.</p>

        <p> We pride ourselves in staying abreast with the latest technology as there's been tremendous changes in our industry over the many years we have been in business. Over that period of time, we have been utilizing an Integrated Pest Management Program. The goal of the IPM is to deliver effective pest control while at the same time reducing the amount of materials used. Our technicians have been using formulations and treatment techniques which minimize the amount of materials used and the potential of exposure to people and the enviroment. Please don't hesitate to call us with any questions you might have.
        </p>
      </div>
      <div className="description">
        <h2>Our Mission</h2>
        <p>
          At Weiner Pest Services, no job is too small. We believe that a close relationship with our customers ensures that trust, confidence, and reliablity are all part of our ethos. We understand that seeing pests or rodents can be unnervving so we aim to make their removal quick, safe, and easy.
        </p>
        <section class="image">
          <img className="main-img" alt="worker" src={person} />
        </section>
      </div>
    </>
  )
}


