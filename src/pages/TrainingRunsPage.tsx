import { Zap, Play, Activity } from "lucide-react";
const runs = [
  { id:"1", name:"Llama-3-8B-Support", status:"Training", progress:68, epoch: "2/3", loss: 0.42 },
  { id:"2", name:"Mistral-Coder-v2", status:"Completed", progress:100, epoch: "4/4", loss: 0.18 },
  { id:"3", name:"Gemma-MedQA", status:"Failed", progress:12, epoch: "1/5", loss: 2.14 }
];
export default function TrainingRunsPage() {
  return (<div style={{padding:"var(--space-8)",maxWidth:1000}}>
    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"var(--space-6)"}}>
      <h1 style={{fontSize:"var(--font-size-2xl)",fontWeight:700,display:"flex",alignItems:"center",gap:"var(--space-3)"}}><Zap style={{color:"var(--color-accent-primary)"}}/> Training Runs</h1>
      <button className="btn btn-primary"><Play size={16}/> New Run</button>
    </div>
    <div style={{display:"grid",gap:"var(--space-4)"}}>
      {runs.map(r=>(<div key={r.id} className="card" style={{padding:"var(--space-5)"}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"var(--space-4)"}}>
          <h3 style={{fontSize:"var(--font-size-lg)",fontWeight:600}}>{r.name}</h3>
          <span style={{fontSize:"var(--font-size-sm)",fontWeight:600,color:r.status==="Training"?"var(--color-accent-primary)":r.status==="Completed"?"var(--color-success)":"var(--color-error)"}}>{r.status}</span>
        </div>
        <div style={{width:"100%",height:8,background:"var(--color-bg-tertiary)",borderRadius:4,marginBottom:"var(--space-4)",overflow:"hidden"}}>
          <div style={{width:`${r.progress}%`,height:"100%",background:r.status==="Failed"?"var(--color-error)":"var(--color-accent-primary)"}}></div>
        </div>
        <div style={{display:"flex",justifyContent:"space-between",fontSize:"var(--font-size-xs)",color:"var(--color-text-secondary)"}}>
          <div style={{display:"flex",alignItems:"center",gap:6}}><Activity size={12}/> Epoch: <strong className="mono">{r.epoch}</strong></div>
          <div style={{display:"flex",alignItems:"center",gap:6}}>Validation Loss: <strong className="mono" style={{color:"var(--color-text-primary)"}}>{r.loss}</strong></div>
        </div>
      </div>))}
    </div>
  </div>);
}
