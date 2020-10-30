let classMemberTemplate = `
	<div v-bind:class='preview'>
		<h1 class="memberName">{{name}}</h1>
		<div v-if="active">
			<h2 class="memberDesc" >{{desc}}</h2>
			<button class="deleteButton" @click.prevent="deletePerson(name)">DELETE</button>
		</div>
	</div>
`;

Vue.component('class-member', {
	props: ["name", "desc", "active", "preview"],
	template: classMemberTemplate,
	methods: {
        deletePerson(member){
			data = {
				name: member
			}
			$.ajax({ 
				url: "api/classMembers", 
				type: "DELETE",
				data: data, 
				success: res => {
					console.log(res);
					classMembers.members = [];
					classMembers.members = res;
				}
			});
        }
	}
})