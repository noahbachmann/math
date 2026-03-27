import { assertAlmostEquals, assertEquals, assertThrows } from "@std/assert";
import { Fraction } from "./fraction.ts";

Deno.test("1/3 to float(0.01) is 0.33", () => {
	// Arrange
	const num = new Fraction(1, 3);

	// Assert
	assertEquals(num.toFloat(0.01), 0.33);
});

Deno.test("Convert to string", () => {
	const data = new Fraction(1, 3);
	assertEquals(data.toString(), "1/3");
});

Deno.test("fraction of 1/1 is 1.0", () => {
	// Arrange
	const fraction = new Fraction(1, 1);

	// Act
	const float = fraction.toFloat(0.1);

	// Assert
	assertEquals(float, 1.0);
});

Deno.test("fraction of 2/3 is roughly 0.67", () => {
	// Arrange
	const fraction = new Fraction(2, 3);

	// Act
	const float = fraction.toFloat(0.01);

	// Assert
	assertAlmostEquals(float, 0.67);
});

Deno.test("1/3 + 2/6 = 2/3 is roughly 0.67", () => {
	// Arrange
	const left = new Fraction(1, 3);
	const right = new Fraction(2, 6);

	// Act
	left.add(right);

	// Assert
	assertAlmostEquals(left.toFloat(0.01), 0.67);
});

Deno.test("1/3 - 2/6 = 0/3", () => {
	// Arrange
	const left = new Fraction(1, 3);
	const right = new Fraction(2, 6);

	// Act
	left.subtract(right);

	// Assert
	assertEquals(left.toFloat(0.1), 0);
});

Deno.test("1/3 * 2/6 = 1/9", () => {
	// Arrange
	const left = new Fraction(1, 3);
	const right = new Fraction(2, 6);

	// Act
	left.multiply(right);

	// Assert
	assertEquals(left.toFloat(0.01), 0.11);
});

Deno.test("1/3 / 2/6 = 6/6", () => {
	// Arrange
	const left = new Fraction(1, 3);
	const right = new Fraction(2, 6);

	// Act
	left.divide(right);

	// Assert
	assertEquals(left.toFloat(0.01), 1);
});

Deno.test("Check error parses and parsing 1/3 should be 1/3", () => {
	//Arrange
	const check = Fraction.parse("1/3");
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
	assertEquals(check.toFloat(0.01), 0.33);
});
