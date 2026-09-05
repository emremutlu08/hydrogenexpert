export {
  COMMERCIAL_INTENT_OWNERS,
  COMMERCIAL_INTENT_PATHS,
  HIRING_INTENT_OWNER_PATH,
  HIRING_INTENT_REDIRECTS,
  RETIRED_COMMERCIAL_INTENT_OWNERS,
  RETIRED_COMMERCIAL_INTENT_PATHS,
  getCommercialIntentOwner,
  isCommercialIntentPath,
  isRetiredCommercialIntentPath,
  resolveCommercialIntentPath,
  normalizeCommercialLinks,
} from "./manifest";
export type { CommercialIntentOwner, CommercialIntentPath } from "./manifest";
export {
  AGENCY_CANNIBALIZATION_GATE_DATE,
  evaluateAgencyCannibalizationGate,
  MEANINGFUL_URL_REDUCTION_RATIO,
} from "./cannibalization-gate";
export type { AgencyGateDecision, AgencyGateResult } from "./cannibalization-gate";
