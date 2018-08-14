export const MembersAPI = {
  members: [
    { id: 1, name: "Tyler Anthony", funFact: "I like backpacking and rock climbing" },
    { id: 2, name: "Thomas Solow", funFact: "I buy only the bext coffee" },
    { id: 3, name: "Brooks Robertson", funFact: "Hoping to be sponspored be RVCA" },
    { id: 4, name: "James Cardona", funFact: "I can ride a bicycle!"}
  ],
  getAll: function() { return this.members },
  getMember: function(id) {
    const isMember = m => m.id === id;
    return this.members.find(isMember);
  }
}