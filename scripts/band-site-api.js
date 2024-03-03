const apiKey = '2fa79028-8fe0-4b68-abd1-b04f54b0dd8e';
const baseUrl = 'https://project-1-api.herokuapp.com';

axios.get(`${baseUrl}/register`)
    .then ((response) => {
        return response;
    }
);

class BandSiteApi {
    constructor (apiKey) {         
        this.apiKey = apiKey;
        this.baseUrl = baseUrl;
    }
    getComment() {
        return axios.get(this.baseUrl + '/comments?api_key=' + this.apiKey)
        .then ((response) => {
            return response.data
        })
    }
    getShows() {
        return axios.get(this.baseUrl + '/showdates?api_key=' + this.apiKey)
        .then ((response) => {
            return response.data
        })
    }
    postComment(postBody) {
        return axios.post(this.baseUrl + '/comments?api_key=' + this.apiKey, postBody)
        .then ((response) => {
            return response.data
        })
    }
    deleteComment() {
        return axios.delete(this.baseUrl + `/comments/${delId}?api_key=` + this.apiKey)
        .then ((response) => {
            return response.data
        })
    }
};








