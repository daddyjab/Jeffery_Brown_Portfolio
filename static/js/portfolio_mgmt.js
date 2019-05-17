// Manage the portfolio page content

// Global list of technology terms
var allTechnologyTerms = new Set();

function addTechnologyTerm(a_term) {
  allTechnologyTerms.add(a_term)
}

function buildProjectInfoTable() {
  // Select the table body
  var tbody = d3.select("#project_info_table>tbody");

  // Clear out any current content in the table body
  tbody.html("");

  // Loop through each project in the portfolioInfo object
  // and populate the table
  portfolioInfo.forEach(project => {
    // Add a row to the table
    var row = tbody.append("tr");

    // Cell: Project Name
    var cell = tbody.append("td");
    cell.text(project.projectName);
    cell.attr('class', "project_name")

    // Cell: Project Links

    // Create a cell to hold the list project links
    var cell = tbody.append("td");

    // Loop through each specified link and append it to the link text
    project.links.forEach(linkinfo => {

      // If both the link Tag and URL are not empty, then add the link
      if (linkinfo.linkTag != "" && linkinfo.linkURL != "") {

        // If this is not the first link added to the list,
        // then add a line break
        if (cell.html().length > 0) {
          cell.html(cell.html() + "<br>")
        }

        // Enclose the link in brackets -- add an opening bracket
        cell.html(cell.html() + "[")

        // Add the link Tag and URL to the link text
        var cellLinkItem = cell.append("a")
        cellLinkItem.text(linkinfo.linkTag)
        cellLinkItem.attr('href', linkinfo.linkURL)
        cellLinkItem.attr('target', "_blank")
        cellLinkItem.attr('class', "project_link")
        cellLinkItem.attr('id', `id_${encodeURIComponent(project.projectName + '_' + linkinfo.linkTag)}`)

        // Now, add a closing bracket
        cell.html(cell.html() + "]")
      }
    });

    // Cell: Project Description
    var cell = tbody.append("td");
    cell.text(project.description);


    // Cell: Project Technologies
    // Create a cell to hold the list of technologies used
    var cell = tbody.append("td");

    // Loop through each specified link and
    // append a span to the cell for each item
    project.technologies.forEach(techTerm => {

      // If both the link Tag and URL are not empty, then add a span
      if (techTerm != "") {

        // If this is not the first link added to the list,
        // then add a comma and space before the next item
        if (cell.html().length > 0) {
          cell.html(cell.html() + ", ")
        }

        // Add the link Tag and URL to the link text
        var celltechItem = cell.append("span")
        celltechItem.text(techTerm)
        celltechItem.attr('class', "project_tech_term")
        celltechItem.attr('id', `id_${encodeURIComponent(techTerm)}`)

        // Add this technology term to a global list of all the technology terms
        // added thus far -- unique terms only
        addTechnologyTerm(techTerm);
      }
    });
  });
}

function buildTechUsedList() {
  // Select the div containing the tech used list
  var techUsedDiv = d3.select("#tech_used_list");

  // Clear out any current content in the list
  techUsedDiv.html("");

  // Loop through each tech term in the global variable
  // containing the set of tech terms, and populate it on the page
  allTechnologyTerms.forEach(techTerm => {

    // If both the link Tag and URL are not empty, then add a span
    if (techTerm != "") {

      // If this is not the first link added to the list,
      // then add a comma and space before the next item
      if (techUsedDiv.html().length > 0) {
        techUsedDiv.html(techUsedDiv.html() + ", ")
      }

      // Add the link Tag and URL to the link text
      var techItem = techUsedDiv.append("span")
      techItem.text(techTerm)
      techItem.attr('class', "tech_used_item")
      techItem.attr('id', `id_${encodeURIComponent(techTerm)}`)
    }
  });
}

// Build the Project Information table
buildProjectInfoTable();

// Build the Technologies Used list
buildTechUsedList();

// Output the list of technology terms
// console.log(allTechnologyTerms)