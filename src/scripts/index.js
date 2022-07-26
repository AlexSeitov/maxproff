import burger from './modules/burger.js';
import multipleSliders from './modules/multipleSliders.js';
import getCurrentYear from './modules/getYear.js';
import phoneInput from './vendor/phoneInput.js';
import form from './modules/form.js';
import inputRange from './modules/inputRange.js';

/* eslint-disable no-unused-vars */

// Get Year ===================================================================
getCurrentYear('copyright-year');

// Phone input mask ============================================================
phoneInput('input[data-tel-input]');

// Burger ======================================================================
burger('.burger', '.primary-menu', '.primary-menu__link', 'body');

// Swiper ======================================================================
multipleSliders();

// Form ============================================================
form('.calculate-form');

// Input range =========================
inputRange('#form-range-input', '#form-range-result');
