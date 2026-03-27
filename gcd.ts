export class GCD {
	public static BruteForce(a: number, b: number): number {
		let i = Math.min(a / 2, b / 2);
		while (i > 1) {
			if (a % i == 0 && b % i == 0) {
				return i;
			}
			i--;
		}
		return i;
	}
}
