///////////////////////////////////
// PULL AND RENDER DATA FROM GOOGLE SHEET (CODE)
///////////////////////////////////
$.ajax(
  "https://spreadsheets.google.com/feeds/list/1ZYlV-gAMjH1KxIEfc24jhPFtLRe3hfE-3TcwIzMoh1o/1/public/full?alt=json"
).then((data) => {
  // Checking my data
  console.log(data);

  // Put our projects in a variable
  const rawProjects = data.feed.entry;

  // Log our projects
  console.log(rawProjects);

  // Prettify our projects array
  const projects = rawProjects.map((project) => {
    return {
      name: project.gsx$name.$t,
      image: project.gsx$image.$t,
      description: project.gsx$description.$t,
      link: project.gsx$link.$t,
    };
  });
  console.log(projects);

  // Use jQuery to render projects to page
  for (i = 0; i < projects.length; i++) {
    const $a = $("<a>");
    $a.addClass("cardLink");
    $a.attr("target", "_blank");
    $a.attr("href", `${projects[i].link}`);
    $a.html(`
    <div class="card">
    <div class="cardContainer">
      <h4>${projects[i].name}</h4>
    </div>
    <div class="imgContainer">
      <img
        src="${projects[i].image}"
        alt="${projects[i].name}"
      />
    </div>
    <div class="cardOverlay">
      <div class="cardOverlayText">
        ${projects[i].description}
      </div>
    </div>
    </div>
    `);
    $(".codeCollection").append($a);
  }
});

///////////////////////////////////
// PULL AND RENDER DATA FROM GOOGLE SHEET (SHOOT)
///////////////////////////////////
$.ajax(
  "https://spreadsheets.google.com/feeds/list/1ZYlV-gAMjH1KxIEfc24jhPFtLRe3hfE-3TcwIzMoh1o/2/public/full?alt=json"
).then((data) => {
  // Checking my data
  console.log(data);

  // Put our projects in a variable
  const rawProjects = data.feed.entry;

  // Log our projects
  console.log(rawProjects);

  // Prettify our projects array
  const projects = rawProjects.map((project) => {
    return {
      name: project.gsx$name.$t,
      image: project.gsx$image.$t,
      link: project.gsx$link.$t,
    };
  });
  console.log(projects);

  // Use jQuery to render projects to page
  for (i = 0; i < projects.length; i++) {
    const $a = $("<a>");
    $a.addClass("cardLink");
    $a.attr("href", `./shootCollection/${projects[i].link}.html`);
    $a.html(`
    <div class="card">
      <img
        src="${projects[i].image}"
      />
      <div class="cardOverlay">
      <div class="cardOverlayText">
        ${projects[i].name}
      </div>
    </div>
    `);
    $(".shootCollection").append($a);
  }
});

////////////////////////////
// OVERLAY MOBILE NAVIGATION
////////////////////////////
let menuOpen = false;
$("#mobileNav").click(() => {
  if (menuOpen == false) {
    $(".overlay").css("visibility", "visible");
    $(".overlay").css("opacity", "1");
    $(".overlayBackground").css("transform", "scale(8)");
    $(".overlay").css("transition", "all 0.75s ease-in-out");
    $(".overlay").css("height", "100%");
    $(".overlayBackground").css("transition", "all 0.75s ease-in-out");
    $(".menuButton").addClass("open");
    menuOpen = true;
  } else {
    $(".overlay").css("visibility", "hidden");
    $(".overlay").css("opacity", "0");
    $(".overlayBackground").css("transform", "scale(0.1)");
    $(".overlayBackground").css("transition", "all 0.75s ease-in-out");
    $(".overlay").css("transition", "all 0.5s ease-in-out");
    $(".overlay").css("height", "0");
    $(".menuButton").removeClass("open");
    menuOpen = false;
  }
});
