# 🌸 Café BLumièreella | Where Beauty Meets Brew

A fully responsive, interactive coffee shop website built with HTML, CSS, and JavaScript.
This project demonstrates modern frontend development practices including DOM manipulation, API integration, animation techniques, and UI component logic.

## 📌 Project Overview
Café Lumière is a multi-page frontend web project designed to simulate a real-world artisan coffee shop website. The goal of this project was to combine elegant UI design with meaningful interactivity.

The application includes dynamic elements such as:
* Real-time shop status detection
* Weather-based mood display via external API
* Animated menu reveal using Intersection Observer
* Fully functional testimonial slider
* Smooth scrolling navigation
* Online order form integration

This project focuses on writing clean, structured, and maintainable frontend code without relying on frameworks.

## 🧠 Technical Implementation
### 1️⃣ Dynamic Shop Status Logic
* Uses the Date() object to determine local time
* Automatically updates open/closed state
* Dynamically modifies DOM elements and CSS classes

### 2️⃣ Weather API Integration
* Fetches real-time weather data using the Fetch API
* Processes weather codes
* Dynamically updates UI mood message
* Includes graceful fallback handling for API failures

### 3️⃣ Intersection Observer Animations
* Detects when menu items enter the viewport
* Applies smooth fade-in and translate animations
* Improves performance compared to scroll event listeners

### 4️⃣ Testimonial Carousel System
* Scroll-based slider implementation
* Dynamic dot generation based on testimonial count
* Arrow navigation using scrollBy()
* Active state management for navigation dots

### 5️⃣ Smooth Scroll Navigation
* Custom event listeners for anchor links
* Prevents default jump behavior
* Uses scrollIntoView({ behavior: "smooth" })

## 🛠 Tech Stack
* HTML5 – Semantic structure
* CSS3 – Flexbox, Grid, animations, transitions
* JavaScript (ES6+) – DOM manipulation, API calls, event handling
* Intersection Observer API
* Fetch API
* Open-Meteo API (Weather data)
* Formspree (Order form submission)