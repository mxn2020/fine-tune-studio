import { Settings, Cpu } from "lucide-react";
import { Button, Card, Input, Label, Select, SelectItem } from "@geenius-ui/react-css";

export default function SettingsPage() {
  return (<div style={{ padding: "var(--space-8)", maxWidth: 600 }}>
    <h1 style={{ fontSize: "var(--font-size-2xl)", fontWeight: 700, marginBottom: "var(--space-6)", display: "flex", alignItems: "center", gap: "var(--space-3)" }}><Settings style={{ color: "var(--color-accent-primary)" }} /> Studio Settings</h1>
    <Card padding="lg">
      <h3 style={{ fontSize: "var(--font-size-base)", fontWeight: 600, marginBottom: "var(--space-4)", display: "flex", alignItems: "center", gap: "var(--space-2)" }}><Cpu size={18} /> Compute Provider</h3>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
        <div><Label style={{ marginBottom: 4 }}>RunPod API Key</Label><Input type="password" placeholder="R-" /></div>
        <div><Label style={{ marginBottom: 4 }}>Default GPU Type</Label>
          <Select defaultValue="rtx4090">
            <SelectItem value="rtx4090">1x RTX 4090</SelectItem>
            <SelectItem value="a100">1x A100 (80GB)</SelectItem>
            <SelectItem value="h100">4x H100</SelectItem>
          </Select>
        </div>
        <Button variant="primary" style={{ alignSelf: "flex-start", marginTop: 8 }}>Save Configuration</Button>
      </div>
    </Card>
  </div>);
}
