var classMembers = new Vue({
    el: '#classMembersContainer',
    data() {
        return {
            members: [{
                    name: "Rafael Deubler",
                    desc: 'Can code it\'s funky'
                },
                {
                    name: "Sam Dunn",
                    desc: 'sam, just sam'
                },
                {
                    name: "Samuel Ezra",
                    desc: 'doesn\'t have a foil'
                },
                {
                    name: "Dror Liraz",
                    desc: 'she speaks hebrew, and trys hard at english'
                },
                {
                    name: "Nathan Tietzel-Berry",
                    desc: 'short'
                },
                {
                    name: "Alonzo Navaro",
                    desc: 'whistles'
                },
                {
                    name: "Alex Toot",
                    desc: '[redacted]'
                },
                {
                    name: "Zara Joseph",
                    desc: 'try hard'
                },
                {
                    name: "Colin Wu",
                    desc: 'smart'
                },
                {
                    name: "Brian Wu",
                    desc: 'Colin\'s twin'
                },
                {
                    name: "Lam Ngyuen",
                    desc: 'Lam'
                },
                {
                    name: "DJwayne Quintana",
                    desc: 'sam says he is thicccccc'
                },
                {
                    name: "Jake Podesta",
                    desc: 'sus'
                },
                {
                    name: "Shaan Daly",
                    desc: 'like cricket I think'
                },
                {
                    name: "Jordan Bennet",
                    desc: 'Like soccer or cricket idk'
                },
                {
                    name: "Jackson Day",
                    desc: 'I think he type kinda fast'
                },
                {
                    name: "Jet Nathan",
                    desc: 'Nazi'
                },
                {
                    name: "Feliks Wilkinson",
                    desc: 'has $$$'
                },
                {
                    name: "Jindrich Stebetak",
                    desc: 'plays some game that has a ball'
                },
                {
                    name: "Tamzid Hossain",
                    desc: 'oporto'
                },
                {
                    name: "Anuj Rai",
                    desc: 'Kerry calls him Amy for some reason'
                },
                {
                    name: "Carlos Calderon",
                    desc: 'Caaaaaaaarl'
                },
                {
                    name: "Etai Sofer",
                    desc: 'Quiet'
                },
                {
                    name: "Mark Andres",
                    desc: 'Eshay'
                },
            ],
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