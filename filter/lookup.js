// Find countries that exist based on a lookup object with country names as keys and existence status as values.
// Input: ["India", "USA", "Iran"], { "India": "exists", "USA": "does not exist", "Iran": "exists" }
// Output: ["India", "Iran"]
const findCountriesThatExist = function (countries, lookup) {
    return countries.filter((country) => lookup[country] === "exists");
};

// Find numbers that are marked as 'valid' in the lookup object.
// Input: [10, 20, 30, 40], {10: "valid", 20: "invalid", 30: "valid", 40: "valid"}
// Output: [10, 30, 40]
const findValidNumbers = function (numbers, lookup) {
    return numbers.filter((number) => lookup[number] === "valid");
};

// Find users whose account status is 'active' from the lookup object.
// Input: ["Alice", "Bob", "Charlie"], { "Alice": { status: "active" }, "Bob": { status: "inactive" }, "Charlie": { status: "active" } }
// Output: ["Alice", "Charlie"]
const findActiveUsers = function (users, lookup) {
    return users.filter((user) => lookup[user].status === "active");
};

// Find strings where the length of the string is greater than the corresponding numeric threshold in the lookup object.
// Input: ["apple", "banana", "kiwi"], { "apple": 4, "banana": 5, "kiwi": 6 }
// Output: ["banana"]
const findStringsAboveThreshold = function (strings, lookup) {
    return strings.filter((string) => string.length > lookup[string]);
};

// Find the products whose price is less than a given threshold from the lookup object.
// Input: ["Laptop", "Phone", "Tablet"], { "Laptop": { price: 1000 }, "Phone": { price: 500 }, "Tablet": { price: 300 } }
// Output: ["Phone", "Tablet"]
const findAffordableProducts = function (products, lookup, threshold) {
    return products.filter((product) => lookup[product].price < threshold);
};

// Find students who have scored more than a given score in their exam from the lookup object.
// Input: ["John", "Alice", "Bob"], { "John": 85, "Alice": 92, "Bob": 70 }
// Output: ["John", "Alice"]
const findHighScoringStudents = function (students, lookup, score) {
    return students.filter((student) => lookup[student] > score);
};

// Find employees who have been at the company for more than 5 years based on the lookup object.
// Input: ["John", "Alice", "Bob"], { "John": { yearsAtCompany: 6 }, "Alice": { yearsAtCompany: 4 }, "Bob": { yearsAtCompany: 7 } }
// Output: ["John", "Bob"]
const findLongTermEmployees = function (employees, lookup) {
    return employees.filter((employee) => lookup[employee].yearsAtCompany > 5);
};

// Find cities with a population greater than a threshold provided in the lookup object.
// Input: ["London", "Paris", "Tokyo"], { "London": { population: 9000000 }, "Paris": { population: 2200000 }, "Tokyo": { population: 14000000 } }
// Output: ["London", "Tokyo"]
const findLargeCities = function (cities, lookup, threshold) {
    return cities.filter((city) => lookup[city].population > threshold);
};

// Find items in an inventory whose quantity is greater than 10 based on the lookup object.
// Input: ["item1", "item2", "item3"], { "item1": { quantity: 15 }, "item2": { quantity: 5 }, "item3": { quantity: 20 } }
// Output: ["item1", "item3"]
const findInStockItems = function (items, lookup) {
    return items.filter((item) => lookup[item].quantity > 10);
};

// Find animals whose habitat matches the required type from the lookup object.
// Input: ["Lion", "Elephant", "Shark"], { "Lion": { habitat: "Jungle" }, "Elephant": { habitat: "Jungle" }, "Shark": { habitat: "Ocean" } } , "Jungle"
// Output: ["Lion", "Elephant"]
const findAnimalsByHabitat = function (animalsList, lookup, animalHabitat) {
    return animalsList.filter((animalName) =>
        lookup[animalName].habitat === animalHabitat
    );
};

//-------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------
const testLookupFunction = function (filterFunction, list ,lookup ,target ,expected) {
    const result = filterFunction(list, lookup, target);
    console.log(expected, result);
};

function testFindCountriesThatExist() {
    console.log();
    testLookupFunction(
        findCountriesThatExist,
        ["India", "USA", "Iran"], 
        { "India": "exists", "USA": "does not exist", "Iran": "exists" },
        'exists',
        ["India", "Iran"]
    );
    testLookupFunction(
        findCountriesThatExist,
        ["India", "USA", "Iran"], 
        { "India": "does not exists", "USA": "does not exist", "Iran": "exists" },
        'exists',
        ["Iran"]
    );
    testLookupFunction(
        findCountriesThatExist,
        ["India", "USA", "Iran"], 
        { "India": "does not exists", "USA": "does not exist", "Iran": "does not exists" },
        'exists',
        []
    );
}

