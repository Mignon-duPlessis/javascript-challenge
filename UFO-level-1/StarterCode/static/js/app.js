// from data.js
var tableData = data;

const tbody = d3.select('tbody');

// create a function to put data inside of table
function buildTable(ufoData) {
    tbody.html("");

    // loop through the data and then append to row, and cell data
    ufoData.forEach(dataRow => {
        const row = tbody.append("tr");

        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);

        });

});
}

buildTable(tableData);
//Create function that is triggered when the button is clicked
function handleClick() {

    // Prevent the form from refreshing the page
    d3.event.preventDefault();

    // Grab the datetime value from the filter
    var date = d3.select("#datetime").property("value");
    let filteredData = tableData;

    // Create a filter to show only the date selected by the s
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    }

    // Rebuild the table using the filtered data
    buildTable(filteredData);
}

// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// // Build the table when the page loads
buildTable(tableData);
