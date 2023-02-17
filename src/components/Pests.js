import React from 'react'
import Ant from '../img/ant.jpeg';
import Bee from '../img/bee.jpeg';
import Bedbug from '../img/bedbug.jpeg';
import Wasp from '../img/wasp.jpeg';
import Mouse from '../img/mouse.jpeg';
import Stinkbug from '../img/stinkbug.jpeg';
import Roach from '../img/roach.jpg';
import Rat from '../img/rat.png';
import Termite from '../img/termite-swarmer.jpeg';
import { ContactForm } from './ContactForm'


/* this is the master component which is responsible for all of the pest pages on the site*/
export function Ants() {
  return (
    <>
      <div className="content">
        <div className="description">
          <section className="image">
            <img className="pest" alt="logo" src={Ant} align="left" />
          </section>
          <h2> Ants</h2>
          <p>Getting rid of ants can almost seem like a losing battle. This common pest is known to find the smallest cracks and crevices to colonize. Just one small bit of a sweet food or greasy substances are both enough to attract ants as well as the presence of water. Because ants leave a chemical trail as they journey into a home, an entire colony can form. They are are persistent and live long lives if they have enough food and also breed and reproduce easily. </p>

          <p>Some ants may seem harmless and only want some of the leftover crumbs that fall to the floor Some species of ants, however, may actually attack the structure of your home and use it for food and build colonies within it, </p>

          <p> Ants come in different colors, shapes, and sizes. Each species requires a different approach. If you’re concerned about the number of ants you’ve seen coming into your home, then make today be the day that you give us a call. We can discuss inspection options, removal possibilities, all while keeping your budget in mind. </p>
        </div>
        <div className="form-content">
        <ContactForm/>
      </div>
    </div> 
    </>
  )
}

export function Bees() {
  return (
    <>
      <div className="content">
        <div className="description">
          <section className="image">
            <img className="pest" alt="logo" src={Bee} align="left" />
          </section>
          <h2> Carpenter Bees</h2>
          <p>Carpenter bee prevention and treatment begins with a thorough inspection by Weiner Pest Services to determine if there is a recurring problem. The most effective control method is to apply an insecticide dust to the bee's drill holes and leave the holes open for a few days so returning bees will contact the insecticide.</p>

          <p>Once the bees die, the drill holes can be sealed and repainted. Sometimes it may also be useful to apply an aerosol spray to control free flying carpenter bees. While only a temporarily effective method, applying a liquid insecticide to the wood surface is a less time consuming process than applying dust to drill holes. A control technique that does not use insecticides is to paint any bare, exposed wood surfaces that are being attacked with exterior paint or a polyurethane finish.</p>
        </div>
        <div className="form-content">
        <ContactForm/>
      </div>
    </div>
    
    </>
  )
}

export function Bedbugs() {
  return (
    <>
      <div className="content">
        <div className="description">
          <section className="image">
            <img className="pest" alt="logo" src={Bedbug} align="left" />
          </section>
          <div className="description">
            <h2> Bedbugs</h2>
            <p>Weiner Pest Services specializes in Bed Bug control. We have years of experience of tackling problems of all shapres and sizes and in all types of residential properties, from small apartments to multi-room houses.</p>
            <p>Bed bugs prefer to hide close to where they feed, like beds, but have been documented to travel 100-150 feet to obtain a blood meal, so it is unlikely to diminish an infestation by leaving an area unoccupied. </p>
            <p>Athough they do not have nests, bed bugs gather in areas that can be marked by dark spotting and staining of dried excrement. Eggs, shells, brownish molted skins of nymphs and the bugs themselves will be present. If you suspect that you have bed bugs in your home, give us a call immediately, our bed bug exterminator will come and determine the best course of action. </p>
          </div>
        </div>
        <div className="form-content">
        <ContactForm/>
      </div>
     </div>
    </>
  )
}

