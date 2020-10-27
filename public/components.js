let classMemberTemplate = `
	<div v-bind:class='preview'>
		<h1 class="memberName">{{name}}</h1>
		<h2 class="memberDesc" v-if="active">{{desc}}</h2>
	</div>
`;

Vue.component('class-member', {
	props: ["name", "desc", "active", "preview"],
	template: classMemberTemplate
})