function testFindValidNumbers() {
    console.log();
    testLookupFunction(
        findValidNumbers,
        [10, 20, 30, 40], 
        {10: "valid", 20: "invalid", 30: "valid", 40: "valid"},
        'valid',
        [10, 30, 40]
    );
    testLookupFunction(
        findValidNumbers,
        [10, 20, 30, 40], 
        {10: "invalid", 20: "invalid", 30: "invalid", 40: "valid"},
        'valid',
        [40]
    );
    testLookupFunction(
        findValidNumbers,
        [10, 20, 30, 40], 
        {10: "valid", 20: "valid", 30: "valid", 40: "valid"},
        'valid',
        [10, 20, 30, 40]
    );
}

function testFindActiveUsers() {
    console.log();
    testLookupFunction(
        findActiveUsers,
        ["Alice", "Bob", "Charlie"], 
        { "Alice": { status: "active" }, "Bob": { status: "inactive" }, "Charlie": { status: "active" } },
        'active',
        ["Alice", "Charlie"]
    );
    testLookupFunction(
        findActiveUsers,
        ["Alice", "Bob", "Charlie"], 
        { "Alice": { status: "inactive" }, "Bob": { status: "inactive" }, "Charlie": { status: "inactive" } },
        'active',
        []
    );
    testLookupFunction(
        findActiveUsers,
        ["Alice", "Bob", "Charlie"], 
        { "Alice": { status: "active" }, "Bob": { status: "active" }, "Charlie": { status: "active" } },
        'active',
        ["Alice", "Bob", "Charlie"]
    );
}

function testFindStringsAboveThreshold() {
    console.log();
    testLookupFunction(
        findStringsAboveThreshold,
        ["apple", "banana", "kiwi"], 
        { "apple": 4, "banana": 5, "kiwi": 6 },
        0,
        ["apple", "banana"]
    );
    testLookupFunction(
        findStringsAboveThreshold,
        ["apple", "banana", "kiwi"], 
        { "apple": 4, "banana": 5, "kiwi": 2 },
        0,
        ["apple", "banana", "kiwi"]
    );
    testLookupFunction(
        findStringsAboveThreshold,
        ["apple", "banana", "kiwi"], 
        { "apple": 8, "banana": 7, "kiwi": 7 },
        0,
        []
    );
}

function testFindAffordableProducts() {
    console.log();
    testLookupFunction(
        findAffordableProducts,
        ["Laptop", "Phone", "Tablet"], 
        { "Laptop": { price: 1000 }, "Phone": { price: 500 }, "Tablet": { price: 300 } },
        600,
        ["Phone", "Tablet"]
    );
    testLookupFunction(
        findAffordableProducts,
        ["Laptop", "Phone", "Tablet"], 
        { "Laptop": { price: 1000 }, "Phone": { price: 700 }, "Tablet": { price: 650 } },
        600,
        []
    );
    testLookupFunction(
        findAffordableProducts,
        ["Laptop", "Phone", "Tablet"], 
        { "Laptop": { price: 100 }, "Phone": { price: 500 }, "Tablet": { price: 300 } },
        600,
        ["Laptop", "Phone", "Tablet"], 
    );
}

function testFindHighScoringStudents() {
    console.log()
    testLookupFunction(
        findHighScoringStudents,
        ["John", "Alice", "Bob"], 
        { "John": 85, "Alice": 92, "Bob": 70 },
        75,
        ["John", "Alice"]
    );
    testLookupFunction(
        findHighScoringStudents,
        ["John", "Alice", "Bob"], 
        { "John": 45, "Alice": 62, "Bob": 70 },
        75,
        []
    );
    testLookupFunction(
        findHighScoringStudents,
        ["John", "Alice", "Bob"], 
        { "John": 85, "Alice": 92, "Bob": 76 },
        75,
        ["John", "Alice", "Bob"]
    );
}

