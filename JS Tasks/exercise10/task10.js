const output = document.getElementById("output");
let result = "";
const events = [
    {
        name: "Music Festival",
        category: "Music",
        seats: 50
    },
    {
        name: "Workshop on Baking",
        category: "Workshop",
        seats: 25
    },
    {
        name: "Food Fair",
        category: "Food",
        seats: 30
    }
];
function addEvent(
    name = "New Event",
    category = "General",
    seats = 10
) {
    return {
        name,
        category,
        seats
    };
}
const newEvent = addEvent(
    "Dance Competition",
    "Music",
    40
);
events.push(newEvent);
result += "<h3>Event Details using Destructuring</h3>";
const { name, category, seats } = events[0];
result += `
    Name: ${name}<br>
    Category: ${category}<br>
    Seats: ${seats}<br><br>
`;
const clonedEvents = [...events];
const musicEvents = clonedEvents.filter(
    event => event.category === "Music"
);
result += "<h3>Music Events</h3>";
musicEvents.forEach(event => {
    result += `
        ${event.name} -
        ${event.category} -
        Seats: ${event.seats}<br>
    `;
});
document.getElementById("output").innerHTML = result;