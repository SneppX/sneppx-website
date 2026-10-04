import type { Plugin } from "@opencode-ai/plugin"

export default (async () => ({
  "tool.execute.before": async (input, output) => {
    if (input.tool === "bash") {
      const cmd = String(output.args?.command ?? "")
      if (cmd.includes(".github/workflows") || cmd.includes("workflows/")) {
        throw new Error("SneppX policy: CI/CD workflow files are not allowed. Verify locally with per-file pytest/cmake.")
      }
    }
  },
})) satisfies Plugin
