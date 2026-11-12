import {v4 as uuidv4} from "uuid";

const getBaseUrl = () => {
    if (typeof window !== "undefined" && window.location && window.location.origin) {
        return `${window.location.origin}${window.location.pathname}`;
    }
    return "http://localhost:5173/";
};

const generateCollabLink = () => {
    const uniqueId = uuidv4();
    const base = getBaseUrl();
    const separator = base.includes("?") ? "&" : "?";
    return `${base}${separator}roomID=${uniqueId}`;
};

const redirectToCollabLink = () => {
    const link = generateCollabLink();
    window.location.replace(link);
};

export default redirectToCollabLink;