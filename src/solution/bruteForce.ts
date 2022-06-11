// JavaScript code for Dynamic Programming based
// solution for 0-1 Knapsack problem
// TODO: implement the printing format
import { Listing } from "./algorithm";
// Prints the items which are put
// in a knapsack of capacity W
function knapSack(
	neededContainer: number,
	containers: number[],
	costs: number[],
	n: number,
	listings: Listing[],
): Listing[] {
	const results: Listing[] = [];
	let i, w;
	let K = new Array(n + 1);
	for (i = 0; i < K.length; i++) {
		K[i] = new Array(neededContainer + 1);
		for (let j = 0; j < neededContainer + 1; j++) {
			K[i][j] = 0;
		}
	}

	// Build table K[][] in bottom up manner
	for (i = 0; i <= n; i++) {
		for (w = 0; w <= neededContainer; w++) {
			if (i == 0 || w == 0) K[i][w] = 0;
			else if (containers[i - 1] <= w)
				K[i][w] = Math.max(
					costs[i - 1] + K[i - 1][w - containers[i - 1]],
					K[i - 1][w],
				);
			else K[i][w] = K[i - 1][w];
		}
	}

	// stores the result of Knapsack
	let res = K[n][neededContainer];

	w = neededContainer;
	for (i = n; i > 0 && res > 0; i--) {
		// either the result comes from the top
		// (K[i-1][w]) or from (val[i-1] + K[i-1]
		// [w-wt[i-1]]) as in Knapsack table. If
		// it comes from the latter one/ it means
		// the item is included.
		if (res == K[i - 1][w]) continue;
		else {
			// This item is included.
			results.push(listings[i - 1]);

			// Since this weight is included its
			// value is deducted
			res = res - costs[i - 1];
			w = w - containers[i - 1];
		}
	}
	return results;
}

export default knapSack;

// This code is contributed by avanitrachhadiya2155
