import axios from 'axios'
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";
export default {
    getData: function() {
        return axios.get('/api/Strikedata')
    },
    getPresident: function(){
        return axios.get('/api/CommanderinChief')
    },
    getYear: function() {
        return axios.get('/api/StrikesByYear')
    },
    postContribute: function(contribdata){
        return axios.post('/api/Contributedata/', contribdata)
    }
}
