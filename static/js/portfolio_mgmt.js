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

  var project_info_div = d3.select("div.project_info");

  var tbody = d3.select("#project_info_table>tbody");

  // Create a placeholder for a tooltip
  var tooltip = tbody
    .append("div")
    .style("position", "absolute")
    .style("z-index", "10")
    .style("visibility", "hidden")
    .attr('id', "project_tool_tip")
    // .attr('class', "d-xs-block")
    .text("");

  // Bind the object list containing project information to the spans we'll have on the page
  var projectTableRows = tbody.selectAll("tr")
    .data(portfolioInfo);

  // Add a table row for every projects
  var this_row = projectTableRows
    .enter()
    .append("tr");

  // Cell: Project Name ******************* TABLE CELL
  var cell_project_name = this_row
    .append("td")
    .append("a")
    .attr('class', "project_name")
    .attr('target', "_blank")                         // Open a new tab for this link
    .attr('href', function (d) { return d.links[0].linkURL; }) // Set the link to 1st URL
    .text(function (d) { return d.projectName; })

    .on('mouseover', function (d, i) {

      // Get the bounding boxes (in page coordinates) for various page elements
      project_info_div_rect = project_info_div.node().getBoundingClientRect();

      // Set the location of the tool tip: Tooltip 'left' attribute
      // (Mouse Coord in page coord) - (Origin of the div for the project table body in page coord with adjustment for the effects of scrolling)
      tooltip_left = d3.event.pageX - (window.pageXOffset + project_info_div_rect.left);

      // Set the location of the tool tip: Tooltip 'top' attribute
      // (Mouse Coord in page coord) - (Origin of the div for the project table body in page coord with adjustment for the effects of scrolling) + (Additional offset of tooltip text)
      tooltip_top = d3.event.pageY - (window.pageYOffset + project_info_div_rect.top) + 40;

      // DEBUG: Show coordinates
      // debug_text = `(tooltip left: ${tooltip_left}, tooltip top: ${tooltip_top})`;  // DEBUG: Show coordinates
      // debug_text += `\n\n(event.pageX: ${event.pageX}, event.pageY: ${event.pageY})`;
      // debug_text += `\n\n(window.pageXOffset: ${window.pageXOffset}, window.pageYOffset: ${window.pageYOffset})`;

      // console.log(`\n*** DEBUG: Project Name: ${d.projectName}  ***************************`);
      // console.log(debug_text);
      // console.log("\project_info_div_rect:");
      // console.log(project_info_div_rect);

      // DEBUG: Display Mouse coordinates as the tooltip
      // debug_text = "Mouse Event Properties:";
      // debug_text += `\nclientX: ${event.clientX}, clientY: ${event.clientY}`;     // Coord in local (DOM content) coordinates
      // debug_text += `\npageX: ${event.pageX}, pageY: ${event.pageY}`;             // Coord relative to the whole HTML document
      // debug_text += `\noffsetX: ${event.offsetX}, offsetY: ${event.offsetY}`;     // Coord relative to the padding edge of the target node (Project Name?)
      // debug_text += `\nlayerX: ${event.layerX}, layerY: ${event.layerY}`;         // Coord 
      // debug_text += `\nscreenX: ${event.screenX}, screenY: ${event.screenY}`;     // Coord in global (screen) coordinates
      // console.log(debug_text);

      // Set the text needed for the tooltip
      tooltip_text = `Click Project or Links for details`;   // Show the project description as the tooltip text

      // Make the tooltip visible, populate it, and move to the proper location 
      tooltip
        .style("visibility", "visible")   // Display the tooltip
        .text(tooltip_text)                 // Text to use for the tooltip
        .style("left", (tooltip_left) + "px")    // Tooltip location relative to containing element (tbody?)
        .style("top", (tooltip_top) + "px");    // Tooltip location relative to containing element (tbody?)

      // DEBUG: Display the bounding box for the tooltip
      // tooltip_rect = tooltip.node().getBoundingClientRect();
      // console.log("\ntooltip Properties:");
      // console.log(`(tooltip_rect.left: ${tooltip_rect.left}, tooltip_rect.top: ${tooltip_rect.top}, tooltip_rect.right: ${tooltip_rect.right}, tooltip_rect.bottom: ${tooltip_rect.bottom})`);
      // console.log(`(tooltip.clientLeft: ${tooltip.clientLeft}, tooltip.clientTop: ${tooltip.clientTop})`);
      // console.log(tooltip);
    })

    .on('mousemove', function (d, i) {
      // Get the bounding boxes (in page coordinates) for various page elements
      project_info_div_rect = project_info_div.node().getBoundingClientRect();

      // Set the location of the tool tip: Tooltip 'left' attribute
      // (Mouse Coord in page coord) - (Origin of the div for the project table body in page coord with adjustment for the effects of scrolling)
      tooltip_left = d3.event.pageX - (window.pageXOffset + project_info_div_rect.left);

      // Set the location of the tool tip: Tooltip 'top' attribute
      // (Mouse Coord in page coord) - (Origin of the div for the project table body in page coord with adjustment for the effects of scrolling) + (Additional offset of tooltip text)
      tooltip_top = d3.event.pageY - (window.pageYOffset + project_info_div_rect.top) + 40;

      // DEBUG: Display Mouse coordinates as the tooltip
      // debug_text = "Mouse Event Properties:";
      // debug_text += `\nclientX: ${event.clientX}, clientY: ${event.clientY}`;     // Coord in local (DOM content) coordinates
      // debug_text += `\npageX: ${event.pageX}, pageY: ${event.pageY}`;             // Coord relative to the whole HTML document
      // debug_text += `\noffsetX: ${event.offsetX}, offsetY: ${event.offsetY}`;     // Coord relative to the padding edge of the target node (Project Name?)
      // debug_text += `\nlayerX: ${event.layerX}, layerY: ${event.layerY}`;         // Coord 
      // debug_text += `\nscreenX: ${event.screenX}, screenY: ${event.screenY}`;     // Coord in global (screen) coordinates
      // console.log(debug_text);

      // Move the tooltip depending upon the current mouse location
      tooltip
        // .text(debug_text)               // DEBUG: Display the mouse event coordinates
        .style("left", (tooltip_left) + "px")
        .style("top", (tooltip_top) + "px");
    })

    .on('mouseout', function (d, i) {
      tooltip
        .style("visibility", "hidden")   // Hide the tooltip
        .text("");                     // Clear the tooltip text
    });


  // Cell: Project Links ****************** TABLE CELL
  // Create a cell to hold the list project links
  var cell_project_links = this_row
    .append("td");

  // Populating this cell requires special handling since this cell
  // will contain a variable number of hyperlinks depending upon which project
  // is being handled.
  // So, bind hyperlinks in this cell to the project links data for this project
  var this_project_link = cell_project_links.selectAll("a.project_link")
    .data(function (d) { return d.links; });

  // Now, add a hyperlink for each project link provided for this project
  this_project_link
    .enter()
    .append("a")
    .attr('class', "project_link")                    // One class for all project links
    .attr('target', "_blank")                         // Open a new tab for this link
    .attr('href', function (x) { return x.linkURL; }) // Set the link to the project URL
    .text(function (x, j) {                           // Set the tag for the URL
      // Use the link tag specified in the data
      retval = `[${x.linkTag}]`;

      // Add a trailing comma if this is not the last entry in the list
      if (j < d3.select(this.parentNode.parentNode).datum().links.length - 1) {
        retval += ", "
      }
      return retval;
    })
    .append("br");        // Add a line break between links

  // FYI: How to get a data value from parent using (for example)
  // d3.select(this.parentNode.parentNode).datum().projectName

  // Cell: Project Description ****************** TABLE CELL
  // This column is automatically set to display:none
  // on small screens
  var cell_description = this_row
    .append("td")
    .attr('class', "d-none d-sm-table-cell")
    .text(function (d) { return d.description; });


  // Cell: Project Technologies Used ************ TABLE CELL
  // Create a cell to hold the list project links
  // This column is automatically set to display:none
  // on medium or small screens
  var cell_tech_used = this_row
    .append("td")
    .attr('class', "d-none d-md-table-cell");

  // Populating this cell requires special handling since this cell
  // will contain a variable number of hyperlinks depending upon which project
  // is being handled.
  // So, bind hyperlinks in this cell to the project links data for this project
  var this_tech_term = cell_tech_used.selectAll("span.project_tech_term")
    .data(function (d) { return d.technologies; });

  // Now, add a hyperlink for each project link provided for this project
  this_tech_term
    .enter()
    .append("span")
    .attr('class', "project_tech_term")                    // One class for all tech terms
    .attr('id', function (x, j) { return `id_${encodeURIComponent(x)}`; })
    .text(function (x, j) {                           // Add the technology term
      // Add this technology term to a global list of all the technology terms
      // -- and maintain unique terms only
      addTechnologyTerm(x);

      retval = `${x}`;

      // Add a trailing comma if this is not the last entry in the list
      if (j < d3.select(this.parentNode.parentNode).datum().technologies.length - 1) {
        retval += ", "
      }
      return retval;
    })
    .on('click', function (x, j) {
      this_id = `[id="id_${encodeURIComponent(x)}"]`
      d3.selectAll(this_id)
        .classed('project_tech_term_highlight', function () {
          return !this.classList.contains("project_tech_term_highlight");
        });
    });
};


function buildTechUsedList() {
  // Select the div containing the tech used list
  var techUsedDiv = d3.select("#tech_used_list");

  // Bind the list containing technology terms to the spans we'll have on the page
  var techUsedList = techUsedDiv.selectAll("span")
    .data(allTechnologyTerms);

  // For new data, add a span with the associated tech term
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

  // If the "Technology Used" heading is clicked,
  // turn off all project_tech_term_highlight items
  var techUsedHeading = d3.select("#tech_used_heading")
    .on('click', function (d, i) {
      // Find all tech terms on the page
      d3.selectAll(".tech_used_item, .project_tech_term")
        // Remove the highlight class
        .classed('project_tech_term_highlight', false);
    });
}

// Build the Project Information table
buildProjectInfoTable();

// Build the Technologies Used list
buildTechUsedList();

// Output the list of technology terms
// console.log(allTechnologyTerms)