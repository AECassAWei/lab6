'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('.project a').click(addProjectDetails);

	// $('#colorBtn').click(randomizeColors);
}

/*
 * Make an AJAX call to retrieve project details and add it in
 */
function addProjectDetails(e) {
	// Prevent following the link
	e.preventDefault();

	// Get the div ID, e.g., "project3"
	var projectID = $(this).closest('.project').attr('id');
	// get rid of 'project' from the front of the id 'project3'
	var idNumber = projectID.substr('project'.length);

	console.log("User clicked on project " + idNumber);
	$.get("http://localhost:3000/project/"+idNumber, callBackFn(projectID));
}


// function addProjectDetails(e) {
// 	// Prevent following the link
// 	e.preventDefault();

// 	// Get the div ID, e.g., "project3"
// 	var projectID = $(this).closest('.project').attr('id');
// 	// get rid of 'project' from the front of the id 'project3'
// 	var idNumber = projectID.substr('project'.length);
//     var temp = "https://localhost:3000/project/" + idNumber;
    
//     $.get(temp, function(data){

//         var projectHTML = '<p>' + data['title'] + '</p>' + '<p>' + data['date'] + '</p>' + '<img src="' + data['image'] + '" class="detailsImage">' + '<p>' + data['summary'] + '</p>';

//         $('#'+projectID+' .details').html(projectHTML);
//     });
// }


function callBackFn(projectID) {
	console.log("show")

	var projectHTML = '<p>' + response['title'] + '</p>' + '<p>' + response['date'] + '</p>' + '<img src="' + response['image'] + '" class="detailsImage">' + '<p>' + response['summary'] + '</p>';

	$('#'+projectID+' .details').html(projectHTML);
}


