var classMembers = new Vue({
    el: '#classMembersContainer',
    data() {
        return {
            members: [],
            active: [],
            newName: "",
            newBio: ""
        }
    },
    methods: {
        addNewMember() {
            this.members.push({
                name: this.newName,
                desc: this.newBio
            })
            this.newName = "";
            this.newBio = "";
            document.getElementById("classMembers").style.width = "100%";
            document.getElementById("addNewForm").style.visibility = "hidden";
        },
        clearClass() {
            this.members = []
        },
        toggle(member){
            if(this.active.includes(member)){
                const index = this.active.indexOf(member);
                if (index > -1) {
                    this.active.splice(index, 1);
                }
            }else{
                this.active.push(member);
            }
        }
    }
})