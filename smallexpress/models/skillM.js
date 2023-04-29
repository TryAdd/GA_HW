const skills = [
    {id: 125223, skill: 'sayHI', done: true},
    {id: 127904, skill: 'sayBye', done: false},
    {id: 139608, skill: 'sayHRU', done: false}
  ];
  
  module.exports = {
    getAll,
    getOne
  };
  
  function getAll() {
    return skills;
  }

  function getOne(id){
    id = parseInt(id)
    return skills.find(skill => skill.id === id)
  }