fetch('https://sheets.code4recovery.org/storage/12Ga8uwMG4WJ8pZ_SEU7vNETp_aQZ-2yNVsYDFqIwHyE.json')
    .then(result => result.json())
    .then(function (result) {
        // Your code for handling the data you get from the API
        var allNames = [];
        for (var i=0; i < result.length; i++) {
            allNames.push(result[i].name);
        };
        allNames = [...new Set(allNames)];
        console.log(allNames);
    })
    .catch(function() {
    // This is where you run code if the server returns any errors
    });

/*
Need to:
 - Get a list of all the different group names.
 - Get a list of all the different cities.
 - Create arrays, each one named for a city, and add all the meetings to their corresponding array. 
 - Create a row with one single cell to contain the heading.
 - Create a row to contain the table header.
 - For each different city:
    - Create a row with just one cell, left-aligned, containing the name of the city.
    - Create a row for each group's meetings with the following cells:
        1. Meeting name cell, containing name & address & notes
        2. Sunday meetings cell, containing monday meetings for that group & types of monday meetings
        3. Monday meetings cell, containing monday meetings for that group & types of monday meetings
        4. Tuesday meetings cell, containing monday meetings for that group & types of monday meetings
        5. Wednesday meetings cell, containing monday meetings for that group & types of monday meetings
        6. Thursday meetings cell, containing monday meetings for that group & types of monday meetings
        7. Friday meetings cell, containing monday meetings for that group & types of monday meetings
        8. Saturday meetings cell, containing monday meetings for that group & types of monday meetings
*/