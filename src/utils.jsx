export const getImageUrl = (path) => {
    if (!path) {
        console.error("Path is undefined or empty");
        return "";
    }
    const url = `/assests/${path}`;
    return url;
}