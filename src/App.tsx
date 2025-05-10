import { useState } from "react";
import type { DailyValue, HarvestEntry } from "./Types";
import { DailyValueForm } from "./components/DailyValueForm";
import { HarvestForm } from "./components/HarvestForm";
import { Report } from "./components/Report";

function App() {
  const [dailyValues, setDailyValues] = useState<DailyValue[]>([]);
  const [harvestEntries, setHarvestEntries] = useState<HarvestEntry[]>([]);

  const handleDelete = (index: number) => {
    const updated = [...harvestEntries];
    updated.splice(index, 1);
    setHarvestEntries(updated);
  };

  return (
    <div style={{
      maxWidth: "500px",
      margin: "0 auto",
      padding: "1rem",
      fontFamily: "sans-serif",
      color: "white"
    }}>
      <h1 style={{ textAlign: "center" }}>Controle de Colheita</h1>
      <DailyValueForm onSave={(val) => setDailyValues([...dailyValues, val])} />
      <HarvestForm dailyValues={dailyValues} onSave={(entry) => setHarvestEntries([...harvestEntries, entry])} />
      <Report entries={harvestEntries} onDelete={handleDelete} />
    </div>
  );
}

export default App;
