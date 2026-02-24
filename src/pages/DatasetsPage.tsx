import { Database, Plus, MoreHorizontal } from "lucide-react";
const datasets = [
  { id:"1", name:"Customer Support Q&A", rows:"14,200", format:"JSONL", status:"Validated" },
  { id:"2", name:"Medical Coding Tasks", rows:"4,150", format:"CSV", status:"Needs Review" },
  { id:"3", name:"Python Code Instruct", rows:"45,000", format:"JSONL", status:"Validated" }
];
export default function DatasetsPage() {
  return (<div style={{padding:"var(--space-8)",maxWidth:1000}}>
    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"var(--space-6)"}}>
      <h1 style={{fontSize:"var(--font-size-2xl)",fontWeight:700,display:"flex",alignItems:"center",gap:"var(--space-2)"}}><Database style={{color:"var(--color-accent-primary)"}}/> Datasets</h1>
      <button className="btn btn-primary"><Plus size={16}/> Upload Dataset</button>
    </div>
    <div style={{display:"grid",gap:"var(--space-4)"}}>
      {datasets.map(d=>(<div key={d.id} className="card" style={{padding:"var(--space-5)",display:"flex",alignItems:"center",gap:"var(--space-4)"}}>
        <div style={{flex:1}}>
          <h3 style={{fontSize:"var(--font-size-base)",fontWeight:600,marginBottom:8}}>{d.name}</h3>
          <div style={{display:"flex",gap:"var(--space-4)",fontSize:"var(--font-size-xs)",color:"var(--color-text-secondary)"}}>
            <span><strong className="mono">{d.rows}</strong> examples</span>
            <span style={{textTransform:"uppercase"}}>{d.format}</span>
          </div>
        </div>
        <span className={`badge ${d.status==="Validated"?"badge-magenta":""}`}>{d.status}</span>
        <button className="btn btn-ghost btn-sm" style={{padding:8}}><MoreHorizontal size={16}/></button>
      </div>))}
    </div>
  </div>);
}
