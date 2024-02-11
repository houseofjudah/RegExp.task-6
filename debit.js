

// let mastercard =  /^5\d{3}.\d{4}.\d{4}.\d{4}| 720[0-9]{12}$/;
// console.log(mastercard.test("5188 8648 2720 8974"));



let visa = /^4\d{3}.\d{4}.\d{4}.\d{4}/.test('4188 8648 9085 8974');
console.log(visa);

let verve = /^5061.\d{4}.\d{4}.\d{6}| ^5062.\d{4}.\d{4}.\d{4,5}.\d{5}/
console.log(verve.test("5061 0017 2345 678902"));




