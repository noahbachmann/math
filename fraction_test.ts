import { assertAlmostEquals, assertEquals, assertThrows } from "@std/assert";
import { Fraction } from "./fraction.ts";

Deno.test("FRACTION CONVERT: to string", () => {
	const data = new Fraction(1, 3);
	assertEquals(data.toString(), "1/3");
});

Deno.test("FRACTION: 1/1 is 1.0", () => {
	// Arrange
	const fraction = new Fraction(1, 1);

	// Act
	const float = fraction.toFloat(0.1);

	// Assert
	assertEquals(float, 1.0);
});

Deno.test("FRACTION: 2/3 is ~0.67", () => {
	// Arrange
	const fraction = new Fraction(2, 3);

	// Act
	const float = fraction.toFloat(0.01);

	// Assert
	assertAlmostEquals(float, 0.67);
});

Deno.test("FRACTION ADDITION: 1/3 + 2/6 = 2/3 is ~0.67", () => {
	// Arrange
	const left = new Fraction(1, 3);
	const right = new Fraction(2, 6);

	// Act
	const solution = left.add(right);

	// Assert
	assertAlmostEquals(solution.toFloat(0.01), 0.67);
});

Deno.test("FRACTION SUBSTRACTION: 1/3 - 2/6 = 0/3", () => {
	// Arrange
	const left = new Fraction(1, 3);
	const right = new Fraction(2, 6);

	// Act
	const solution = left.subtract(right);

	// Assert
	assertEquals(solution.toFloat(0.1), 0);
});

Deno.test("FRACTION MULTIPLICATION: 1/3 * 2/6 = 1/9", () => {
	// Arrange
	const left = new Fraction(1, 3);
	const right = new Fraction(2, 6);

	// Act
	const solution = left.multiply(right);

	// Assert
	assertEquals(solution.toFloat(0.01), 0.11);
});

Deno.test("FRACTION DIVISION: 1/3 / 2/6 = 1/1", () => {
	// Arrange
	const left = new Fraction(1, 3);
	const right = new Fraction(2, 6);

	// Act
	const solution = left.divide(right);

	// Assert
	assertEquals(solution, new Fraction(1, 1));
});

Deno.test("FRACTION CANCEL: Cancelling 4/6 should be 2/3", () => {
	//Arrange
	const check = new Fraction(4, 6);

	//Act
	const solution = check.cancel();

	//Assert
	assertEquals(solution, new Fraction(2,3));
})

Deno.test("FRACTION PARSE: parsing '2/6' = 1/3 and error parses", () => {
	//Arrange
	const check = Fraction.parse("2/6");
	//Assert
	assertThrows(
		() => Fraction.parse("1"),
		`illegal syntax: "[numerator]/[denominator]" required`,
	);
	assertThrows(
		() => Fraction.parse("x/2"),
		"non-numeric numerator/denominator",
	);
	assertThrows(
		() => Fraction.parse("2/x"),
		"non-numeric numerator/denominator",
	);
	assertEquals(check, new Fraction(1, 3));
});
