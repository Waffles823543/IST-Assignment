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
            let data = {
                name: this.newName,
                desc: this.newBio
            }
            pushPerson(data);
            this.newName = "";
            this.newBio = "";
            document.getElementById("classMembers").style.width = "100%";
            document.getElementById("addNewForm").style.visibility = "hidden";
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
        },
        deletePerson(member){
            console.log(member)
        }
    }
})

function pushPerson(data){
    if(data.name == "" || data.desc == ""){
        return
    }
    $.ajax({ 
        url: "api/classMembers", 
        type: "PUT",
        data: data, 
        success: res => {
            console.log(res);
            classMembers.members = [];
            classMembers.members = res;
        }
    });
}

window.onload = () => {
    $.get( "api/classMembers", data => {
        classMembers.members = data;
        console.log(data);
    });
}