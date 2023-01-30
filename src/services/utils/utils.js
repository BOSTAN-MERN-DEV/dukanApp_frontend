export const genericResponse = res => {
    if (res?.status === 200) {
        return { data: res?.data?.body, statusCode: res.status, statusMessage: res.data.message, success: true };
    } else {
        return { data: res.body, statusCode: res.status || 500, statusMessage: res.message || "something went wrong", success: false };
    }
};