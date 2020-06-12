const locMonth = [
    'Января',
    'Февраля',
    'Марта',
    'Апреля',
    'Мая',
    'Июня',
    'Июля',
    'Августа',
    'Сентября',
    'Ноября',
    'Декабря',
];

export const createDate = () => {
    const date = new Date();
    const day = date.getDate();
    const mounth = date.getMonth();
    const year = date.getFullYear();

    return `${day}  ${locMonth[mounth]}  ${year}`
}