export function getNowTimeParse() {
  const time = new Date();
  const YYYY = time.getFullYear();
  const MM =
    time.getMonth() < 9 ? '0' + (time.getMonth() + 1) : time.getMonth() + 1;
  const DD = time.getDate() < 10 ? '0' + time.getDate() : time.getDate();
  const hh = time.getHours() < 10 ? '0' + time.getHours() : time.getHours();
  const mm =
    time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes();
  const ss =
    time.getSeconds() < 10 ? '0' + time.getSeconds() : time.getSeconds();
  const ms = time.getMilliseconds();

  return `${YYYY}-${MM}-${DD}T${hh}:${mm}:${ss}.${ms}`;
}
