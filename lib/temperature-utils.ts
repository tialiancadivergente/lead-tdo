export const TEMPERATURE_TAG_MAP: Record<string, number> = {
  'q': 121226,
  'm': 121226,
  'f': 121226,
  't': 121226,
  'o': 121228,
  'org': 121228
};

export const NORMALIZED_TEMPERATURE_VALUES = ["q", "f", "m", "t", "org", "ind"] as const;

export type NormalizedTemperature =
  (typeof NORMALIZED_TEMPERATURE_VALUES)[number];

export const TEMPERATURE_TAG_MAP_ORO: Record<string, string> = {
  'q': '[TDO] [AGO26] TRAFEGO',
  'm': '[TDO] [AGO26] TRAFEGO',
  'f': '[TDO] [AGO26] TRAFEGO',
  't': '[TDO] [AGO26] TRAFEGO',
  'o': '[TDO] [AGO26] ORGANICO',
  'org': '[TDO] [AGO26] ORGANICO'
};

export const getTagIdByTemperature = (temperature: string): number | null => {
  return TEMPERATURE_TAG_MAP[temperature] || null;
};

export const getTagByTemperatureOro = (temperature: string): string | null => {
  return TEMPERATURE_TAG_MAP_ORO[temperature] || null;
};

export const isValidTemperature = (temperature: string): boolean => {
  return temperature in TEMPERATURE_TAG_MAP;
};

export const getValidTemperatures = (): string[] => {
  return Object.keys(TEMPERATURE_TAG_MAP);
};

export const normalizeTemperature = (
  value: string | string[] | undefined
): NormalizedTemperature | undefined => {
  const rawValue = Array.isArray(value) ? value[0] : value;
  if (!rawValue) return undefined;

  if (rawValue === "o") {
    return "org";
  }

  if (
    rawValue === "q" ||
    rawValue === "f" ||
    rawValue === "m" ||
    rawValue === "t" ||
    rawValue === "ind" ||
    rawValue === "org"
  ) {
    return rawValue;
  }

  return undefined;
};
