///////////////////////////////////
// PULL AND RENDER DATA FROM GOOGLE SHEET (SHOOT)
///////////////////////////////////
$.ajax(
  "https://spreadsheets.google.com/feeds/list/1ZYlV-gAMjH1KxIEfc24jhPFtLRe3hfE-3TcwIzMoh1o/3/public/full?alt=json"
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
      image: project.gsx$image.$t,
    };
  });
  console.log(projects);

  // Use jQuery to render projects to page
  for (i = 0; i < projects.length; i++) {
    const $img = $("<img>");
    $img.attr("src", `${projects[i].image}`);
    $(".myanmarGallery").append($img);
  }
});
