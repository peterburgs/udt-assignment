import data from "./resolveData";
import logger from "../helpers/logger";
import knapSack from "./bruteForce";
import printer from "../helpers/printer";

export type Listing = {
	name: string;
	container: number;
	totalCost: number;
	index?: number;
	weight?: number;
};

const execute = (
	initialListings: Listing[],
	neededContainer: number,
) => {
	const listings: Listing[] = enrichListings(initialListings);
	verifyResults(listings, neededContainer);
};

const enrichListings = (listings: Listing[]): Listing[] => {
	const enrichedListings = listings.map((listing, index) => {
		return {
			name: listing.name,
			container: listing.container,
			totalCost: listing.totalCost,
			index: index,
			weight: listing.container / listing.totalCost,
		};
	});
	return enrichedListings;
};

const processListings = (
	listings: Listing[],
	neededContainer: number,
): Listing[] => {
	const results: Listing[] = [];

	let _neededContainer = neededContainer;
	listings.sort((a, b) =>
		b.weight && a.weight ? b.weight - a.weight : 0,
	);
	const _listings = listings.map((item) => item);
	_listings.forEach((item) => {
		if (_neededContainer > 0 && _neededContainer >= item.container) {
			results.push(item);
			_neededContainer -= item.container;
		}
	});
	return results;
};

const verifyResults = (
	listings: Listing[],
	neededContainer: number,
) => {
	const results = processListings(listings, neededContainer);

	console.log(getRentedContainer(results));

	if (getRentedContainer(results) === neededContainer) {
		printer(
			results,
			getRentedContainer(results),
			neededContainer,
			getCost(results),
		);
	} else {
		logger.info("Trying with Brute Force...");
		const bruteForceResults = runBruteForce(
			listings,
			neededContainer,
		);
		printer(
			bruteForceResults,
			getRentedContainer(bruteForceResults),
			neededContainer,
			getCost(bruteForceResults),
		);
	}
};

const runBruteForce = (
	listings: Listing[],
	neededContainer: number,
) => {
	const containers = listings.map((item) => item.container);
	const costs = listings.map((item) => item.totalCost);

	return knapSack(
		neededContainer,
		containers,
		costs,
		containers.length,
		listings,
	);
};

const getCost = (resultListings: Listing[]) => {
	return resultListings.reduce((a, b) => (a += b.totalCost), 0);
};

const getRentedContainer = (resultListings: Listing[]) => {
	return resultListings.reduce((a, b) => (a += b.container), 0);
};
// Run the algorithm
execute(data.listings, data.neededContainer);
//
