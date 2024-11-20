const timestampToDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    // console.log(date.toTimeString().slice(0,5));
    return date.toTimeString().slice(0, 5);
};

export {timestampToDate};