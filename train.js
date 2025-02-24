
const letterCounter = (target, string) => {
    let count = 0; 
    for (let i = 0; i < string.length; i++) {
        if (target === string[i]) {
            count++;
        }
    }
    console.log("count:", count);
    return count;
};

letterCounter("l", "Ko‘pincha davlatlar vatandoshlik berishda ikkita mezondan biriga qaraydi: qonga yoki yerga.");

// const list = [
//     "Yaxshi talaba bo`ling",
//     "Tog`ri boshliq tanlang va ko`proq o`qing",
//     "O`zingizning ishlaringizni boshlang",
//     "Siz kuchli bo`lgan narsalarni qiling",
//     "Yoshlarga investitsiya qiling",
//     "Endi dam oling, foydasi yo`q",
// ];
// function maslahatBering(age, callback) {
//     if (typeof age !== "number") return callback("Insert number", null);
//     if (age <= 20) callback(null, list[0]);
//     else if (age > 20 && age <= 30) callback(null, list[1]);
//     else if (age > 30 && age <= 40) callback(null, list[2]);
//     else if (age > 40 && age <= 50) callback(null, list[3]);
//     else if (age > 50 && age <= 60) callback(null, list[4]);
//     else {
//         setTimeout(() => {
//             callback(null, list[5]);
//         }, 5000);
//     }
// }

// console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ --- 1");
// maslahatBering(65, (err, data) => {
//     if (err) console.log("Error:", err);
//     else {
//         console.log("Javob:", data);
//     }
// });

// console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ --- 2");

// async function giveAsyncAdvice(age) {
//     if (typeof age !== "number") throw new Error("Insert number");
//     else if (age <= 20) return list[0];
//     else if (age > 20 && age <= 30) return list[1];
//     else if (age > 30 && age <= 40) return list[2];
//     else if (age > 40 && age <= 50) return list[3];
//     else if (age > 50 && age <= 60) return list[4];
//     else {
//         return new Promise((resolve) => {
//             setTimeout(() => {
//                 resolve(list[5]);
//             }, 5000);
//         });
//     }
// }

// console.log("----------------1");
// giveAsyncAdvice(25)
//     .then((data) => console.log("async answer:", data))
//     .catch(console.error);
// console.log("----------------2");

// async function giveAnswer() {
//     try {
//         let answer = await giveAsyncAdvice(20);
//         console.log("with await: ", answer);
//         answer = await giveAsyncAdvice(90);
//         console.log("with await: ", answer);
//         answer = await giveAsyncAdvice(40);
//         console.log("with await: ", answer);
//         answer = await giveAsyncAdvice(50);
//         console.log("with await: ", answer);
//         answer = await giveAsyncAdvice(60);
//         console.log("with await: ", answer);
//     } catch (err) {
//         console.error(err);
//     }
// }
// giveAnswer();

// function giveAdvice(age, callback) {
//     if (typeof age !== "number") callback("Insert number", null);
//     else if (age <= 20) callback(null, list[0]);
//     else if (age > 20 && age <= 30) callback(null, list[1]);
//     else if (age > 30 && age <= 40) callback(null, list[2]);
//     else if (age > 40 && age <= 50) callback(null, list[3]);
//     else if (age > 50 && age <= 60) callback(null, list[4]);
//     else {
//         setInterval(() => {
//             callback(null, list[5]);
//         }, 1000);
//     }
// }

// giveAdvice(65, (err, data) => {
//     if (err) console.log("error:", err);
//     else {
//         console.log("answer:", data);
//     }
// });
