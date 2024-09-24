
const formatDuration = (minutes) => {
    if (!minutes || minutes <= 0) return "Süre Belirtilmemiş";

    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;

    return `${hours > 0 ? hours + 'sa ' : ''}${remainingMinutes > 0 ? remainingMinutes + 'dk' : ''}`;
};

export default formatDuration;
