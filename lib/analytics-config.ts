const GA_PLACEHOLDER_PATTERNS = [
  /x{4,}/i,
  /your/i,
  /placeholder/i,
  /measurement/i,
  /example/i,
] as const;

export function getValidGaMeasurementId(
  value = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
) {
  const candidate = value?.trim();

  if (!candidate) {
    return null;
  }

  if (!/^G-[A-Z0-9]{6,}$/i.test(candidate)) {
    return null;
  }

  if (GA_PLACEHOLDER_PATTERNS.some((pattern) => pattern.test(candidate))) {
    return null;
  }

  return candidate.toUpperCase();
}

export function getProductionGaMeasurementId(
  value = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
  deploymentEnvironment = process.env.VERCEL_ENV,
) {
  if (deploymentEnvironment !== "production") {
    return null;
  }

  return getValidGaMeasurementId(value);
}
