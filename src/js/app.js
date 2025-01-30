"use strict";

document.addEventListener('DOMContentLoaded', function () {
    const menu = document.querySelector('.navbar');
    const menuItems = document.querySelector('.navbar-items');
    const hamburgerIcon = document.querySelector('.hamburger-icon');

    hamburgerIcon.addEventListener('click', function () {
        menu.classList.toggle('show');
        menuItems.classList.toggle('show');
        hamburgerIcon.classList.toggle('active');
    });
});