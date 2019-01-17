// function showCllick() {
//     console.log("click")
// // // }
// // //
// // // document.body.addEventListener("click", showCllick);
// // //
// // // const numbers = [1, 2, 4, 66, 99];
// // //
// // // numbers.forEach(value => ()=> result +=  )

// function addAllWords(...words) {
//     let txt = '';
//     // for (let word of words) {
//     //     txt += word;
//     // }
//     words.forEach(word=> txt += word);
//     console.log(txt);
// }
// addAllWords("Mjetek", "henjek");
//
// function addWords(...words) {
//     let txt = '';
//     words.forEach((word) => txt += `${word}`);
//     console.log(txt);
// }
//
// addWords("Heniek", "mjetek");

function showUsers(owner, ...others) {
    console.log(`On party was ${owner} ${others.length ? "and " + 
    others + "," : "."}`)
}

showUsers("Maniek", "Heniek")
