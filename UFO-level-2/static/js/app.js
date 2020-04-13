// from data.js
var tableData = data;

// create variable to hold filered date for multiple filters and a list of the active fileters
var filteredData = [];
var isFiltered = false;
var activeFilters = []

// create a variable for the selection of the table body using D3
var tbody = d3.select("tbody");

// loop through `tableData` (data.js)
// use d3 to append one table row `tr` for each object
tableData.forEach((tableRender) => {
    var row = tbody.append("tr");

    // use `Object.entries` to log each value
    Object.entries(tableRender).forEach(([key, value]) => {

        // append a cell to the row for each value
        var cell = row.append("td");
        cell.text(value);
    });
});

// date input field code:

// define the date filter button
var button = d3.select("#filter-btn");

button.on("click", (click) => {
    // select the input element and get the html id
    var inputDate = d3.select("#datetime");

    // get the value property of the input element
    var inputValue = inputDate.property("value");
    console.log(inputValue);

    // if else statment to check if data was previously filtered
    if (!isFiltered) {
        // filter the table data by datetime to match input date
        filteredData = tableData.filter(sighting =>
            sighting.datetime === inputValue ||
            sighting.city === inputValue ||
            sighting.state === inputValue ||
            sighting.country === inputValue ||
            sighting.shape === inputValue);
        console.log(filteredData);

        // remove any previous listed items within the table body
        tbody.html("");

        filteredData.forEach((tableRender) => {
            var row = tbody.append("tr");

            // log each value with object.entries function
            Object.entries(tableRender).forEach(([key, value]) => {

                // append a cell to the row for each value
                var cell = row.append("td");
                cell.text(value);
            });
        });
    } else {
        // filter the table data by datetime to match input date
        filteredData = filteredData.filter(sighting =>
            sighting.datetime === inputValue ||
            sighting.city === inputValue ||
            sighting.state === inputValue ||
            sighting.country === inputValue ||
            sighting.shape === inputValue);
        console.log(filteredData);

        // remove any previous listed items within the table body
        tbody.html("");

        filteredData.forEach((tableRender) => {
            var row = tbody.append("tr");

            // log each value with object.entries function
            Object.entries(tableRender).forEach(([key, value]) => {

                // append a cell to the row for each value
                var cell = row.append("td");
                cell.text(value);
            });
        });
    }
    // setting isFiltered back to true
    isFiltered = true;
    // adding the addtional inputValues to the activeFilter array
    activeFilters.push(inputValue);
    console.log(activeFilters);

    // clear out filtered list so it doesn't keep appending to old list
    d3.select("#filterlist").remove();

    // using D3 select the dom element and append items to list of active filters
    var showFilters = d3.select("#activefilters")
    showFilters.append("ul")
        .attr("id", "filterlist")
    activeFilters.forEach((filter) => {
        d3.select("#filterlist")
            .append("li")
            .attr("class", "filter")
            .text(filter);
    });
});

// creating a button to clear the filters and re-render the original table
var clearButton = d3.select("#clear-btn");

clearButton.on("click", (click) => {

    // clear table data
    tbody.html("");

    tableData.forEach((tableRender) => {
        var row = tbody.append("tr");

        // use `Object.entries` to log each value
        Object.entries(tableRender).forEach(([key, value]) => {

            // append a cell to the row for each value
            var cell = row.append("td");
            cell.text(value);
        });
    });
    // set all arrays back to empty and remove filter list
    filteredData = [];
    isFiltered = false;
    activeFilters = [];
    d3.select("#filterlist").remove();
})
