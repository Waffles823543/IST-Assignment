var responses = new Vue({
    el: '#responsesContainer',
    data() {
        return {
            responses: []
        }
    },
    methods: {
        refresh() {
            console.log("refresh")
            getResponses()
        }
    }
})

let getResponses = function() {
    $.get( "api/survey", data => {
        console.log(data);
        responses.responses = data;
    });
}

window.onload = getResponses;