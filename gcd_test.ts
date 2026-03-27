import { assertEquals } from "@std/assert/equals";
import { GCD } from "./gcd.ts";

Deno.test("ggT of 9 and 6 is 3", () => {
	//Arrange
	const check = GCD.BruteForce(9, 6);

	//Assert
	assertEquals(check, 3);
});
