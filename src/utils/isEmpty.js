export function isEmpty(obj) {
  return obj === null || obj === undefined || obj === "" || obj.length === 0;
}

export function isUndefined(obj) {
  return obj === undefined;
}

export function isObject(obj) {
  return typeof obj === "object";
}
