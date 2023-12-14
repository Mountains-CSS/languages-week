// App.js
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './App.css';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  useEffect(() => {
    // GSAP animations
    gsap.from('.header', { opacity: 0, duration: 1, delay: 0.5, y: -50 });
    gsap.from('.info-section', { opacity: 0, duration: 1, delay: 1, y: -50 });
    gsap.from('.footer', { opacity: 0, duration: 2, delay: 3, y: -100})
    gsap.from('.link', { opacity: 0, duration: 1, delay: 2, x: -100})

    // Separate animations for each heading
    gsap.from('.section-heading', {
      opacity: 0,
      x: -50,
      duration: 1,
      stagger: 0.5,
      scrollTrigger: {
        trigger: '.info-section',
        start: 'top 80%',
      },
    });

    // Scroll-triggered animations
    gsap.from('.scroll-animate', {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.5,
      scrollTrigger: {
        trigger: '.info-section',
        start: 'top 60%',
        end: 'bottom 40%',
        scrub: true,
        markers: false,
      },
    });
  }, []);

  return (
    <div className="App">
      <header className="header">
        <h1>How does French origins and French history affect the French Language?</h1>
      </header>

      <main className="info-section">
        <div className="section-heading1 section-heading">
          <h2>French Origins/History</h2>
          <p>The French language and culture reflect a diverse history. Latin dominated during the Gallo-Roman period, and the Franks introduced Germanic elements. Viking invasions and the Norman Conquest left Norse and aristocratic influences. </p>
          <p>The Crusades, Renaissance, and Enlightenment brought cultural nuances. Italian Renaissance, Enlightenment ideas, and global impacts shaped modern French. </p>
          <p>Revolutionary reforms occurred, and today, globalization introduces English terms, showcasing the dynamic evolution of French language and culture.</p>
        </div>

        <div className="section-heading2 section-heading">
          <h2>Influence</h2>
          <p>The French language was influenced many times, by Romans, English, and even German.</p>
          <div style={{ textAlign:"center", display:"inline-block" }}>
            <ol style={{ textAlign:"left" }}>
              <li><span style={{ fontWeight:"bold" }}>Roman Influence</span>: The Celtic Tribe adopted the Roman culture after their invasion and reformed their Latin language</li>
              <li><span style={{ fontWeight:"bold" }}>English</span>: After signing the Treaty of Paris in 1763, English became a tremendous power. The revolutionary ideas and new words were added.</li>
              <li><span style={{ fontWeight:"bold" }}>German Influence</span>: The language of the Franks, Visigoths and the Burgundians again mixed with Vulgar Latin and the other dialects from various regions.</li>
            </ol>
          </div>
        </div>

        <div className="section-heading3 section-heading">
          <h2>French Language Formation</h2>
          <p>In 1539, the King of France (Henry IV) announced that the French language would be used for all legal matters (law). This increased its popularity significantly. </p>
          <p>Another reason why French became a powerful language was due to the fact of the publication of the first French-Latin dictionary. </p>
          <p>This made it easier for the people learning the French to see the Latin translations and aided/helped comprehension among the population of France.</p>
          <p>In the 16th Century, the King Henry IV's decree and the French-Latin dictionary began the usage of French.</p>
        </div>
      </main>

      <footer className="footer">
        <p>Join us in celebrating the vibrant and captivating world of French culture!</p>
      </footer>
    </div>
  );
};

export default App;
