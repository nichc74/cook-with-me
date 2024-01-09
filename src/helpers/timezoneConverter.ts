export function convertUTCtoLocalTimeZone (dateTime: string) {
    if (!dateTime) {
        return "";
    }
    const utcDate = new Date(dateTime);
    const timeZoneOffset = utcDate.getTimezoneOffset();
    const localDate = new Date(utcDate.getTime() - (timeZoneOffset));
    const formattedLocalTime = localDate.toLocaleString();
    return formattedLocalTime;
}

export function convertUTCtoLocalDate (dateTime: string) {
    if (!dateTime) {
        return "";
    }
    const utcDate = new Date(dateTime);

    const formattedLocalTime = utcDate.toLocaleDateString();
    return formattedLocalTime;
}