export const checkBudget = (budget, remaining) =>{
    let className;
    if(budget / 4 > remaining ){
        className = 'alert alert-danger'
    }else if(budget / 2 > remaining){
        className = 'alert alert-warning'
    }else{
        className = 'alert alert-success'
    }
    return className;
}