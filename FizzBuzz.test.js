const FizzBuzz = require('./FizzBuzz');
//1
test('input number 1 return 1',() => {
    expect(FizzBuzz(1)).toBe(1);

});
//2
test('input number 3 return "Fizz"',() => {
    expect(FizzBuzz(3)).toBe("Fizz");

});
//3
test('input number 6 return "Fizz"',() => {
    expect(FizzBuzz(6)).toBe("Fizz");
});
//4
test ('input number 5 return "Buzz"',() => {
    expect(FizzBuzz(5)).toBe("Buzz");
});
//5
test ('input number 101 return "null"',() => {
    expect(FizzBuzz(101)).toBe("null");
});
//6 
test ('input number 15 return "FizzBuzz"',() => {
    expect(FizzBuzz(15)).toBe("FizzBuzz");
});
//7
test ('input number 30 return "FizzBuzz"',() => {
    expect(FizzBuzz(30)).toBe("FizzBuzz");
});



