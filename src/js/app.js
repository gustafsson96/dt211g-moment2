"use strict";

let courses = [];

window.onload = () => {
    fetchCourses();

    /* add event listeners on th-headings to sort on click */
    document.querySelector("#th-code").addEventListener("click", sortCode);
    document.querySelector("#th-name").addEventListener("click", sortName);
    document.querySelector("#th-progression").addEventListener("click", sortProgression);
}

/* function to fetch courses from an external url */
async function fetchCourses() {
    const url = "https://webbutveckling.miun.se/files/ramschema_ht24.json";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        courses = await response.json();
        displayCourses(courses);
    } catch (error) {
        console.error(error.message);
    }
}

/* function to display courses in table */
function displayCourses(courses) {
    const tbodyEl = document.querySelector("tbody");
    tbodyEl.innerHTML = "";

    courses.forEach(course => {
        const rowEl = document.createElement("tr");

        rowEl.innerHTML = `<td>${course.code}</td><td>${course.coursename}</td><td>${course.progression}</td>`
        tbodyEl.appendChild(rowEl);
    });
}

/* function to sort course code column */
function sortCode() {
    courses.sort((a, b) => a.code > b.code ? 1 : a.code < b.code ? -1 : 0);
    displayCourses(courses);
}

/* function to sort course name column */
function sortName() {
    courses.sort((a, b) => a.coursename > b.coursename ? 1 : a.coursename < b.coursename ? -1 : 0);
    displayCourses(courses);
}

/* function to sort progression column */
function sortProgression() {
    courses.sort((a, b) => a.progression > b.progression ? 1 : a.progression < b.progression ? -1 : 0);
    displayCourses(courses);
}