export function Flies() {
  return (
    <>
      <div className="content">
        <div className="description">
          <section className="image">
            <img className="pest" alt="logo" src={Bee} align="left" />
          </section>
          <h2> Flies</h2>
          <p> Non-biting flies, such as houseflies, are not only nuisance pests, but they are also responsible for transmitting diseases and contaminating food. For instance, flies are capable of contaminating food and transferring more than 100 pathogens, including malaria, salmonella and tuberculosis. Food contamination is one of the main reasons that fly pest control is so important.</p>
          <p>
            Most of the time, flies will hatch outside and then find their way into a home via openings like worn down weather stripping, damaged mesh screens, or if doors are left open. Flies prefer to be in warmer environments and are attracted to warm air currents coming from buildings on cold days. Once inside, female houseflies are capable of laying between 75 to 150 eggs at a time, typically depositing them in compost piles, garbage cans, and decaying organic matter. When compressed together, all of the eggs are only about the size of a pea, making them very hard to spot. Additionally, fruit flies in particular can be brought into a home by latching onto food and fruit brought in from outside, as they are attracted to food waste and overripe produce.
          </p>
        </div>
       <div className="form-content">
        <ContactForm/>
      </div>
    </div>     
    </>
  )
}

export function Mice() {
  return (
    <>
      <div className="content">
        <div className="description">
          <section className="image">
            <img className="pest" alt="logo" src={Mouse} align="left" />
          </section>
          <div className="description">
            <h2> Mice</h2>
            <p>House mice are typically dusty gray with cream-colored bellies. Fur color varies from light brown to dark gray depending on the mouse’s location. House mice have four legs and a round shaped body. Their muzzles are pointed, and their ears are large with some hair. House mice range from 2.5 to 3.75 inches long. Their tails are usually 2.75 to 4 inches long. </p>

            <p>To keep mice and other rodents out, make sure all holes larger than a dime and gaps wider than a pencil are sealed with silicone-based caulk, steel wool, or other construction material. Keep areas clear and store boxes off the floor, as mice can hide in clutter. Store food in sealed glass or metal containers. Leave surfaces clear of crumbs and food morsels, which may attract them. </p>
          </div>
        </div>
        <div className="form-content">
          <ContactForm/>
        </div>
      </div>
    </>
  )
}

export function Roaches() {
  return (
    <>
      <div className="content">
        <div className="description">
          <section className="image">
            <img className="pest" alt="logo" src={Roach} align="left" />
          </section>
          <div className="description">
            <h2> Roaches</h2>
            <p> Are among the best-known pest species are the American cockroach, which is about 30 mm (1.2 in) long, the German cockroach, which is about 15 mm (0.59 in) long, the Asian cockroach, which is also about 15 mm (0.59 in) in length, and the Oriental cockroach, which is about 25 mm (0.98 in). Cockroaches have a broad, flattened body and a relatively small head. There are over 4,000 species of cockroaches in the world.</p>
            <p> Cockroaches live in a wide range of environments around the world. Pest species of cockroaches adapt readily to a variety of environments, but prefer warm conditions found within buildings. Cockroaches leave chemical trails in their feces as well as emitting airborne pheromones for swarming and mating. Other cockroaches will follow these trails to discover sources of food and water, and also discover where other cockroaches are hiding. </p>
            <p> Cockroaches are one of the most commonly noted household pest insects. They feed on human and pet food, and can leave an offensive odor. They can also passively transport microbes on their body surfaces including those that are potentially dangerous to humans, particularly in environments such as hospitals. Cockroaches are linked with allergic reactions in humans. </p>
          </div>
        </div>
        <div className="form-content">
        <ContactForm/>
      </div>
      </div>
    </>
  )
}

