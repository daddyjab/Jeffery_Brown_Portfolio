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

  // Create a placeholder for a tooltip
  var tooltip = tbody
    .append("div")
    .style("position", "absolute")
    .style("z-index", "10")
    .style("visibility", "hidden")
    .attr('id', "project_tool_tip")
    .attr('class', "d-xs-block")
    .text("");

  // Bind the object list containing project information to the spans we'll have on the page
  var projectTableRows = tbody.selectAll("tr")
    .data(portfolioInfo);

  // Add a table row for every projects
  var this_row = projectTableRows
    .enter()
    .append("tr");
  // .on('mouseover', function (d, i) {
  //   // console.log(d.description);
  //   tooltip
  //     .style("visibility", "visible")   // Display the tooltip
  //     .text(d.description);           // Display the project description

  //   console.log(`X: ${event.pageX}, Y: ${event.pageY}`)
  //   console.log(event)
  //   // console.log(tooltip.node().getBoundingClientRect())
  // })
  // .on('mouseout', function (d, i) {
  //   tooltip
  //     .style("visibility", "hidden")   // Hide the tooltip
  //     .text("");                     // Clear the tooltip text
  // })
  // .on('mousemove', function (d, i) {
  //   // Get the size of the bounding object over which we're moving
  //   rect = this.getBoundingClientRect();
  //   // loc_x = d3.event.pageX - rect.x - this.clientLeft - window.pageXOffset;
  //   // loc_y = d3.event.pageY - rect.y - this.clientTop - window.pageYOffset;
  //   loc_x = d3.event.pageX - this.clientLeft - window.pageXOffset;
  //   loc_y = d3.event.pageY - this.clientTop - window.pageYOffset - 20;
  //   tooltip
  //     .style("top", (loc_y) + "px")
  //     .style("left", (loc_x) + "px");
  // });


  // Cell: Project Name ******************* TABLE CELL
  var cell_project_name = this_row
    .append("td")
    .append("a")
    .attr('class', "project_name")
    .attr('target', "_blank")                         // Open a new tab for this link
    .attr('href', function (d) { return d.links[0].linkURL; }) // Set the link to 1st URL
    .text(function (d) { return d.projectName; })

    .on('mouseover', function (d, i) {

      // Set the location for the tooltip message
      // loc_x = event.offsetX;
      // loc_y = event.offsetY;
      this_rect = this.getBoundingClientRect();
      // this_row_rect = this_row.node().getBoundingClientRect();
      
      // loc_x = d3.event.pageX - this_rect.left - this.clientLeft - window.pageXOffset;
      loc_x = d3.event.pageX - this_rect.left - this.clientLeft;
      // loc_y = d3.event.pageY - this_rect.top - this.clientTop - window.pageYOffset + this_row_rect.top;
      // loc_y = d3.event.pageY - this_rect.top - this.clientTop - window.pageYOffset;
      // loc_y = d3.event.pageY - this.clientTop - window.pageYOffset;
      // loc_y = d3.event.pageY - this.clientTop;
      loc_y = d3.event.pageY - this.clientTop - Math.round(this_rect.height/2);

      // Set the tooltip text to be displayed
      // tooltip_text = `(tooltip left: ${loc_x}, tooltip top: ${loc_y})`;  // DEBUG: Show coordinates
      // tooltip_text += `\n(event.pageX: ${event.pageX}, event.pageY: ${event.pageY})`;
      // tooltip_text += `\n(event.clientX: ${event.clientX}, event.clientY: ${event.clientY})`;
      // tooltip_text += `\n(this_rect.left: ${this_rect.left}, this_rect.top: ${this_rect.top})`;
      // tooltip_text += `\n(this.clientLeft: ${this.clientLeft}, this.clientTop: ${this.clientTop})`;
      // tooltip_text += `\n(this_row_rect.left: ${this_row_rect.left}, this_row_rect.top: ${this_row_rect.top})`;
      // tooltip_text += `\n(this_row.clientLeft: ${this_row.node().clientLeft}, this_row.clientTop: ${this_row.node().clientTop})`;
      // tooltip_text += `\n(window.pageXOffset: ${window.pageXOffset}, twindow.pageYOffset: ${window.pageYOffset})`;
      // tooltip_text += `\n(event.offsetX: ${event.offsetX}, event.offsetY: ${event.offsetY})`;
      // tooltip_text += `\n(event.clientX: ${event.clientX}, event.clientY: ${event.clientY})`;

      tooltip_text = d.description;   // Show the project description as the tooltip text

      tooltip
        .style("visibility", "visible")   // Display the tooltip
        .text(tooltip_text)               // Display the project description
        .style("left", (loc_x) + "px")
        .style("top", (loc_y) + "px");

      console.log("Mouse Event Properties:")
      console.log(`pageX: ${event.pageX}, pageY: ${event.pageY}`)             // Coord relative to the whole HTML document
      console.log(`offsetX: ${event.offsetX}, offsetY: ${event.offsetY}`)     // Coord relative to the padding edge of the target node (Project Name?)
      console.log(`clientX: ${event.clientX}, clientY: ${event.clientY}`)     // Coord in local (DOM content) coordinates
      console.log(`layerX: ${event.layerX}, layerY: ${event.layerY}`)         // Coord 
      console.log(`screenX: ${event.screenX}, screenY: ${event.screenY}`)     // Coord in global (screen) coordinates
      console.log(event)

      console.log("\nOther Properties:")
      console.log(`Tooltip Bounding Box:`)
      console.log(tooltip.node().getBoundingClientRect())

      console.log("\nthis Properties:")
      console.log(`this.clientLeft: ${this.clientLeft}, this.clientTop: ${this.clientTop}`)
      console.log(`this_rect.left: ${this_rect.left}, this_rect.top: ${this_rect.top}`)
      console.log(this_rect)
      console.log(this)

      console.log("\ncell_project_name Properties:")
      console.log(cell_project_name.node().getBoundingClientRect())
      console.log(cell_project_name)

      // console.log("\nthis_row Properties:")
      // console.log(this_row.node().getBoundingClientRect())
      // console.log(this_row)

      // console.log("\ntbody Properties:")
      // console.log(tbody.node().getBoundingClientRect())
      // console.log(tbody)

      // proj_info = d3.select("#project_info_table");
      // console.log("\nproject_info Properties:")
      // console.log(proj_info.node().getBoundingClientRect())
      // console.log(proj_info)

      // console.log("\ncol-md-8 parent of project_info Properties:")
      // console.log(proj_info.node().parentNode.getBoundingClientRect())
      // console.log(proj_info.node().parentNode)

      console.log(`\nWindow Properties:`)
      console.log(`window.pageXOffset: ${window.pageXOffset}, window.pageYOffset: ${window.pageYOffset}`)

      console.log(window)
    })


    .on('mousemove', function (d, i) {
      // Get the size of the bounding object over which we're moving
      // rect = this.getBoundingClientRect();
      // loc_x = d3.event.pageX - rect.x - this.clientLeft - window.pageXOffset;
      // loc_y = d3.event.pageY - rect.y - this.clientTop - window.pageYOffset;
      // loc_x = d3.event.pageX - this.clientLeft - window.pageXOffset;
      // loc_y = d3.event.pageY - this.clientTop - window.pageYOffset - 20;

      // loc_x = this.clientLeft + d3.event.offsetX
      // loc_y = this.clientTop + d3.event.offsetY

      // Set the location for the tooltip message
      this_rect = this.getBoundingClientRect();
      this_row_rect = this_row.node().getBoundingClientRect();
      
      // loc_x = d3.event.pageX - this_rect.left - this.clientLeft - window.pageXOffset;
      loc_x = d3.event.pageX - this_rect.left - this.clientLeft;
      // loc_y = d3.event.pageY - this_rect.top - this.clientTop - window.pageYOffset + this_row_rect.top;
      // loc_y = d3.event.pageY - this_rect.top - this.clientTop - window.pageYOffset;
      // loc_y = d3.event.pageY - this.clientTop - window.pageYOffset;
      // loc_y = d3.event.pageY - this.clientTop;
      loc_y = d3.event.pageY - this.clientTop - Math.round(this_rect.height/2);

      // Set the tooltip text to be displayed
      // tooltip_text = `(tooltip left: ${loc_x}, tooltip top: ${loc_y})`;  // DEBUG: Show coordinates
      // tooltip_text += `\n(event.pageX: ${event.pageX}, event.pageY: ${event.pageY})`;
      // tooltip_text += `\n(event.clientX: ${event.clientX}, event.clientY: ${event.clientY})`;
      // tooltip_text += `\n(this_rect.left: ${this_rect.left}, this_rect.top: ${this_rect.top})`;
      // tooltip_text += `\n(this.clientLeft: ${this.clientLeft}, this.clientTop: ${this.clientTop})`;
      // tooltip_text += `\n(this_row_rect.left: ${this_row_rect.left}, this_row_rect.top: ${this_row_rect.top})`;
      // tooltip_text += `\n(this_row.clientLeft: ${this_row.node().clientLeft}, this_row.clientTop: ${this_row.node().clientTop})`;
      // tooltip_text += `\n(window.pageXOffset: ${window.pageXOffset}, twindow.pageYOffset: ${window.pageYOffset})`;
      // tooltip_text += `\n(event.offsetX: ${event.offsetX}, event.offsetY: ${event.offsetY})`;
      // tooltip_text += `\n(event.clientX: ${event.clientX}, event.clientY: ${event.clientY})`;

      // tooltip_text = d.description;   // Show the project description as the tooltip text

      tooltip
        .text(tooltip_text)               // Display the project description
        .style("left", (loc_x) + "px")
        .style("top", (loc_y) + "px");

      // console.log("Mouse Event Properties:")
      // console.log(`clientX: ${event.clientX}, clientY: ${event.clientY}`)     // Coord in local (DOM content) coordinates
      // console.log(`offsetX: ${event.offsetX}, offsetY: ${event.offsetY}`)     // Coord relative to the padding edge of the target node (Project Name?)
      // console.log(`layerX: ${event.layerX}, layerY: ${event.layerY}`)         // Coord 
      // console.log(`pageX: ${event.pageX}, pageY: ${event.pageY}`)             // Coord relative to the whole HTML document
      // console.log(`screenX: ${event.screenX}, screenY: ${event.screenY}`)     // Coord in global (screen) coordinates
      // console.log(event)


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