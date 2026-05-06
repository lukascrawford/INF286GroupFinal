function showContent() {
  // Get the dropdown element and the selected value
  const dropdown = document.getElementById("infoDropdown");
  const selectedValue = dropdown.value;

  // Hide all elements with the 'hidden-content' class
  const allContent = document.querySelectorAll(".hidden-content");
  allContent.forEach(content => {
    content.style.display = "none";
  });

  // Show the specific element that matches the selected value
  if (selectedValue) {
    const activeContent = document.getElementById(selectedValue);
    if (activeContent) {
      activeContent.style.display = "block";
    }
  }
}