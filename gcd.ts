export class GCD {
	public static BruteForce(a: number, b: number): number {
		if (b === 0) {
			throw new Error(`can't divide by 0`);
		}
		if (a === 0) {
			return 0;
		}

		a = Math.abs(a)
		b = Math.abs(b)
		
		if(a === 1 || b === 1) {
			return 1;
		}

		let i = Math.min(a, b);
		while (i > 1) {
			if (a % i == 0 && b % i == 0) {
				return i;
			}
			i--;
		}
		return i;
	}
}
