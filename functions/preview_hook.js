exports.handler = async (event, context) => {
	const token = event.queryStringParameters.token || "World";

	return {
		statusCode: 200,
		body: `Hello, ${token}`,
	};
};
