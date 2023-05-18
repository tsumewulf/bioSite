document.addEventListener("DOMContentLoaded", function() {
  // Colorblind mode options
  var modes = ["normal", "protanopia", "deuteranopia", "tritanopia"];

  // Initial colorblind mode
  var currentMode = "normal";

  // Color schemes for each colorblind mode
  var colorSchemes = {
    normal: {
      primaryColor: "#228b22",
      secondaryColor: "#7A9972",
      accentColor: "#9999cc"
    },
    protanopia: {
      primaryColor: "#22558b",
      secondaryColor: "#609aa6",
      accentColor: "#b23341"
    },
    deuteranopia: {
      primaryColor: "#375c29",
      secondaryColor: "#9fcf94",
      accentColor: "#f0a500"
    },
    tritanopia: {
      primaryColor: "#3650a6",
      secondaryColor: "#6d86b5",
      accentColor: "#d7a72e"
    }
  };

  // Function to update the color scheme based on the current colorblind mode
  function updateColorScheme() {
    var scheme = colorSchemes[currentMode];
    document.documentElement.style.setProperty("--primary-color", scheme.primaryColor);
    document.documentElement.style.setProperty("--secondary-color", scheme.secondaryColor);
    document.documentElement.style.setProperty("--accent-color", scheme.accentColor);

    // Update background color for the nav element
    var nav = document.querySelector("nav");
    nav.style.backgroundColor = scheme.accentColor;
  }

  // Add CSS class to body for initial colorblind mode
  document.body.classList.add("colorblind-mode-" + currentMode);

  // Get the colorblind switcher element
  var switcher = document.querySelector(".colorblind-switcher");

  // Toggle colorblind mode on click
  switcher.addEventListener("click", function() {
    // Get the index of the current mode
    var currentIndex = modes.indexOf(currentMode);

    // Calculate the next mode index
    var nextIndex = (currentIndex + 1) % modes.length;

    // Set the next mode as the current mode
    currentMode = modes[nextIndex];

    // Update the color scheme
    updateColorScheme();

    // Toggle colorblind mode class on body
    document.body.classList.remove("colorblind-mode-" + modes[currentIndex]);
    document.body.classList.add("colorblind-mode-" + currentMode);
  });

  // Function to initialize the color scheme
  function initializeColorScheme() {
    // Set the initial color scheme
    updateColorScheme();
  }

  // Initialize the color scheme
  initializeColorScheme();
});
