/* eslint-disable @typescript-eslint/no-explicit-any */
export function getSessionStorage(key: any) {
  const sessionStorageValue = JSON.parse(
    window.sessionStorage.getItem(key) || '{}',
  );
  return sessionStorageValue;
}
export default getSessionStorage;
