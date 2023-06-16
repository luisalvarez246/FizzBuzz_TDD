//Test for fizzbuzz

const	FizzBuzz = require("./fizzbuzz");

describe ("Verify FizzBuzz numbers that can be divided between 3 & 5", () =>
	{
		test("45 should return FizzBuzz", () =>
		{
			//Arrange
			let nbr = 45;
			let expectedResult = "FizzBuzz";

			//Act
			let result = FizzBuzz(nbr);

			//Assert
			expect(result).toBe(expectedResult);
		})
		test("18 should return Fizz", () =>
		{
			//Arrange
			let	nbr = 18;
			let	expectedResult = "Fizz";
			//Act
			let result = FizzBuzz(nbr);
			//Assert
			expect(result).toBe(expectedResult);
		})
		test("50 should return Buzz", () =>
		{
			//Arrange
			let	nbr = 50;
			let	expectedResult = "Buzz";
			//Act
			let result = FizzBuzz(nbr);
			//Assert
			expect(result).toBe(expectedResult);
		})
		test("44 should return 44", () =>
		{
			//Arrange
			let	nbr = 44;
			let	expectedResult = 44;
			//Act
			let result = FizzBuzz(nbr);
			//Assert
			expect(result).toBe(expectedResult);
		})
	}
);