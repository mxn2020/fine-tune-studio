import { defineSchema, defineTable } from "convex/server"; import { v } from "convex/values";
export default defineSchema({
  datasets: defineTable({ name: v.string(), format: v.string(), rows: v.number(), status: v.string(), sizeBytes: v.number() }),
  trainingRuns: defineTable({ name: v.string(), datasetId: v.id("datasets"), baseModel: v.string(), hyperparams: v.string(), status: v.string(), progressPct: v.number() }),
  deployedModels: defineTable({ runId: v.id("trainingRuns"), endpoint: v.string(), status: v.string(), replicas: v.number() }),
});
