import house from '../img/house.jpg';
import { ContactFormWithHeader } from '../components/ContactForm'

export default function ResidentialServices() {
  return (
    <>
      <section className="image service">
        <img alt="apartment" src={house} />
      </section>
      <div className="description">
        <h2> Residential Services</h2>
        <p>We provide all types of services for residential properties. This includes recurring maintenance for apartment buildings, houses, and more. No job is too big or small and we're always here to help. Please call us at 973-375-8690 for a free estimate today.</p>
        <p> When you contact us, one of our employees will make an appointment to come see your property and then determine what the problem is. We'll then offer an estimate on the services. Since we work with many different types of properties, we can tailor a service that cateres to your budget and problem.
        </p>

      </div>
      <div className="form-content">
        <ContactFormWithHeader />
      </div>

    </>
  )
}
