import baseConfig from "./base-config";
import clients from "./clients-data";

function deepMerge(target, source) {
  const result = { ...target };
  for (const key of Object.keys(source)) {
    const srcVal = source[key];
    const tgtVal = target[key];
    if (
      srcVal &&
      typeof srcVal === "object" &&
      !Array.isArray(srcVal) &&
      tgtVal &&
      typeof tgtVal === "object" &&
      !Array.isArray(tgtVal)
    ) {
      result[key] = deepMerge(tgtVal, srcVal);
    } else {
      result[key] = srcVal;
    }
  }
  return result;
}

function interpolate(obj, tokens) {
  if (typeof obj === "string") {
    return obj.replace(/\{\{(\w+)\}\}/g, (_, key) =>
      tokens[key] !== undefined ? String(tokens[key]) : `{{${key}}}`
    );
  }
  if (Array.isArray(obj)) {
    return obj.map((item) => interpolate(item, tokens));
  }
  if (obj && typeof obj === "object") {
    const result = {};
    for (const key of Object.keys(obj)) {
      result[key] = interpolate(obj[key], tokens);
    }
    return result;
  }
  return obj;
}

export function resolveConfig(clientSlug) {
  const clientData = clients[clientSlug];
  if (!clientData) return null;

  // Merge client overrides into base config
  const merged = deepMerge(baseConfig, clientData);

  // Build token map for interpolation
  const tokens = {
    companyName: clientData.companyName,
    companyFullName: clientData.companyFullName,
    phone: clientData.phone,
    phoneRaw: clientData.phoneRaw,
    email: clientData.email,
    street: clientData.address.street,
    city: clientData.address.city,
    state: clientData.address.state,
    zip: clientData.address.zip,
    reviewCount: clientData.reviews.count,
    rating: clientData.reviews.rating,
  };

  // Interpolate all string values
  return interpolate(merged, tokens);
}

export function getClientSlugs() {
  return Object.keys(clients);
}
