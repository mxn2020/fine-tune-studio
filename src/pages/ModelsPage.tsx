import { Network, Server } from "lucide-react";
const models = [
  { id:"1", name:"Mistral-Coder-v2", baseModel:"mistral-7b-v0.2", nodes: 3, requests:"1.2M / mo" },
  { id:"2", name:"Llama-3-8B-Support", baseModel:"llama-3-8b-instruct", nodes: 1, requests:"450K / mo" }
];
export default function ModelsPage() {
  return (<div style={{padding:"var(--space-8)",maxWidth:1000}}>
    <h1 style={{fontSize:"var(--font-size-2xl)",fontWeight:700,marginBottom:"var(--space-6)",display:"flex",alignItems:"center",gap:"var(--space-3)"}}><Network style={{color:"var(--color-accent-primary)"}}/> Deployed Models</h1>
    <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:"var(--space-4)"}}>
      {models.map(m=>(<div key={m.id} className="card" style={{padding:"var(--space-5)"}}>
        <div style={{display:"flex",alignItems:"center",gap:"var(--space-3)",marginBottom:"var(--space-4)"}}>
          <div style={{padding:8,background:"var(--color-accent-soft)",color:"var(--color-accent-primary)",borderRadius:"var(--radius-sm)"}}><Server size={20}/></div>
          <div><h3 style={{fontSize:"var(--font-size-base)",fontWeight:600}}>{m.name}</h3><div style={{fontSize:"12px",color:"var(--color-text-secondary)"}}>{m.baseModel}</div></div>
        </div>
        <div style={{display:"flex",justifyContent:"space-between",fontSize:"13px",borderTop:"1px solid var(--color-border)",paddingTop:"var(--space-3)"}}>
          <span><strong className="mono">{m.nodes}</strong> replicas</span>
          <span className="mono">{m.requests}</span>
        </div>
      </div>))}
    </div>
  </div>);
}
