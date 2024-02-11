const container = document.querySelector('.container');

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

const showsHeader = document.createElement('h1');
showsHeader.className = 'container__header';
showsHeader.innerText = 'Shows';

container.appendChild(showsHeader);

showsArray.forEach(function(show) {
    for (let i = 0; i < showsArray.length; i++) {

        const showsContainer = document.createElement('div');
        showsContainer.className = 'container__shows';

        container.appendChild(showsContainer)

        const dateHeading = document.createElement('p');
        dateHeading.className = 'container__shows--heading';
        dateHeading.innerText = 'Date';
        const dateValue = document.createElement('p');
        dateValue.className = 'container__shows--value-bold';
        dateValue.innerText = show.date;

        const venueHeading = document.createElement('p');
        venueHeading.className = 'container__shows--heading';
        venueHeading.innerText = 'Venue';
        const venueValue = document.createElement('p');
        venueValue.className = 'container__shows--value';
        venueValue.innerText = show.venue;

        const locationHeading = document.createElement('p');
        locationHeading.className = 'container__shows--heading';
        locationHeading.innerText = 'Location';
        const locationValue = document.createElement('p');
        locationValue.className = 'container__shows--value';
        locationValue.innerText = show.location;

        
        const buyTicketsBtn = document.createElement('input');
        buyTicketsBtn.type = "submit";
        buyTicketsBtn.className = "container__shows--buy-tickets";
        buyTicketsBtn.value = 'BUY TICKETS';

        const divider = document.createElement('div');
        divider.className = 'container__shows--divider';


        showsContainer.appendChild(dateHeading);
        showsContainer.appendChild(dateValue);

        showsContainer.appendChild(venueHeading);
        showsContainer.appendChild(venueValue);

        showsContainer.appendChild(locationHeading);
        showsContainer.appendChild(locationValue);

        showsContainer.appendChild(buyTicketsBtn);

        showsContainer.appendChild(divider);

        break; 


    };
    
});
