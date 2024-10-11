# EpiRecipeSearch Frontend

## Project Description

**EpiRecipeSearch** is a recipe search application that allows users to explore various recipes by searching with keywords. It fetches recipe details such as nutritional information and images from the backend, displaying them in a user-friendly and responsive interface. This React-based frontend is designed to work seamlessly with the Flask backend and leverages the Pexels API for high-quality recipe images.

## Objectives

- Provide a simple search interface for users to find recipes.
- Display detailed nutritional information (calories, fat, protein, etc.) for each recipe.
- Display recipe images fetched from the Pexels API.
- Responsive design for easy access on both desktop and mobile devices.

---

## Table of Contents

- [Project Description](#project-description)
- [Objectives](#objectives)
- [Technologies and Frameworks](#technologies-and-frameworks)
- [Setup and Installation](#setup-and-installation)
- [Usage Guidelines](#usage-guidelines)
- [Features](#features)

---

## Technologies and Frameworks

- **React**: JavaScript library for building user interfaces.
- **Vite**: A fast build tool for developing modern web applications.
- **Tailwind CSS**: A utility-first CSS framework for creating responsive, modern designs.
- **Axios**: For making HTTP requests to the Flask backend API.
- **Pexels API**: For fetching and displaying recipe images.

---

## Setup and Installation

### Prerequisites

- **Node.js** (You can download it from [here](https://nodejs.org/))
- Flask backend running (see backend repo for instructions)

### Steps to Setup the Frontend

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/Kajal2209/EpiRecipeSearch-Frontend.git
    cd EpiRecipeSearch-Frontend
    ```

2. **Install Dependencies**:
    Ensure you are in the project directory and run:
    ```bash
    npm install
    ```

3. **Configure the API Endpoint**:
   If necessary, update the backend API URL in the `.env` file or the Axios configuration to match your Flask backend’s address (default is `http://localhost:5000`).

4. **Run the Development Server**:
    ```bash
    npm run dev
    ```

   This will start the frontend development server, which should now be accessible at `http://localhost:3000`.

---

## Usage Guidelines

### Searching for Recipes

1. Enter a recipe keyword in the search bar (e.g., "chicken").
2. A dropdown will appear with suggestions based on your input.
3. Click on a recipe to view its details, including the image and nutritional information.

### Viewing Recipe Information

- Once you select a recipe, you can view its title, image, calories, fat content, protein, sodium, and rating.
- The app will display up to 5-star ratings for the recipe based on the backend data.

---

## Features

- **Search Functionality**: Type a keyword and get a list of matching recipes.
- **Dynamic Recipe Information**: Shows nutritional info and recipe image when a recipe is selected.
- **Responsive Design**: Works seamlessly on both mobile and desktop devices.
- **Skeleton Loader**: While the recipe data is being fetched, the user will see a skeleton loader indicating the process.

---

## Technologies Breakdown

- **React**: For building dynamic components and handling the frontend logic.
- **Axios**: For making HTTP requests to the backend.
- **Tailwind CSS**: For styling components and ensuring a modern look and feel.
- **Vite**: For fast development and hot module reloading.

---

## Future Enhancements

- Add filters for recipes based on ingredients and cooking time.
- Implement a favorites system where users can bookmark recipes.
- Add pagination for better navigation through large sets of results.

---

## Contributors

- **Kajal** - Frontend Development
