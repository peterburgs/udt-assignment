import { Listing } from "../solution/algorithm";
import logger from "./logger";

const printer = (
	resultListings: Listing[],
	rentedContainers: number,
	neededContainer: number,
	totalCost: number,
) => {
	resultListings.forEach((item) => {
		logger.info(
			`[Contract with] ${item.name} ${item.container} container, price: ${item.totalCost}`,
		);
	});
	if (rentedContainers < neededContainer) {
		logger.info("Not enough containers");
	}
	logger.info(`[Summary] total cost ${totalCost}`);
};

export default printer;
