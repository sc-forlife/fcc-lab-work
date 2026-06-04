const currentDate = new Date();

const currentDateFormat = `Current Date and Time: ${currentDate}`;

console.log(currentDateFormat);

export function formatDateMMDDYYYY(date) {
  const newDateFormat = `Formatted Date (MM/DD/YYYY): ${date.toLocaleDateString("en-US")}`;
  console.log(newDateFormat);
  return newDateFormat;
}

export function formatDateLong(date) {
  const options = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  const newDateFormat = `Formatted Date (Month Day, Year): ${date.toLocaleDateString("en-US", options)}`;
  console.log(newDateFormat);
  return newDateFormat;
}
