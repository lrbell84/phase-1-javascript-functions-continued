function saturdayFun(event = "roller-skate") {
    return `This Saturday, I want to ${event}!`;
}// Your code here


let mondayWork = function(event = "go to the office") {
    return `This Monday, I will ${event}.`
}
mondayWork();

function wrapAdjective(rose = "*") {
    return function(str = 'speacial') {
        return `You are ${rose}${str}${rose}!`;
    }
}
