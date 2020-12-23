console.log("hello world");

///////////////////////////////////
// PULL AND RENDER DATA FROM GOOGLE SHEET
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
      live: project.gsx$live.$t,
      github: project.gsx$github.$t,
    };
  });
  console.log(projects);

  ////////////////////////////////
  // Use jQuery to render projects to page
  ////////////////////////////////
  for (i = 0; i < projects.length; i++) {
    const $a = $("<a>");
    $a.addClass("cardLink");
    $a.attr("target", "_blank");
    $a.attr("href", `${projects[i].github}`);
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
    $(".codeGallery").append($a);
  }
});

////////////////////////////////
// Pull data from blog from Headless CMS
////////////////////////////////

////////////////////////////
// Overlay Mobile Navigation
////////////////////////////

/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
