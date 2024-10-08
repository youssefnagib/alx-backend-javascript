export const weakMap = new WeakMap();

const MAX_ENDPOINT_CALLS = 5;

export function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }
  const queryCount = weakMap.get(endpoint);
  if (queryCount >= MAX_ENDPOINT_CALLS) {
    throw new Error('Endpoint load is high');
  }
  weakMap.set(endpoint, queryCount + 1);
}
