const getUnixString = (dateString: string) => {
    return Math.floor(new Date(dateString).getTime() / 1000);
};
export default getUnixString;
