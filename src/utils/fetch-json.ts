export const fetchJson = async <T>(url: string): Promise<T> => {
  const rawData = await fetch(url);
  const { data, meta } = await rawData.json();
  const unionData = Object.assign(data, meta);
  return unionData;
};
