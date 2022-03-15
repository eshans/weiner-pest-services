import warehouse from '../img/warehouse.jpg';
import { ContactFormWithHeader } from '../components/ContactForm'

export default function CommercialServices() {
  return (
    <>
      <section className="image service">
        <img src={warehouse} alt="warehouse" />
      </section>
      <div className="description">
        <h2> Commercial Services </h2>
        <p>We offer a host of services for your commercial properties, large and small. Our experts thoroughly inspect your premises for termites, bed bugs, carpenter ants, cockroaches, crickets, rodents, wasps,  and other pests. We throughly seal off points of entry and we educate on customers on how to prevent future infestations.</p>
        <p>
          The types of properties we service are varied but they include but not limited to food and beverage processing, healthcare, hospitality, Multifamily, Office Property and Management, Retail, Education, and other forms of Manufacturing. We're happy to come check out your problem and offer a fair price for dependable and reliable service.
        </p>
        <p> Contact us on the form below for any questions about our services.</p>
      </div>
      <div className="form-content">
        <ContactFormWithHeader />
      </div>
    </>
  )
}
