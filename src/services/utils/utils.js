export const genericResponse = response => {
    /**
     * Prepares a generic response to be sent to Action Layer
     * Purpose is to handle all API response inconsistencies at this level
     * */
    const { data } = response;
    if (response?.status === 200) {
        return {
            data: data.body,
            statusCode: data.status,
            statusMessage: data.message,
            success: true,
        };
    }

    // error case
    return {
        data: data?.body,
        statusCode: data?.status || 500,
        statusMessage: data.message || "something went wrong",
        success: false,
    };
};