import React from 'react';
import apartment from '../img/apartment.jpeg';
import warehouse from '../img/warehouse.jpg';

export default function Services() {
  return (
    <>
      <section className="image service">
        <img alt="apartment" src={apartment} />
      </section>

      <div className="description">
        <h2> Residential Services</h2>
          We provide all types of services for residential properties. This includes recurring maintenance for apartment buildings, houses, and more. No job is too big or small and we're always here to help. Please call us at _________ for a free estimate today.
      </div>
      <section className="image service">
        <img src={warehouse} alt="warehouse" />
      </section>
      <div className="description">
        <h2> Commercial Services </h2>
       We offer a host of services for your commercial properties, large and small. Our experts thoroughly inspect your premises for termites, bed bugs, carpenter ants, cockroaches, crickets, rodents, wasps, earwigs, and other pests. We throughly seal off points of entry and we educate on customers on how to prevent future infestations.</div>
    </>
  )
}
