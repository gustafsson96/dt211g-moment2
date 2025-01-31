"use strict";

let courses = [];

window.onload = () => {
    fetchCourses();
}

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

function displayCourses(courses) {
    const tbodyEl = document.querySelector("tbody");
    tbodyEl.innerHTML = "";

    courses.forEach(course => {
        const rowEl = document.createElement("tr");

        rowEl.innerHTML = `<td>${course.code}</td><td>${course.coursename}</td><td>${course.progression}</td>`
        

        tbodyEl.appendChild(rowEl);
    });
}