export class GCD {
	public static bruteForce(a: number, b: number): number {
		[a, b] = this.firstCheck(a, b);

		let i = a;
		while (i > 1) {
			if (a % i == 0 && b % i == 0) {
				return i;
			}
			i--;
		}
		return i;
	}

	public static euclid(a: number, b: number): number {
		[a, b] = this.firstCheck(a, b);

		while (a != b) {
			const c = b - a;
			if (a > c) {
				b = a;
				a = c;
			} else {
				b = c;
			}
		}
		return a;
	}

	private static firstCheck(a: number, b: number): [number, number]  {
		if (b === 0) {
			throw new Error(`can't divide by 0`);
		}
		if (a === 0) {
			return [1, 1];
		}

		a = Math.abs(a);
		b = Math.abs(b);
		if (a <= b) {
			return [a, b];
		}
		return [b, a];
	}
}
