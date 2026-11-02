$(document).ready(function () {
  console.log("jQuery is ready!");

  $("h1").css("font-size", "28px");
  $("#greeting").text("Добро пожаловать в моё портфолио!");
  $(".intro").css("font-size", "18px");

  $("#lightTheme").on("click", function () {
    $("body").css("background-color", "white");
    $("body").css("color", "black");
  });

  $("#darkTheme").on("click", function () {
    $("body").css("background-color", "#222222");
    $("body").css("color", "white");
  });

  $("#hideStatus").on("click", function () {
    $("#status").hide();
  });

  $("#showStatus").on("click", function () {
    $("#status").show();
  });

  $("#toggleStatus").on("click", function () {
    $("#status").toggle();
  });

  $("#fadeInImages").on("click", function () {
    $(".galleryImage").fadeIn(500);
  });

  $("#fadeOutImages").on("click", function () {
    $(".galleryImage").fadeOut(500);
  });

  $("#fadeToggleImages").on("click", function () {
    $(".galleryImage").fadeToggle(500);
  });

  $("#musicButton").on("click", function () {
    $("#musicPanel").slideToggle(500);
  });

  $("#movieButton").on("click", function () {
    $("#moviePanel").slideToggle(500);
  });

  $("#subjectButton").on("click", function () {
    $("#subjectPanel").slideToggle(500);
  });

  $("#openPanels").on("click", function () {
    $(".panel").slideDown(500);
  });

  $("#closePanels").on("click", function () {
    $(".panel").slideUp(500);
  });

  $("#addSkill").on("click", function () {
    let skill = $("#skillInput").val().trim();

    if (skill !== "") {
      let newItem = $("<li>").text(skill);
      $("#skillsList").append(newItem);
      $("#skillInput").val("");
    }
  });

  $("#prependSkill").on("click", function () {
    let skill = $("#skillInput").val().trim();

    if (skill !== "") {
      let newItem = $("<li>").text(skill);
      $("#skillsList").prepend(newItem);
      $("#skillInput").val("");
    }
  });

  $("#removeSkill").on("click", function () {
    $("#skillsList li").last().remove();
  });

  $("#changeLink").on("click", function () {
    $("#socialLink").attr("href", "https://github.com/bigstep832?tab=repositories");
    $("#socialLink").text("My GitHub Repositories");
  });

  $("#nameInput").on("input", function () {
    let name = $("#nameInput").val();
    $("#namePreview").text(name);
  });

  $("#emailInput").on("input", function () {
    let email = $("#emailInput").val();
    $("#emailPreview").text(email);
  });

  $("#contactForm").on("submit", function (event) {
    event.preventDefault();
  });

  let skillsVisible = false;

  $("#animateSkills").on("click", function () {
    if (skillsVisible === false) {
      $("#htmlBar").animate({ width: "80%" }, 800);
      $("#cssBar").animate({ width: "60%" }, 800);
      $("#jsBar").animate({ width: "40%" }, 800);
      skillsVisible = true;
    } else {
      $("#htmlBar").animate({ width: "0%" }, 800);
      $("#cssBar").animate({ width: "0%" }, 800);
      $("#jsBar").animate({ width: "0%" }, 800);
      skillsVisible = false;
    }
  });
});
