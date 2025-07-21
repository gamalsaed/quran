export async function fetchElSwar() {
  const elSwar = await fetch("https://alquran.vip/APIs/surahs");
  const data = await elSwar.json();
  return data;
}
