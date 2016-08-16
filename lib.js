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


function groupByManagerName (employees) {
  map={}
  let manNames=employees.filter(function(e){ return e.manager!=undefined
  }).map( function(e){
    return e.manager.name
  }).forEach(function(name){
    map[name]=employees.filter(function(e){if (e.manager && e.manager.name===name) {return true} })
  })
  return map


}


module.exports = {
  employee: employee,
  groupByManagerName: groupByManagerName
}
