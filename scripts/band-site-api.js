const baseUrl = 'https://project-1-api.herokuapp.com';

const ApiKey = axios.get(`${baseUrl}/register`)
    .then ((response) => {
        console.log(response);
        console.log(response.data.api_key);
        return response.data.api_key;
    }
);

const apiKeyUrl = `?api_key=${ApiKey}`;
console.log(apiKeyUrl);

class BandSiteApi {
    constructor (apiKey) {
        this.apiKey = apiKey;
        this.baseUrl = baseUrl;
    }

};



