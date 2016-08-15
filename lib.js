function employee (name, manager) {
  return {
    name: name,
    manager: manager
  }
}

/**
 * Returns an array of employees (chosen from the given array of employees)
 * whose manager is the same as the given manager. This should not alter
 * the given array! A new array should be created to contain the results.
 *
 * @param manager the manager to filter by
 * @param employees the employees to choose from
 */
function underlings (manager, employees) {
  let underlings = []
  for (let i=0; i<employees.length; i++) {
    if (employees[i].manager===manager) {
      underlings.push(employees[i])
    }
  }
  return underlings
}

function groupByManagerName (employees) {
  //array of managers
  function isManager(em){
    for(let emp of employees){
      if(emp.manager===em){
        return true
      }
    }
    return false
  }
  let managers=employees.filter(function(man, index, array){

    for(let emp of array){
      if(emp.manager===man){
        return true
      }
    }
    return false

  })
  let manNames=managers.map( function(e){
    return e.name
  })
var map={}
  manNames.forEach(function(manager){
    var peons
    map[manager.name]=underlings(manager,employees)
  })
  return map
//object of manager names as keys, employee arrays as values
  //let obj=managers.map(new function(e){return underlings(e,employees)})
  //let map=managers.forEach(new function(e){


}


module.exports = {
  employee: employee,
  underlings: underlings,
  groupByManagerName: groupByManagerName
}
