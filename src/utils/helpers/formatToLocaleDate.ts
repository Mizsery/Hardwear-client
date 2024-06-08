export const formatToLocaleDate = (date?: Date) => {
  if (!date) {
    return '';
  }

  const newDate = new Date(date);
  const time = newDate.toLocaleTimeString(['ru'], { hour: '2-digit', minute: '2-digit' });
  const formatDate = newDate.toLocaleDateString(['ru'], {
    weekday: 'short',
    year: 'numeric',
    month: 'long',
    day: '2-digit'
  });

  return `${formatDate} ${time}`;
};