function testFindLongTermEmployees() {
    console.log();
    testLookupFunction(
        findLongTermEmployees,
        ["John", "Alice", "Bob"], 
        { "John": { yearsAtCompany: 6 }, "Alice": { yearsAtCompany: 4 }, "Bob": { yearsAtCompany: 7 } },
        5, 
        ["John", "Bob"]
    );
    testLookupFunction(
        findLongTermEmployees,
        ["John", "Alice", "Bob"], 
        { "John": { yearsAtCompany: 1 }, "Alice": { yearsAtCompany: 4 }, "Bob": { yearsAtCompany: 7 } },
        5, 
        ["Bob"]
    );
    testLookupFunction(
        findLongTermEmployees,
        ["John", "Alice", "Bob"], 
        { "John": { yearsAtCompany: 1 }, "Alice": { yearsAtCompany: 4 }, "Bob": { yearsAtCompany: 4 } },
        5, 
        []
    );
    testLookupFunction(
        findLongTermEmployees,
        ["John", "Alice", "Bob"], 
        { "John": { yearsAtCompany: 11 }, "Alice": { yearsAtCompany: 14 }, "Bob": { yearsAtCompany: 8 } },
        5, 
        ["John", "Alice", "Bob"], 
    );
}

function testFindLargeCities() {
    console.log();
    testLookupFunction(
        findLargeCities,
        ["London", "Paris", "Tokyo"], 
        { "London": { population: 9000000 }, "Paris": { population: 2200000 }, "Tokyo": { population: 14000000 } },
        15000000,
        []
    );
    testLookupFunction(
        findLargeCities,
        ["London", "Paris", "Tokyo"], 
        { "London": { population: 9000000 }, "Paris": { population: 2200000 }, "Tokyo": { population: 14000000 } },
        10000000,
        ["Tokyo"]
    );
    testLookupFunction(
        findLargeCities,
        ["London", "Paris", "Tokyo"], 
        { "London": { population: 9000000 }, "Paris": { population: 2200000 }, "Tokyo": { population: 14000000 } },
        5000000,
        ["London", "Tokyo"]
    );
}

function testFindInStockItems() {
    console.log();
    testLookupFunction(
        findInStockItems,
        ["item1", "item2", "item3"], 
        { "item1": { quantity: 15 }, "item2": { quantity: 5 }, "item3": { quantity: 20 } },
        10,
        ['item1', 'item3']
    );
    testLookupFunction(
        findInStockItems,
        ["item1", "item2", "item3"], 
        { "item1": { quantity: 10 }, "item2": { quantity: 5 }, "item3": { quantity: 20 } },
        10,
        ['item3']
    );
    testLookupFunction(
        findInStockItems,
        ["item1", "item2", "item3"], 
        { "item1": { quantity: 11 }, "item2": { quantity: 15 }, "item3": { quantity: 20 } },
        10,
        ['item1', 'item2', 'item3']
    );
    testLookupFunction(
        findInStockItems,
        ["item1", "item2", "item3"], 
        { "item1": { quantity: 1 }, "item2": { quantity: 5 }, "item3": { quantity: 2 } },
        10,
        []
    );
}

function testFindAnimalsByHabitat() {
    console.log();
    testLookupFunction(
        findAnimalsByHabitat,
        ["Lion", "Elephant", "Shark"],
        {
            "Lion": { habitat: "Jungle" },
            "Elephant": { habitat: "Jungle" },
            "Shark": { habitat: "Ocean" },
        },
        "Jungle",
        ["Lion", "Elephant"],
    );
    testLookupFunction(
        findAnimalsByHabitat,
        ["Lion", "Elephant", "Shark"],
        {
            "Lion": { habitat: "Jungle" },
            "Elephant": { habitat: "Jungle" },
            "Shark": { habitat: "Ocean" },
        },
        "Ocean",
        ["Shark"],
    );
    testLookupFunction(
        findAnimalsByHabitat,
        ["Lion", "Elephant"],
        { "Lion": { habitat: "Jungle" }, "Elephant": { habitat: "Jungle" } },
        "Jungle",
        ["Lion", "Elephant"],
    );
    testLookupFunction(
        findAnimalsByHabitat,
        ["Lion", "Elephant"],
        { "Lion": { habitat: "Jungle" }, "Elephant": { habitat: "Jungle" } },
        "Ocean",
        [],
    );
}

const testAll = function () {
    testFindAnimalsByHabitat();
    testFindInStockItems();
    testFindLargeCities();
    testFindLongTermEmployees();
    testFindHighScoringStudents();
    testFindAffordableProducts();
    testFindStringsAboveThreshold();
    testFindActiveUsers();
    testFindValidNumbers();
    testFindCountriesThatExist();
    console.log();
};

testAll();