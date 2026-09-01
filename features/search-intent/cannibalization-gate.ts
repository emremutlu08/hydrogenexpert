export const AGENCY_CANNIBALIZATION_GATE_DATE = "2026-09-05";
export const MEANINGFUL_URL_REDUCTION_RATIO = 0.3;

export type AgencyGateDecision = "wait" | "keep" | "rewrite" | "consolidate" | "observe";

interface AgencyGateInput {
  asOfDate: string;
  baselineUrlCount: number;
  currentUrlCount: number;
  ownerPresent: boolean;
  gateDate?: string;
  meaningfulReductionRatio?: number;
}

export interface AgencyGateResult {
  decision: AgencyGateDecision;
  reductionRatio: number;
  rationale: string;
}

export function evaluateAgencyCannibalizationGate({
  asOfDate,
  baselineUrlCount,
  currentUrlCount,
  ownerPresent,
  gateDate = AGENCY_CANNIBALIZATION_GATE_DATE,
  meaningfulReductionRatio = MEANINGFUL_URL_REDUCTION_RATIO,
}: AgencyGateInput): AgencyGateResult {
  const reductionRatio =
    baselineUrlCount > 0 ? (baselineUrlCount - currentUrlCount) / baselineUrlCount : 0;

  if (asOfDate < gateDate) {
    return {
      decision: "wait",
      reductionRatio,
      rationale: `The measurement gate opens on ${gateDate}; do not redirect or consolidate before then.`,
    };
  }

  if (ownerPresent && reductionRatio >= meaningfulReductionRatio) {
    return {
      decision: "keep",
      reductionRatio,
      rationale:
        "The intended agency owner ranks and competing URL count fell meaningfully; keep the distinct pages.",
    };
  }

  if (!ownerPresent && reductionRatio >= meaningfulReductionRatio) {
    return {
      decision: "rewrite",
      reductionRatio,
      rationale:
        "The intended agency owner is absent, but competing URL count fell meaningfully; rewrite only the agency page.",
    };
  }

  if (!ownerPresent) {
    return {
      decision: "consolidate",
      reductionRatio,
      rationale:
        "The intended agency owner is absent and competing URL count did not fall by 30%; prepare a separate hiring-cluster consolidation PR.",
    };
  }

  return {
    decision: "observe",
    reductionRatio,
    rationale:
      "The intended agency owner ranks, but competing URL count has not fallen meaningfully; keep observing instead of choosing an unplanned redirect path.",
  };
}
