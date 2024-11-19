document.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById("birthday-audio");
    const loadingScreen = document.getElementById("loading-screen");
    const mainContent = document.getElementById("main-content");
  
    // Function to play audio and proceed
    const startExperience = () => {
      audio.play()
        .then(() => {
          // Hide the loading screen after audio finishes
          audio.onended = () => {
            loadingScreen.style.display = "none";
            mainContent.style.display = "block";
  
            // GSAP Intro Animations
            gsap.from(".title", { duration: 1, y: -50, opacity: 0, ease: "bounce" });
            gsap.from(".subtitle", { duration: 1, y: 50, opacity: 0, delay: 0.5 });
  
            // Gallery Section Animation
            gsap.from("#gallery", {
              scrollTrigger: {
                trigger: "#gallery",
                start: "top 90%",
                end: "top 70%",
              },
              opacity: 0,
              y: 50,
              duration: 1,
            });
  
            // Message Section Animation
            gsap.from("#message", {
              scrollTrigger: {
                trigger: "#message",
                start: "top 90%",
                end: "top 70%",
              },
              opacity: 0,
              y: 50,
              duration: 1,
            });
  
            // Ending Section Animation
            gsap.from("#ending", {
              scrollTrigger: {
                trigger: "#ending",
                start: "top 90%",
                end: "top 70%",
              },
              opacity: 0,
              scale: 0.8,
              duration: 1,
            });
          };
        })
        .catch((err) => console.error("Audio play failed:", err));
    };
  
    // Add a click or touch event listener for user interaction
    document.addEventListener("click", startExperience, { once: true });
    document.addEventListener("touchstart", startExperience, { once: true });
  });
  