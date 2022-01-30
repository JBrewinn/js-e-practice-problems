// Christmas Eve is almost upon us, so naturally we need to prepare some milk and cookies for Santa! Create a function that accepts a Date object and returns true if it's Christmas Eve (December 24th) and false otherwise. Keep in mind JavaScript's Date month is 0 based, meaning December is the 11th month while January is 0.

function timeForMilkAndCookies(dateToTest) {
    return (dateToTest.getMonth() === 11) &&
    (dateToTest.getDate() == 24);
}

// console.log(timeForMilkAndCookies(new Date(2024, 11, 24)));

// Your function will be passed two functions, f and g, that don't take any parameters. Your function has to call them, and return a string which indicates which function returned the larger number.

// If f returns the larger number, return the string f.
// If g returns the larger number, return the string g.
// If the functions return the same number, return the string neither.

function f() {
}

function g() {
}

function whichIsLarger(f, g) {
    if (f > g) {
        return "f";
    } else if (g > f) {
        return "g";
    } else if (g = f) {
        return "neither"
    };
}

// console.log(whichIsLarger(() => 15, () => 25));

// Create a function that returns true if the first array can be nested inside the second.

// arr1 can be nested inside arr2 if:

// arr1's min is greater than arr2's min.
// arr1's max is less than arr2's max.

function canNest(arr1, arr2) {
    if (Math.max(...arr1) < Math.max(...arr2) || Math.min(...arr1) > Math.min(...arr2)) {
        return true;
    } else return false;
}

console.log(canNest([9, 9, 8], [8, 9]));