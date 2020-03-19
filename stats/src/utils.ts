export const dataStrtoDate = (date: string): Date => {
  const dateParts = date.split('/').map(dstr => parseInt(dstr));

  return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};
