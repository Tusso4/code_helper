String.prototype.splitEx = function splitEx(str, separator, limit) {
  if (limit <= 1) return [str];

  const parts = str.split(separator);
  
  if (parts.length <= limit) return parts;

  return [ ...parts.slice(0, limit - 1), parts.slice(limit - 1).join(typeof separator === "string" ? separator : "") ];
}