/**
 * Function that takes a Unix timestamp and returns a string representing the time of day in 24-hour format
 * @param {number} timestamp - Unix timestamp
 * @returns {string} - A string representing the time of day in 24-hour format
 */
const timestampToDate = (timestamp) => {
    // Create a new Date object from the Unix timestamp
    const date = new Date(timestamp * 1000);
    // Return a string representing the time of day in 24-hour format
    return date.toTimeString().slice(0, 5);
};

// Make the function available to other scripts
export {timestampToDate};
