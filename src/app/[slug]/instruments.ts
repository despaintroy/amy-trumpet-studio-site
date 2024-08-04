import {INSTRUMENTS} from "@/constants";
import {InstrumentName} from "@/types";

const INSTRUMENTS_SET = new Set(INSTRUMENTS)

export function isInstrumentName(value: string): value is InstrumentName {
  return INSTRUMENTS_SET.has(value as InstrumentName)
}

export const normalizeInstrumentName = (value: string): InstrumentName | null => {
  const lower = value.toLowerCase()
  return isInstrumentName(lower) ? lower : null
}
