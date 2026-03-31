import { assertEquals, assertThrows } from "@std/assert";
import { GCD } from "./gcd.ts";

const testVariables = [
	{ a: 7, b: 5, gcd: 1 },
	{ a: 6, b: 1, gcd: 1 },
	{ a: 0, b: 6, gcd: 1 },
	{ a: 81, b: 36, gcd: 9 },
];

Deno.test("GCD(bruteForce) using testVariables", () => {
	for (const { a, b, gcd } of testVariables) {
		//Arrange and Act
		const actual = GCD.bruteForce(a, b);
		//Assert
		assertEquals(actual, gcd);
	}
});

Deno.test("GCD(euclid) using testVariables", () => {
	for (const { a, b, gcd } of testVariables) {
		//Arrange and Act
		const actual = GCD.euclid(a, b);
		//Assert
		assertEquals(actual, gcd);
	}
});

Deno.test("GCD null division check (error thrown)", () => {
	assertThrows(() => GCD.euclid(3, 0), `can't divide by 0`);
})