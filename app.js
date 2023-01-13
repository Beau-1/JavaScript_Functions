console.log("JavaScript Functions, bro\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1: Odds Only Please\n==========\n");

function printOdds(count) {
    for (let b = 1; b <= count; b++) {
        if (b % 2 != 0) {
            console.log(b);
        }
    }
}
printOdds(101);



// Exercise 2 Section
console.log("EXERCISE 2: The Turtles go to the DMV\n==========\n");
function checkAge(name, age) {
    let oldEnough = `Congrats ${name}! You can drive! Buckel up.`;
    let tooYoung = `Sorry, kid, or ${name}, or whoever. You're still too young to drive. Now this is the third  time this week. Get out of here!`;

    if (age < 16) {
        console.log(tooYoung);
    } else {
        console.log(oldEnough);
    }
}

checkAge("Michelangelo", 14)
checkAge("Raphael", 15)
checkAge("Donatello", 16)
checkAge("Leonardo", 17)


console.log("EXERCISE 3: Quadrent Scan \n==========\n");
function quadrentScaner(x, y) {
    if (x == 0 && y == 0) {
        return "The object's location is the Origin, Captain."
    } else if (x == 0 && y != 0) {
        return "The object is dead-on the x-axis, and it's heading straight for us, Captain!"
    } else if (x != 0 && y == 0) {
        return "The object is on the y-axis perfectly. It is moving away from us, Captain."
    } else if (x > 0 && y > 0) {
        return "The object is registering in quadrent one, Captain."
    } else if (x < 0 && y > 0) {
        return "The object is in quadrent two, Captain."
    } else if (x < 0 && y < 0) {
        return "The object has moved and now appears to be in quadrent three, Captain."
    } else if (x > 0 && y < 0) {
        return "The object is in quadrent four and moving with us, Captain."
    } else {
        return "Unknown"
    }

}

console.log(quadrentScaner(-6, 9));
console.log(quadrentScaner(6, -9));
console.log(quadrentScaner(0, 9));
console.log(quadrentScaner(0, 0));
console.log(quadrentScaner(-6, 6));
console.log(quadrentScaner(6, 8));
console.log(quadrentScaner(7, 0));




console.log("EXERCISE 4:\n==========\n");
function typeOfTriangle(side1, side2, side3) {
    let isValid = false;
    if (side1 + side2 > side3 && side2 + side3 > side1 && side1 + side3 > side2) {
        isValid = true;
    }
    if (isValid) {
        if (side1 == side2 && side2 == side3) {
            console.log(
                `Side ${side1}, ${side2}, ${side3} form an equaleteral triangle.`
            );
        }else if (side1 == side2 || side2 == side3) {
            console.log(
                `Sides ${side1}, ${side2}, ${side3} form an isosceles triangle`
            );
        }else if (side1 != side2 && side2 != side3 && side3 != side1) {
            console.log(
                `Sides ${side1}, ${side2}, ${side3} form a scalene triangle`
            );
        }
    }
    if (isValid == false) {
        console.log("That's no triangle.");
    }
}
typeOfTriangle(2,2,2); //equilateral
typeOfTriangle(1,2,2); //isosceles
typeOfTriangle(2,3,4) //scalene 
typeOfTriangle(1,1,2); //not a triangle