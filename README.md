# Aura Fine Dining | Online Restaurant Menu

Aura is a modern, minimalist, and fully responsive online restaurant menu designed for high-end cafes and fine-dining establishments. It features a clean aesthetic, intuitive navigation, and dynamic menu filtering.

## ✨ Features

- **Minimalist Aesthetic**: A sophisticated design using a neutral color palette (Soft White, Charcoal, and Gold) and premium typography (*Playfair Display* & *Poppins*).
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop viewing.
- **Dynamic Filtering**: A seamless category filtering system (Starters, Mains, Desserts, Beverages) powered by Vanilla JavaScript.
- **Scroll Reveal Animations**: Elegant fade-in and slide-up effects triggered as the user explores the menu.
- **Clean Structure**: Semantic HTML5 markup for better SEO and accessibility.

## 📁 File Structure & Code Explanation

### 1. `index.html`
The core structure of the application.
- **Navbar**: A sticky navigation bar for easy access to the Home, Menu, and About sections.
- **Hero Section**: A visually striking entry point using a background image and a call-to-action button.
- **Menu Section**: 
    - **Filter Bar**: Contains buttons with `data-filter` attributes used by the JavaScript logic.
    - **Unified Grid**: A single container (`ul.menu-grid`) that holds all dish cards. Each card is tagged with a `data-category` for filtering.
- **Footer**: A simple brand summary and closing statement.

### 2. `styles.css`
The design system and layout engine.
- **CSS Variables**: Centralized design tokens for colors, fonts, and transitions, making it easy to tweak the brand identity.
- **Flexbox & Grid**: Uses Modern CSS Grid for the menu items to ensure perfect alignment across all screen sizes.
- **Reveal Animations**: Custom keyframes and transition classes (`.reveal`, `.reveal.active`) that handle the entry animations.
- **Responsive Queries**: Media queries to stack the layout into a single column for mobile users.

### 3. `script.js`
The interactivity layer.
- **Menu Filtering Logic**: 
    - Listens for clicks on category buttons.
    - Uses `data-filter` to show or hide cards by toggling CSS classes.
    - Implements a short timeout for smooth opacity transitions during filtering.
- **Intersection Observer**: uses the modern `IntersectionObserver` API to detect when elements enter the viewport and trigger the "reveal" animations without any performance lag.

## 🚀 How to Use

1.  Clone or download the repository.
2.  Open `index.html` in any modern web browser (Chrome, Safari, Firefox, or Edge).
3.  Scroll through the menu to see the animations in action.
4.  Click the category buttons to filter the dishes.

## 🖋️ Design Specifications

- **Headings**: `Playfair Display` (Serif)
- **Body Text**: `Poppins` (Sans-serif)
- **Primary Color**: `#1A110D` (Charcoal)
- **Accent Color**: `#B8860B` (Dark Goldenrod)
- **Background**: `#FDFBF8` (Soft Warm White)

---
*Crafted with passion for the art of dining.*
# Restaurant
