const container = document.querySelector('.container');
const showsHeader = document.createElement('h1');
showsHeader.className = 'container__header';
showsHeader.innerText = 'Shows';
container.appendChild(showsHeader);

function formatDate(timestamp) {
    let monthName = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec'];
    let weekDay = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    let toDay = weekDay[new Date(timestamp).getDay()];
    let toDate = new Date(timestamp).getDate();
    let toMonth = monthName[new Date(timestamp).getMonth()];
    let toYear = new Date(timestamp).getFullYear();
    let original_date = toDay + ' ' + toMonth +' ' + toDate + ' ' + toYear;
    return original_date;
};

const showsArray = [];

const bandSiteApi = new BandSiteApi (apiKey);
const defaultShowsPromise = bandSiteApi.getShows();

defaultShowsPromise.then(result => {
    for(let i = 0; i < result.length; i++) {
        let defaultShowsChain = {
            date: formatDate(result[i].date),
            venue: result[i].place,
            location: result[i].location,
        }
        showsArray.push(defaultShowsChain);   
    }
    renderShows();
});

function renderShows() { 
    showsArray.forEach(function(show) {
        const showsContainer = document.createElement('div');
        showsContainer.className = 'container__shows';
        container.appendChild(showsContainer)

        for (let i = 0; i < showsArray.length; i++) {

            const dateHeading = document.createElement('p');
            dateHeading.className = 'container__shows--heading';
            dateHeading.innerText = 'Date';
            const dateValue = document.createElement('p');
            dateValue.className = 'container__shows--value-bold';
            dateValue.innerText = show.date;
            showsContainer.appendChild(dateHeading);
            showsContainer.appendChild(dateValue);

            const venueHeading = document.createElement('p');
            venueHeading.className = 'container__shows--heading';
            venueHeading.innerText = 'Venue';
            const venueValue = document.createElement('p');
            venueValue.className = 'container__shows--value';
            venueValue.innerText = show.venue;
            showsContainer.appendChild(venueHeading);
            showsContainer.appendChild(venueValue);

            const locationHeading = document.createElement('p');
            locationHeading.className = 'container__shows--heading';
            locationHeading.innerText = 'Location';
            const locationValue = document.createElement('p');
            locationValue.className = 'container__shows--value';
            locationValue.innerText = show.location;
            showsContainer.appendChild(locationHeading);
            showsContainer.appendChild(locationValue);

            const buyTicketsBtn = document.createElement('input');
            buyTicketsBtn.type = "submit";
            buyTicketsBtn.className = "container__shows--buy-tickets";
            buyTicketsBtn.value = 'BUY TICKETS';
            showsContainer.appendChild(buyTicketsBtn);

            const divider = document.createElement('div');
            divider.className = 'container__shows--divider';
            showsContainer.appendChild(divider);
            break
        };
    })
};