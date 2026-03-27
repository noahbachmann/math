import { assertAlmostEquals, assertEquals } from "@std/assert";
import { Circle, Point2D, Rectangle } from "./geometry.ts";

Deno.test("circumference of a circle with radius 5 is roughtly 31.416", () => {
	// Given
	const circle = new Circle(new Point2D(3, 4), 5);

	// When
	const actual = circle.circumference();

	// Then
	assertAlmostEquals(actual, 31.416, 0.01);
});

Deno.test("area of a circle with radius 5 is roughly 78.54", () => {
	// Given
	const circle = new Circle(new Point2D(3, 4), 5);

	// When
	const actual = circle.area();

	// Then
	assertAlmostEquals(actual, 78.54, 0.01);
});

Deno.test("diameter of a circle with radius 5 is 10", () => {
	// Given
	const circle = new Circle(new Point2D(3, 4), 5);

	// When
	const actual = circle.diameter();

	// Then
	assertEquals(actual, 10);
});

Deno.test(
	"circumference of a rectangle with width and height of 3 is 12 (3*4)",
	() => {
		// Given
		const rectangle = new Rectangle(new Point2D(0, 0), new Point2D(3, 3));

		// When
		const actual = rectangle.circumference();

		// Then
		assertEquals(actual, 3 * 4);
	},
);

Deno.test("area of a rectangle with width and height of 3 is 9 (3*3)", () => {
	// Given
	const rectangle = new Rectangle(new Point2D(0, 0), new Point2D(3, 3));

	// When
	const actual = rectangle.area();

	// Then
	assertEquals(actual, 3 * 3);
});

Deno.test(
	"diagonal of a rectangle with width and height of 3 is about 4.24",
	() => {
		// Given
		const rectangle = new Rectangle(new Point2D(0, 0), new Point2D(3, 3));

		// When
		const actual = rectangle.diagonal();

		// Then
		assertAlmostEquals(actual, 4.24, 0.01);
	},
);
