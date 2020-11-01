var classMembers = new Vue({
    el: '#surveyForm',
    data() {
        return {
            questions: [{
                    question: "First Name",
                    answer: ""
                },
                {
                    question: "Last Name",
                    answer: ""
                },
                {
                    question: "Age",
                    answer: ""
                },
                {
                    question: "Question 4",
                    answer: ""
                },
            ]
        }
    },
    methods: {
        submitSurvey() {
            console.log(this.questions)
            
        }
    }
})