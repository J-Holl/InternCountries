Quick Start Documentation
Description

This project is a React Native application that interacts with the REST Countries API to display a list of countries. It includes features like country details, search functionality, and a favorites system.

Prerequisites

    Node.js, npm and Expo installed.

Installation

    Clone the repository:

    bash

git clone [repository_url]
cd [project_folder]

Install dependencies:

bash

npm install

Run the application using Expo:

bash

    npx expo start

    This will start the development server and provide you with options to open the app on a physical device using the Expo client or on an emulator.

    Use the Expo client on your device or an emulator to preview the app.

Features

    List Countries: Displays a list of countries retrieved from the REST Countries API.

    Country Details: View detailed information about a specific country, including its flag, capital, region, population, etc.

    Search: Utilize the search functionality to filter countries by name.

    Favorites: Add and remove countries to/from your favorites list.

Folder Structure

    components: React components used in the application.
    pages: Top-level pages for navigation.
    redux: Redux store setup and slices.
    utils: TypeScript types.
    App.tsx -> EntryApp.tsx -> [pages & components]

Technologies Used

    React Native
    Expo
    Redux Toolkit
    RTK Query
    React Navigation