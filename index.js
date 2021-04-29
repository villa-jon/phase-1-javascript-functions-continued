// Your code here
function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!` 
}
saturdayFun('bathe my dog'); 

function mondayWork(activity="go to the office") {
    return `This Monday, I will ${activity}.`
}
mondayWork('work from home');

function wrapAdjective(result='*') {
       return function (emphatic = 'a hard worker'){
            return (`You are ${result}${emphatic}${result}!`);
    } 
}
wrapAdjective('||', 'a dedicated programmer')