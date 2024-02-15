const events = [
  {
    id: 1,
    title: 'Private Event',
    start: new Date(2024, 1, 15, 10, 0, 0),
    end: new Date(2024, 1, 15, 12, 0, 0),
    private: true,
    type: 'normal',
    holiday: false,
    url: "https://us06web.zoom.us/j/82713583284",
    description: "DSA Stand Up with IA | Placements Pathway Program"
  },
  {
    id: 2,
    title: 'Public Event',
    start: new Date(2024, 1, 15, 15, 0, 0),
    end: new Date(2024, 1, 15, 16, 0, 0),
    private: false,
    type: 'stretching',
    holiday: false,
    url: "https://us06web.zoom.us/j/82713583284",
    description: "Master your Technical Communication | Placements Session 2|"
  },
  {
    id: 3,
    title: 'All Day Event',
    start: new Date(2024, 1, 15),
    end: new Date(2024, 1, 15),
    allDay: true,
    type: 'all-day',
    holiday: true
  },
  {
    id: 4,
    title: 'Morning Meeting',
    start: new Date(2024, 1, 16, 9, 0, 0),
    end: new Date(2024, 1, 16, 10, 0, 0),
    private: false,
    type: 'stretching',
    holiday: false,
    url: "www.abc.in",
    description: "ABC"
  },
  {
    id: 5,
    title: 'Lunch Break',
    start: new Date(2024, 1, 16, 12, 0, 0),
    end: new Date(2024, 1, 16, 13, 0, 0),
    private: false,
    type: 'stretching',
    holiday: false,
    url: "www.lmn.in",
    description: "LMN"
  },
  {
    id: 6,
    title: 'Afternoon Workshop',
    start: new Date(2024, 1, 16, 14, 0, 0),
    end: new Date(2024, 1, 16, 17, 0, 0),
    private: false,
    type: 'workshop',
    holiday: false,
    url: "www.pqr.in",
    description: "PQR"
  },
  {
    id: 7,
    title: 'Holi Celebration',
    start: new Date(2024, 1, 17),
    end: new Date(2024, 1, 17),
    allDay: 'all-day',
    type: 'all-day',
    holiday: true
  }
];

export default events;