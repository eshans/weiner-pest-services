import React from 'react'
import nj from '../img/nj.png';
import { ContactFormWithHeader } from '../components/ContactForm'


export default function Areas() {
  return (
    <>
      <section className="image">
        <img alt="new jersey" src={nj} />
      </section>

      <div className="description">
        <h2>We serve Essex, Union, Morris, and more counties.</h2>
        <p>
          Headquartered in Irvington, NJ, Weiner Pest Services attends to the needs of properties in the northern New Jersey area including Essex, Union, Morris, Bergen counties and more.</p>

        <p>We are dedicated to your health, comfort, and peace of mind, as well as the protection of your property. And safety is at the center of everything we do. The community, our clients, and our client’s children, pets, homes, and the environment are of paramount important to us.</p>

        <p> If you're in the Northern New Jersey area and you need to protect your property from pests and rodents, or if you are having a problem that you need assistance with, please don't hesistate to contact us.
        </p>
        <div className="form-content">
          <ContactFormWithHeader />
        </div>
      </div>


    </>
  )
}