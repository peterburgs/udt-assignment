import data from "./resolveData";
import logger from "../helpers/logger";

export type Listing = {
	name: string;
	container: number;
	totalCost: number;
	index: number;
	weight: number;
};

const results: Listing[] = [];
let neededContainer = data.neededContainer;
logger.info(`neededContainer: ${neededContainer}`);
const listings: Listing[] = data.listings.map((listing, index) => {
	return {
		name: listing.name,
		container: listing.container,
		totalCost: listing.totalCost,
		index: index,
		weight: listing.container / listing.totalCost,
	};
});
listings.sort((a, b) => b.weight - a.weight);
listings.forEach((item) => {
	if (neededContainer > 0) {
		results.push(item);
		neededContainer -= item.container;
	}
});

const rentedContainers = results.reduce(
	(a, b) => (a += b.container),
	0,
);
if (rentedContainers === data.neededContainer) {
	results.forEach((item) => {
		logger.info(
			`[Contract with] ${item.name} ${item.container} container, price: ${item.totalCost}`,
		);
	});
} else {
	logger.error("not enough containers");
}
