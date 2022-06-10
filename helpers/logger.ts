import { Logger } from "tslog";

const logger: Logger = new Logger({
	name: "myApp",
	displayFunctionName: false,
	displayFilePath: "hidden",
	printLogMessageInNewLine: true,
});
export default logger;
