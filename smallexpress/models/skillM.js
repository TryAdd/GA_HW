const skills = [
    {id: 125223, skill: 'sayHI', done: true},
    {id: 127904, skill: 'sayBye', done: false},
    {id: 139608, skill: 'sayHRU', done: false},
  ];
  
  module.exports = {
    getAll,
    getOne,
    addNew,
  };
  
  function getAll() {
    return skills;
  }

  function getOne(id){
    id = parseInt(id)
    return skills.find(skill => skill.id === id)
  }

  function addNew(skillname){
    // const lastIndex = skills[skills.length-1];

    const id = skills.length === 0 ? 0 : skills[skills.length-1].id+1
    const skill = {id: id , skill: skillname, done: false}
    skills.push(skill)
  }