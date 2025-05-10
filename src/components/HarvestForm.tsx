import { useState } from "react";
import type { HarvestEntry, DailyValue } from "../Types";

interface Props {
  dailyValues: DailyValue[];
  onSave: (entry: HarvestEntry) => void;
}

export function HarvestForm({ dailyValues, onSave }: Props) {
  const [date, setDate] = useState("");
  const [workerName, setWorkerName] = useState("");
  const [boxes, setBoxes] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const daily = dailyValues.find((d) => d.date === date);
    if (!daily) {
      alert("Valor da caixa não registrado para esta data.");
      return;
    }
    const total = Number(boxes) * daily.valuePerBox;
    onSave({ date, workerName, boxes: Number(boxes), total });
    setDate("");
    setWorkerName("");
    setBoxes("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Registrar Colheita</h2>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        style={inputStyle}
        required
      />
      <input
        type="text"
        placeholder="Nome do funcionário"
        value={workerName}
        onChange={(e) => setWorkerName(e.target.value)}
        style={inputStyle}
        required
      />
      <input
        type="number"
        placeholder="Quantidade de caixas"
        value={boxes}
        onChange={(e) => setBoxes(e.target.value)}
        style={inputStyle}
        required
      />
      <button type="submit" style={buttonStyle}>Salvar</button>
    </form>
  );
}

const inputStyle = {
  width: "100%",
  padding: "0.5rem",
  marginBottom: "1rem",
  borderRadius: "4px",
  border: "1px solid #ccc",
};

const buttonStyle = {
  padding: "0.5rem 1rem",
  backgroundColor: "#007bff",
  color: "Black",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
};
