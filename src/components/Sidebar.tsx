import { Link, useLocation } from "react-router-dom";
import { Database, Zap, Cpu, Settings, Network } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
export default function Sidebar() {
  const loc = useLocation();
  const links = [
    { to: "/", icon: Database, label: "Datasets" },
    { to: "/training", icon: Zap, label: "Training Runs" },
    { to: "/models", icon: Network, label: "Deployed Models" },
    { to: "/settings", icon: Settings, label: "Settings" }
  ];
  return (<aside style={{width:"var(--sidebar-width)",background:"var(--color-bg-card)",borderRight:"1px solid var(--color-border)",height:"100vh",position:"fixed",display:"flex",flexDirection:"column"}}>
    <div style={{padding:"var(--space-6)",display:"flex",alignItems:"center",gap:"var(--space-3)",borderBottom:"1px solid var(--color-border)"}}>
      <Cpu size={28} style={{color:"var(--color-accent-primary)"}}/><strong style={{fontSize:"1.2rem",letterSpacing:"-0.5px"}}>Fine-Tune Studio</strong>
    </div>
    <nav style={{padding:"var(--space-4)",flex:1,display:"flex",flexDirection:"column",gap:"var(--space-2)"}}>
      {links.map(l=><Link key={l.to} to={l.to} style={{display:"flex",alignItems:"center",gap:"var(--space-3)",padding:"var(--space-3)",borderRadius:"var(--radius-sm)",color:loc.pathname===l.to?"var(--color-accent-primary)":"var(--color-text-secondary)",background:loc.pathname===l.to?"var(--color-accent-soft)":"transparent",fontWeight:600,fontSize:"var(--font-size-sm)",transition:"all var(--transition-fast)"}}><l.icon size={18}/>{l.label}</Link>)}
    </nav>
    <div style={{padding:"var(--space-4)",borderTop:"1px solid var(--color-border)",display:"flex",justifyContent:"flex-end"}}><ThemeToggle /></div>
  </aside>);
}
