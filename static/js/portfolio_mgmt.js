// Manage the portfolio page content

// Global list of technology terms
var allTechnologyTerms = new Array();

function addTechnologyTerm(a_term) {
  // Add the new term to the Array of terms
  allTechnologyTerms.push(a_term)

  // Use a Set to force the terms to be unique and
  // then use the spread operator to convert the result back into an Array
  allTechnologyTerms = [...new Set(allTechnologyTerms)]
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
    var cell = tbody.append("td")
      .text(project.projectName)
      .attr('class', "project_name")

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
          .text(linkinfo.linkTag)
          .attr('href', linkinfo.linkURL)
          .attr('target', "_blank")
          .attr('class', "project_link")
          .attr('id', `id_${encodeURIComponent(project.projectName + '_' + linkinfo.linkTag)}`)

        // Now, add a closing bracket
        cell.html(cell.html() + "]")
      }
    });

    // Cell: Project Description
    var cell = tbody.append("td")
      .text(project.description);


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
          .text(techTerm)
          .attr('class', "project_tech_term")
          .attr('id', `id_${encodeURIComponent(techTerm)}`)

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

  // Bind the Set containing technology terms list to the spans we'll have on the page
  var techUsedList = techUsedDiv.selectAll("span")
    .data(allTechnologyTerms);

  // DEBUG:
  // techUsedDiv.text(`Length: ${allTechnologyTerms.length}<br>First element: ${allTechnologyTerms[0]}`)

  // For new data, add 
  techUsedList
    .enter()
    .append("span")
    .attr('class', "tech_used_item")
    .attr('id', function (d) { return `id_${encodeURIComponent(d)}` })
    .text(function (d, i) {
      retval = d;
      if (i < allTechnologyTerms.length - 1) {
        retval += ", ";
      }
      d.highlight = false;
      return retval;
    })
    .on('click', function (d, i) {
      this_id = `[id="id_${encodeURIComponent(d)}"]`
      d3.selectAll(this_id)
        .classed('project_tech_term_highlight', function () {
          return !this.classList.contains("project_tech_term_highlight");
        });
    });
 }

// Build the Project Information table
buildProjectInfoTable();

// Build the Technologies Used list
buildTechUsedList();

// Output the list of technology terms
// console.log(allTechnologyTerms)