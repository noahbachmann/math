import { assertEquals, assertThrows } from "@std/assert";
import { GCD } from "./gcd.ts";

Deno.test("(bruteForce) ggT of 12 and 9 is 3", () => {
	//Arrange
	const check1 = GCD.bruteForce(12, 9);
	
	//Assert
	assertEquals(check1, 3);
});

Deno.test("(bruteForce) ggT of 7 and 5 is 1, add other special GCD-checks for 100% coverage", () => {
	//Arrange
	const check1 = GCD.bruteForce(7, 5);
	const check2 = GCD.bruteForce(6, 1);
	const check3 = GCD.bruteForce(0, 6);

	//Assert
	assertEquals(check1, 1);
	assertEquals(check2, 1);
	assertEquals(check3, 0);
	assertThrows(() => GCD.bruteForce(6, 0), `can't divide by 0`);
})

Deno.test("(euclid) ggT of 12 and 9 should be 3", () => {
	//Arrange
	const check1 = GCD.euclid(12, 9);
	const check2 = GCD.euclid(0, 12);
	//Assert
	assertEquals(check1, 3);
	assertEquals(check2, 0);
});