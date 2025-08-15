export default function formatDateTime(dateTime) {
  if (!dateTime) return "";

  // Convert to Date object
  const dateObj = new Date(dateTime);

  // Check if valid
  if (isNaN(dateObj.getTime())) return "";

  const hasDate =
    dateObj.getFullYear() > 1970 || dateObj.getMonth() > 0 || dateObj.getDate() > 1;
  const hasTime =
    dateObj.getHours() !== 0 || dateObj.getMinutes() !== 0 || dateObj.getSeconds() !== 0;

  const dd = String(dateObj.getDate()).padStart(2, "0");
  const mm = String(dateObj.getMonth() + 1).padStart(2, "0");
  const yyyy = dateObj.getFullYear();

  const hh = String(dateObj.getHours()).padStart(2, "0");
  const min = String(dateObj.getMinutes()).padStart(2, "0");

  if (hasDate && hasTime) return `${dd}.${mm}.${yyyy} ${hh}:${min}`;
  if (hasDate) return `${dd}.${mm}.${yyyy}`;
  if (hasTime) return `${hh}:${min}`;

  return "";
}
