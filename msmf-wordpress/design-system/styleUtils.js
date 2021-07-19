export const manageComponentState = (classes = null, baseClasses, state) => {
  let classList = classes && classes.root ? classes.root.trim() !== "" ? classes.root : baseClasses.root : baseClasses.root;

  if(state.trim() !== ""){
    if(classes[state] && classes[state].trim() !== ""){
      classList = `${classList} ${classes[state]}`
    }else {
      classList = `${classList} ${baseClasses[state]}` 
    }
  }
  return classList;
}