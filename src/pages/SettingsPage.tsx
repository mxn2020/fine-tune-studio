import { Settings, Cpu } from "lucide-react";
export default function SettingsPage() {
  return (<div style={{padding:"var(--space-8)",maxWidth:600}}>
    <h1 style={{fontSize:"var(--font-size-2xl)",fontWeight:700,marginBottom:"var(--space-6)",display:"flex",alignItems:"center",gap:"var(--space-3)"}}><Settings style={{color:"var(--color-accent-primary)"}}/> Studio Settings</h1>
    <div className="card" style={{padding:"var(--space-6)"}}>
      <h3 style={{fontSize:"var(--font-size-base)",fontWeight:600,marginBottom:"var(--space-4)",display:"flex",alignItems:"center",gap:"var(--space-2)"}}><Cpu size={18}/> Compute Provider</h3>
      <div style={{display:"flex",flexDirection:"column",gap:"var(--space-4)"}}>
        <div><label style={{fontSize:"12px",fontWeight:600,marginBottom:4,display:"block"}}>RunPod API Key</label><input type="password" placeholder="R-" className="input" /></div>
        <div><label style={{fontSize:"12px",fontWeight:600,marginBottom:4,display:"block"}}>Default GPU Type</label><select className="select"><option>1x RTX 4090</option><option>1x A100 (80GB)</option><option>4x H100</option></select></div>
        <button className="btn btn-primary" style={{alignSelf:"flex-start",marginTop:8}}>Save Configuration</button>
      </div>
    </div>
  </div>);
}
