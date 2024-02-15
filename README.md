# Description
- This project is a responsive calendar application inspired by Google Calendar, designed to manage events efficiently. It features intuitive drag-and-drop functionality, color-coded event categorization, and support for all-day events. Users can easily distinguish between private and public events while enjoying a seamless experience with event details displayed in modals.

## Features
- Handling All-day Events: The calendar properly handles all-day events and distinguishes between private and public events, hiding titles for private events.
- Color Coding for Event Types: Different types of events such as normal events, stretching events, and all-day events are color-coded for easy identification.
- Drag and Drop Functionality: Users can drag and drop events within a day across different time slots in the calendar. (not fully worked condition)
- Red Line for Current Time: A red line indicates the current time for better visualization.
- Event Details Modal: Clicking on an event opens a modal displaying event details.

## Screenshots
- Basic UI and Allday Event
![Screenshot 1](screenshots/Screenshot%202024-02-15%20074319.png) 

- Events and current Time red line
![Screenshot 2](./screenshots/Screenshot%202024-02-15%20074549.png) 

- Events details modal
![Screenshot 3](./screenshots/Screenshot%202024-02-15%20074613.png) 

- Date and month Selection Calender
![Screenshot 4](./screenshots/Screenshot%202024-02-15%20074628.png) 


## Uses
- User can navigate to event based on date  by selecting date & month from the calendar.
- There is a Today button by clicking which we can navigate to today planned events section.
- We can go to previous and next date event section by click right and left arrow.


## Tech Stack
- React
- HTML
- CSS
- JavaScript
- Chakra UI 
- DayJS
- react-beautiful-dnd (for Drag and Drop)
- Other (for Data we use mock data which is available in db.js file)


## SetUp Project
- git clone https://github.com/Manojkumar7978/googlecalendar.git
- cd googlecalendar
- npm i
- npm start

## I need some Future Improvements
- Fully drag and drop functionality .
- Integration with backend API for fetching real-time data.
- Additional customization options for users, such as theme selection and event reminders.

## resources 
- 3rd party Libraries
- Google & Google Calendar
- Chat GPT AI Tool


