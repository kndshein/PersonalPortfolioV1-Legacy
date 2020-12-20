console.log("hello world");

///////////////////////////////////
// PULL AND RENDER DATA FROM GOOGLE SHEET
///////////////////////////
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
});

////////////////////////////////
// Pull data from blog from Headless CMS
////////////////////////////////
