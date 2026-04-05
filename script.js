
// Contact button popup
function showMessage() {
  alert("Call us: 6294486895");
}


// Course click info system
function showCourse(course) {
  let info = "";

  if (course === "medical") {
    info = "MBBS, Nursing, Paramedical courses available. Entrance: NEET.";
  } 
  else if (course === "engineering") {
    info = "B.Tech, Polytechnic courses. Entrance: JEE Main, WBJEE.";
  } 
  else if (course === "law") {
    info = "BA LLB, LLB courses. Entrance: CUET.";
  } 
  else if (course === "management") {
    info = "BBA, MBA, BCA courses available.";
  } 
  else if (course === "aviation") {
    info = "Hotel Management, Aviation, Air Hostess training programs.";
  }

  document.getElementById("course-info").innerHTML = info;
}


// Form submission message (optional)
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // stop reload

      alert("Form submitted! We will contact you soon.");

      form.reset(); // clear form
    });
  }
});