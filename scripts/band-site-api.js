const apiKey = '2fa79028-8fe0-4b68-abd1-b04f54b0dd8e';
const baseUrl = 'https://project-1-api.herokuapp.com'



axios.get(`${baseUrl}/register`)
    .then ((response) => {
        console.log(response);
        console.log(response.data.api_key);
        return response.data.api_key;
    }
);

class BandSiteApi {
    constructor (apiKey) {         
        this.apiKey = apiKey;
        this.baseUrl = baseUrl;
    }
    getComment() {
        return axios.get(this.baseUrl + '/comments?api_key=' + this.apiKey)
            .then ((response) => 
                (response)
            )
    }
    getShows() {
        return axios.get(this.baseUrl + '/showdates?api_key=' + this.apiKey)
        .then ((response) => 
            (response)
        )
    }
    postComment() {
        return axios.post(this.baseUrl + '/comments?api_key=' + this.apiKey)
        .then ((response) => 
            (response)
        )
    }
};

const bandSiteApi = new BandSiteApi (apiKey);
    bandSiteApi.getComment()
    .then ((response) => {
        console.log(response.data)
    })
    bandSiteApi.getShows()
    .then ((response) => {
        console.log(response.data)
    })






    // google MDN docs defining method withinj JS class (syntax)



