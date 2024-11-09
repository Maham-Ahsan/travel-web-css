import React from "react";
import Image from "next/image";
import "./Explore.css";

const Explore = () => {
  return (
    <div id="explore">
      <h1 className="explore-title">
        WELCOME TO AMAZING DESTINATIONS AND MAGICAL GETAWAYS
      </h1>
      <h2 className="explore-subtitle">Enjoy the Beauty of the World</h2>
      <section className="explore-section">
        <div className="image-grid">
          <div className="image-container">
            <a className="image-link">
            <Image src="/images/niagarafall.avif" alt="Niagara Falls" width={500} height={300} />
            </a>
            <div className="card-content">
              <h3 className="card-category">CANADA</h3>
              <h2 className="card-title">Niagara Falls, Canada</h2>
              <p className="card-description">
                It’s almost stereotypical to put Niagara Falls on a list of the
                most beautiful places in the world, but it is magnificently
                stunning. This natural wonder is made up of three separate
                waterfalls with a maximum drop of almost 200 feet. You can visit
                this site on the United States side too, but everyone knows the
                Canadian side is prettier.
              </p>
            </div>
          </div>
          <div className="image-container">
            <a className="image-link">
            <Image src="/images/monte.avif" alt="Niagara Falls" width={500} height={300} />
            </a>
            <div className="card-content">
            <h3 className="card-category">MEXICO</h3>
              <h2 className="card-title">Monte Albán, Oaxaca, Mexico</h2>
              <p className="card-description">
                The Zapotec metropolis of Monte Albán, located in Oaxaca,
                Mexico, is a fascinating archaeological site that houses the
                ruins of ancient pyramids. As a designated UNESCO World Heritage
                Site, Monte Albán served as a ceremonial center around 500 BC.
                Perched atop a mountaintop, it offers breathtaking views of the
                Oaxaca Valley.
              </p>
            </div>
          </div>
          <div className="image-container">
            <a className="image-link">
          <Image src="/images/sweden.avif" alt="Stockholm" width={500} height={300} />
            </a>
            <div className="card-content">
            <h3 className="card-category">SWEDEN</h3>
              <h2 className="card-title">Stockholm, Sweden</h2>
              <p className="card-description">
                Yes, the entirety of the capital of Sweden is on our list of the
                most beautiful places in the world, not only because it’s home
                to multiple UNESCO World Heritage Sites, but because it has that
                storybook charm you can rarely find anywhere else. Stockholm is
                a picturesque destination with both old and modern architecture,
                a rich history, cobblestone streets, and the calming presence of
                water in an urban setting. There’s so much to do and so many
                places to shop, we can only warn you that you probably won’t
                want to ever leave.
              </p>
            </div>
          </div>
          <div className="image-container">
          <a className="image-link">
            <Image src="/images/spain.avif" alt="spain" width={500} height={300}/>
            </a>
            <div className="card-content">
            <h3 className="card-category">SPAIN</h3>
              <h2 className="card-title">Barcelona, Spain</h2>
              <p className="card-description">
                With incredible food, sprawling beaches, world-renowned
                architecture, and tons of museums, Barcelona is a feast for the
                senses and one of the most beautiful places in the world.
                Architecture lovers can tour the works of Antoni Gaudí,
                including Sagrada Familia and Park Güell. From the historic
                Gothic Quarter to the Picasso Museum, it's a mecca for creative
                inspiration.
              </p>
            </div>
          </div>
          <div className="image-container">
          <a className="image-link">
          <Image src="/images/turkey.avif" alt="turkey" width={500} height={300} />
            </a>
            <div className="card-content">
            <h3 className="card-category">ITALY</h3>
              <h2 className="card-title">Amalfi Coast, Italy</h2>
              <p className="card-description">
                Imagine gazing out over these sweeping views with a limoncello
                in your hand. Now that's amore. Beautiful sights aside, you'll
                also get to partake in plenty of outdoor activities and cultural
                experiences (Pompei! Vila Jovis!), whether you go island hopping
                to Ischia and Capri or stay on the Amalfi Coast in Positano,
                Sorrento, and Naples
              </p>
            </div>
          </div>
          <div className="image-container">
            <a className="image-link">
            <Image src="/images/austria.avif" alt="austria" width={500} height={300} />
            </a>
            <div className="card-content">
            <h3 className="card-category">AUSTRIA</h3>
              <h2 className="card-title">Hallstatt, Austria</h2>
              <p className="card-description">
                Get your cameras ready—this lakeside town is known as the "most
                photographed place in Europe." Spend your vacation wandering the
                16th-century alpine houses, exploring an ancient salt mine, or
                even visiting a glacier garden. You can easily get to the town
                by train from Vienna—it'll be a memorable excursion you won't
                regret.
              </p>
            </div>
          </div>
          <div className="image-container">
            <a className="image-link">
            <Image src="/images/northlights.avif" alt="northlight" width={500} height={300} />
            </a>
            <div className="card-content">
            <h3 className="card-category">FINLAND</h3>
              <h2 className="card-title">Lapland, Finland</h2>
              <p className="card-description">
                Take your love of stargazing to new heights by admiring the
                stars amid the Northern Lights in the northernmost region of
                Finland. In the cooler months, Lapland is blanketed with snow,
                so make sure you bring the right clothes to watch the lights in
                comfort. Seeing the neon bands in the sky is a surreal
                experience you can enjoy while sledding or sitting in front of
                your cabin.
              </p>
            </div>
          </div>
          <div className="image-container">
            <a className="image-link">
            <Image src="/images/bosnia.avif" alt="Bosnia" width={500} height={300} />
            </a>
            <div className="card-content">
            <h3 className="card-category">BOSNIA</h3>
              <h2 className="card-title">Mostar, Bosnia</h2>
              <p className="card-description">
                It only takes a quick glance to see that Mostar, Bosnia, is one
                of the most beautiful places in the world. Beauty aside, it also
                has a rich—albeit painful—history. And while it looks like it
                dates back to medieval times, it was actually erected in 2004 as
                a reconstruction of the original city, which was 400 years old
                when it was destroyed in the 1990s during the Croat-Bosniak War.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Explore;
