import { useState } from "react";
import { useMemories, useSearchMemories } from "@/hooks/use-memories";
import { CreateMemoryForm } from "@/components/CreateMemoryForm";
import { MemoryCard } from "@/components/MemoryCard";

export default function Dashboard() {
  const [query, setQuery] = useState("");
  const memories = useMemories();
  const search = useSearchMemories(query);

  const data = query ? search.data : memories.data;

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      <h1 className="text-5xl font-display text-primary animate-pulse">SEMANTYX_V1</h1>
      <div className="grid lg:grid-cols-12 gap-8">
        <div className="lg:col-span-4"><CreateMemoryForm /></div>
        <div className="lg:col-span-8 space-y-4">
          <input 
            className="w-full h-14 pl-12 cyber-input" 
            placeholder="SEARCH_NEURAL_DATABASE..." 
            onChange={(e) => setQuery(e.target.value)}
          />
          {data?.map(m => <MemoryCard key={m.id} memory={m} />)}
        </div>
      </div>
    </div>
  );
}
