const shows = document.querySelector('.shows');

const showsArray = [

    {
        date: 'Mon Sept 06 2021',
        venue: 'Ronald Lane',
        location: 'San Francisco, CA'
    },

    {
        date: 'Tue Sept 21 2021',
        venue: 'Pier 3 East',
        location: 'San Francisco, CA'
    },

    {
        date: 'Fri Oct 15 2021',
        venue: 'View Lounge',
        location: 'San Francisco, CA'
    },

    {
        date: 'Sat Nov 06 2021',
        venue: 'Hyatt Agency',
        location: 'San Francisco, CA'
    },

    {
        date: 'Fri Nov 26 2021',
        venue: 'Moscow Center',
        location: 'San Francisco, CA'
    },

    {
        date: 'Wed Dec 15 2021',
        venue: 'Press Club',
        location: 'San Francisco, CA'
    }
];

console.log(showsArray);

showsArray.forEach(function(show) {
    for (let i = 0; i < showsArray.length; i++) {

        const dateHeading = document.createElement('p');
        dateHeading.className = 'shows__date--heading'
        dateHeading.innerText = ('Date');
        const dateValue = document.createElement('p');
        dateValue.className = 'shows__date--value';
        dateValue.innerText = show.date;
        console.log(dateHeading);
        console.log(dateValue);

        const venueHeading = document.createElement('p');
        dateHeading.className = 'shows__venue--heading'
        venueHeading.innerText = ('Venue');
        const venueValue = document.createElement('p');
        venueValue.className = 'shows__venue--value';
        venueValue.innerText = show.venue;
        console.log(venueHeading);
        console.log(venueValue);

        const locationHeading = document.createElement('p');
        dateHeading.className = 'shows__location--heading'
        locationHeading.innerText = ('Location');
        const locationValue = document.createElement('p');
        locationValue.className = 'shows__location--__value';
        locationValue.innerText = show.location;
        console.log(locationHeading);
        console.log(locationValue);

        shows.appendChild(dateHeading);
        shows.appendChild(dateValue);

        shows.appendChild(venueHeading);
        shows.appendChild(venueValue);

        shows.appendChild(locationHeading);
        shows.appendChild(locationValue);

        const buyTicketsBtn = document.createElement('input');
        buyTicketsBtn.type = "submit";
        buyTicketsBtn.className = "shows__buy-tickets";
        shows.appendChild(buyTicketsBtn);

        break; 
    };
    
});
