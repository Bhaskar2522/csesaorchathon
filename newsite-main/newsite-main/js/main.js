document.addEventListener("DOMContentLoaded", () => {

  const stars = document.querySelector(".layer-stars");

  if (!stars) {
    console.error("❌ .layer-stars not found in HTML");
    return;
  }

  let offset = 0;

  function moveStars() {
    offset += 0.3;
    stars.style.backgroundPositionY = `${offset}px`;
    requestAnimationFrame(moveStars);
  }

  moveStars();

  // Parallax effect for foreground planet on scroll
  const foregroundPlanet = document.querySelector(".planet-foreground");

  window.addEventListener("scroll", () => {
    if (foregroundPlanet) {
      const scrollY = window.scrollY;
      foregroundPlanet.style.transform = `translateY(${scrollY * -0.2}px)`;
    }
  });

  // ==========================================
  // GSAP ROCKET ANIMATION
  // ==========================================
  const rocket = document.querySelector(".rocket");

  // Ensure GSAP is loaded before trying to use it
  if (rocket && typeof gsap !== 'undefined') {
    // Optional: Register ScrollTrigger to trigger animations on scroll
    if (typeof ScrollTrigger !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
    }

    // Trigger on full page load rather than just DOM parsed
    window.addEventListener("load", () => {

      const tl = gsap.timeline({
        delay: 1.5, // Delay animation start
        scrollTrigger: {
          trigger: ".hero",
          start: "top center", // Trigger on scroll
          toggleActions: "play none none none"
        }
      });

      // 1. Diagonal movement & Easing
      // Moves the rocket from the bottom-left off-screen up toward the space station
      tl.fromTo(rocket,
        {
          x: "-15vw",
          y: "20vh",
          rotation: -5,
          scale: 1.1       // Start slightly larger
        },
        {
          duration: 50,      // Extremely slow approach (was 30)
          x: "28vw",         // Don't move quite as far right
          y: "-30vh",        // Don't move quite as high up
          rotation: 12,      // Tilt toward the station
          scale: 0.4,        // Scale down more to simulate deeper distance
          ease: "power2.out" // Smooth deceleration as it arrives
        }
      )
        // 2. Slight Shake when near (Impulse / Docking prep)
        .to(rocket, {
          duration: 0.05,
          x: "+=5px",
          y: "-=5px",
          rotation: "+=2",
          yoyo: true,
          repeat: 5,           // Repeat to create the shake effect
          ease: "none"
        })
        // 3. Continuous gentle float (replacing the removed CSS animation)
        .to(rocket, {
          duration: 2.5,
          y: "-=15px",
          rotation: "-=2",
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut"
        });
      // ==========================================
      // ABOUT US SECTION ANIMATION (Task 6.1)
      // ==========================================
      const aboutSectionGlass = document.querySelector("#about-us .section-content");

      if (aboutSectionGlass) {
        // Set initial state before animation
        gsap.set(aboutSectionGlass, {
          opacity: 0,
          y: 100,
          scale: 0.95
        });

        // Animated fade-in with a subtle pop/scale-up when scrolled into view
        gsap.to(aboutSectionGlass, {
          scrollTrigger: {
            trigger: "#about-us",
            start: "top 80%", // Animates when top of about section hits 80% down the viewport
            toggleActions: "play none none reverse" // Reverses if the user scrolls back up
          },
          duration: 1.2,
          opacity: 1,
          y: 0,
          scale: 1,
          ease: "power3.out"
        });
      }

      // ==========================================
      // TIMELINE SECTION ANIMATION (Task 6.3)
      // ==========================================
      const timelineItems = document.querySelectorAll(".timeline-item");

      if (timelineItems.length > 0) {
        timelineItems.forEach((item, index) => {
          gsap.fromTo(item,
            {
              opacity: 0,
              x: index % 2 === 0 ? -50 : 50 // Alternate fly-in from left/right
            },
            {
              scrollTrigger: {
                trigger: item,
                start: "top 85%",
                toggleActions: "play none none reverse"
              },
              duration: 1,
              opacity: 1,
              x: 0,
              ease: "power2.out"
            }
          );
        });

        // The rocket tracks down the timeline as you scroll
        const trackingRocket = document.querySelector(".timeline-rocket");
        const timelineContainer = document.querySelector(".timeline-container");

        if (trackingRocket && timelineContainer) {
          gsap.to(trackingRocket, {
            scrollTrigger: {
              trigger: timelineContainer,
              start: "top center", // Rocket starts moving when top of timeline hits center of screen
              end: "bottom center", // Stops moving when bottom of timeline hits center of screen
              scrub: 1 // Ties the movement directly to the scrollbar for a smooth follow
            },
            top: "100%",
            ease: "none"
          });
        }
      }

    });
  }

});