export function Wasps() {
  return (
    <div>
      <div className="image">
        <img className="pest" alt="logo" src={Wasp} align="left" />
      </div>
      <div className="description">
        <h2> Wasps</h2>
        <p>Wasps are distinguished from other flying pests particularly by their possession of a slender, smooth body and legs with relatively few hairs. Wasps also generally are predatory or parasitic and have stingers with few barbs that can be removed easily from their victims. Wasps have a narrow petiole, or “waist,” which attaches the abdomen to the thorax.</p>

        <p> Wasps can be aggressive if provoked can sting you more than once. They will occupy any space where they feel protected and where they can find food and resources to build nests. They can be in lofts, sheds, garages, and piping and anywhere else they can build resources. Our technicians will do a thorough search of the property where an infestation is suspected and treat it with the latest technology to prevent future infestations.</p>

        <p> Keeping food covered, especially when outdoors, will also help keep these insects at bay when they are in search of nourishment. When spending time outside, people should avoid wearing strong fragrances and opt for unscented hygienic products. Likewise, they should wear shoes that cover and protect their feet from rogue paper wasps.</p>
      </div>
      <div className="form-content">
        <ContactForm/>
      </div>
    </div>
  )
}

export function Stinkbugs() {
  return (
    <div>
      <div className="image">
        <img className="pest" alt="logo" src={Stinkbug} align="left" />
      </div>
      <div className="description">
        <h2> Stinkbugs </h2>
        <p>Stink bugs are described in several different ways. They are characterized as both “large, oval-shaped insects” and “shield-shaped insects.” Adult stink bugs can reach almost 2 cm in length. They are nearly as wide as they are long. Their legs extend from the sides, so this makes the adult bugs appear even larger. The brown marmorated stink bug is a brownish stink bug. It has lighter bands on the antennae and darker bands on the wings. </p>

        <p>Adult stink bugs are good fliers and fold their wings on top of their body when they land. Nymphs do not have fully developed wings. The wings appear when the nymph becomes an adult. Fully developed wings are a way to identify adult stink bugs. Homeowners often find stink bugs inside during the late summer months and autumn when temperatures outside start to drop. Finding large numbers of live or dead stink bugs is a pretty sure sign of an infestation. Stink bugs will turn up on sunny sides of homes where they warm themselves. Growers often detect an infestation by the damage they cause to their crops. If you feel there's been an infestation in your home, please call us for service.</p>
      </div>
      <div className="form-content">
        <ContactForm/>
      </div>
    </div>
  )
}

export function Termites() {
  return (
    <>
      <div className="content">
        <div className="description">
          <section className="image">
            <img className="pest" alt="logo" src={Termite} align="left" />
          </section>
          <div className="description">
            <h2> Termites </h2>
            <p>Termites date back more than 120 million years to the time of the dinosaurs. They are known as "silent destroyers" because of their ability to chew through wood, flooring and even wallpaper undetected. Each year, termites cause more than $5 billion in property damage which is not covered by homeowners insurance policies.</p>

            <p> Swarmers looking to start a new colony are typically the first sign of termite season as these winged-pests show up inside homes in early spring. To get rid of termites in the home, contact Weiner Pest Services to address the infestation and recommend a course of proper termite control.</p>
          </div>
        </div>
        <div className="form-content">
        <ContactForm/>
      </div>
      </div>
    </>
  )
}

export function Rats() {
  return (
    <>
      <div className="content">
        <div className="description">
          <section className="image">
            <img className="pest" alt="logo" src={Rat} align="left" />
          </section>
          <div className="description">
            <h2> Rats</h2>
            <p>Rats can reproduce quickly, giving birth to about three to six litters each year. This makes it all the more important to take proactive measures to prevent an infestation from taking root.</p>
            <p>Rats are often drawn to piles of wood, so homeowners should keep firewood stored well away from the structure and remove debris piles to reduce ideal nesting spots. It is also important to seal any holes on the outside of the home with steel wool to block potential points of entry. It is best to eliminate sources of moisture like leaky pipes, especially in crawl spaces and basements, as the dampness can attract rats in search of drinking water. All food products should also be properly sealed in containers to avoid any contamination, which can lead to disease transmission. Likewise, garbage should be tightly enclosed in trashcans that are regularly emptied outside of the home so as not to serve as food attractants. Homeowners are also encouraged to keep a regular eye out for signs of a rodent infestation. Please contact Weiner Pest Services if one is suspected.</p>
          </div>
        </div>
        <div className="form-content">
        <ContactForm/>
      </div>
      </div>
    </>
  )
}