
const isValue = (val: any, allowEmptyString: boolean) => {
  if (val === undefined || val === null) return false;
  if (!allowEmptyString && val === "") return false;
  if (Array.isArray(val) && val.length === 0) return false;
  if (typeof val === 'object') {
    if (Object.keys(val).length === 0) return false;
    const isValid = Object.values(val).find((v) => isValue(v, allowEmptyString));
    if (isValid === undefined) return false;
  }
  return true;
};

export const ClearObject: any = (obj: any, allowEmptyString: boolean = true) => {
  if (Array.isArray(obj)) {
    const temp = obj.filter((val) => isValue(val, allowEmptyString));
    return temp.map((val) => {
      return ClearObject(val, allowEmptyString);
    })
  }
  if (typeof obj === 'object')
    Object.keys(obj).map((key) => {
      if (!isValue(obj[key], allowEmptyString)) return delete obj[key];
      if (Array.isArray(obj[key])) {
        const temp = obj[key].filter((val: any) => isValue(val, allowEmptyString));
        return (obj[key] = temp.map((val: any) => {
          return ClearObject(val, allowEmptyString);
        }));
      }
      if (typeof obj[key] === 'object')
        return (obj[key] = ClearObject(obj[key], allowEmptyString));
    });
  return obj;
};

export function ClearObjectWithType<T>(obj: T, allowEmptyString: boolean = true): NonNullable<T> {
  const res = ClearObject(obj, allowEmptyString);
  return res;
}
