# Proxy: A Modern-Day Attendance Management System

## Installation Steps

This assumes you've cloned the repository (or your updated fork of the repository) and are on the `main` branch. No other branches are to be used at the moment.

For the project to work, you'll need to have both the backend and frontend running at the same time. You must either
1. Use Multiple Terminal Instances to run this (recommended), or
2. Use Multiple Terminal Tabs in VSCode

Contact Anirudh for the `.env` file you need to have in the project root.

### Frontend
1. `cd fontend`
2. `npm install` - this step gets you all the utilities you need to get started on the frontend. You only need to run it after every commit, and **not** before every run.
3. `npm start` - this starts the development server.

**NOTE**: Data Fetching and creation will not work until you have the backend up and running **at the same time as the frontend**.

### Backend

This assumes you have the backend tooling necesary, namely
1. Docker and Docker-Compose
2. the `.env` file

Here are the steps - 

1. `cd backend`
2. `npm install`
3. `cd ..`
4. `docker-compose up`
