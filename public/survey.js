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
                    question: "Do you think you have been taught IST well",
                    answer: ""
                },
                {
                    question: "If you could change something about IST what would it be",
                    answer: ""
                },
                {
                    question: "How proficient would you describe yourself with the content taught in IST",
                    answer: ""
                }
            ]
        }
    },
    methods: {
        submitSurvey() {
            let PutData = {answers: []}
            for (q of this.questions){
                PutData.answers.push(q.answer)
            }
            console.log(PutData)
            $.ajax({ 
                url: "api/survey", 
                type: "PUT",
                data: PutData, 
                success: res => {
                    console.log(res);
                    for (q of this.questions){
                        q.answer = "";
                    }
                }
            });
        }
    }
})