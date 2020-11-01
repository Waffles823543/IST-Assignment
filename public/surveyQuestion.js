let surveyQuestionTemplate = `
    <tr>
        <th>
            <h1 id="surveyLabel">{{question}}:</h1>
        </th>
        <th>
            <input id="surveyInput" type="text" v-model="answer">
        </th>
    </tr>
`;

Vue.component('survey-question', {
    props: ["question", "answer"],
	template: surveyQuestionTemplate
})