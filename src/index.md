---
title: "Home"
layout: layout.njk
---
<section class="hero">
  <div class="hero-inner">
    <div class="hero-content">
      <h1>Prime & Shine Mobile Detailing</h1>
      <p class="subhead">Professional mobile detailing — we come to you</p>
      <a class="cta" href="#contact">Book Now</a>
    </div>
    <div class="hero-image" aria-hidden="true">
      <img src="/assets/images/jeep.jpg" alt="Exterior detail example: Jeep">
    </div>
  </div>
</section>

<section class="services" id="services">
  <h2>Our Services</h2>
  <div class="cards">
    <article class="card">
      <img src="/assets/images/jeep.jpg" alt="Exterior Detail">
      <h3>Exterior Detail</h3>
      <ul>
        <li>Foam wash, decontamination, and hand dry</li>
        <li>Clay bar and polish as needed</li>
        <li>Sealant or ceramic coating options</li>
      </ul>
    </article>

    <article class="card">
      <img src="/assets/images/interior.jpg" alt="Interior Detail">
      <h3>Interior Detail</h3>
      <ul>
        <li>Vacuum, shampoo carpets and mats</li>
        <li>Leather conditioning and vinyl care</li>
        <li>Odor removal and quick sanitization</li>
      </ul>
    </article>
  </div>
</section>

<section class="portfolio" id="portfolio">
  <h2>Portfolio</h2>
  <div class="gallery">
    <a class="gallery-item" href="/assets/images/portfolio1.jpg"><img src="/assets/images/portfolio1.jpg" alt=""></a>
    <a class="gallery-item" href="/assets/images/portfolio2.jpg"><img src="/assets/images/portfolio2.jpg" alt=""></a>
  </div>
</section>

<section class="contact" id="contact">
  <h2>Contact & Booking</h2>
  {% include "contact-form.njk" %}
</section>
