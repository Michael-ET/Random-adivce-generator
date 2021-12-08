const intro =['what you need, right, is to ', 'see, Here’s your problem, you need to ', 'My sister’s cousin said to ', 'The boss say’s ', 'Never listen to the manual, if you’ve got a problem just '];
const middle = ['stick a spanner in it', 'grease up the whirly bits','divert power to the warp core', 'take the plug out and put it back in again', 'replace the plutonium rods', 'chuck some sulphuric acid in the engine', 'ignore it, it’ll fix itself', '']
const end = [' and bob’s your uncle.', ', That’ll keep the leprechauns away.',', that’ll be £4000.', ' and your hairdryer will work fine.', ' or it’ll explode within the hour.', ' and youll be back on the road in no time.', ' and youre all set.']

function phraseSelect(){
    const dodgyAdvice = []

    let firstP = intro[Math.floor(Math.random()*intro.length)];
    let secondP = middle[Math.floor(Math.random()*middle.length)];
    let thirdP = end[Math.floor(Math.random()*end.length)];

dodgyAdvice.push(firstP);
dodgyAdvice.push(secondP);
dodgyAdvice.push(thirdP);

return dodgyAdvice
}

console.log("Dodgy advice: " + phraseSelect().join(""))

       