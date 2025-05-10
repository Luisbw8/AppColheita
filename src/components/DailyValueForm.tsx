import { useState } from "react";
import type { DailyValue } from "../Types";

interface Props {
  onSave: (data: DailyValue) => void;
}

export function DailyValueForm({ onSave }: Props) {
  const [date, setDate] = useState("");
  const [valuePerBox, setValuePerBox] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({ date, valuePerBox: Number(valuePerBox) });
    setDate("");
    setValuePerBox("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Valor da Caixa</h2>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        style={inputStyle}
        required
      />
      <input
        type="number"
        placeholder="Valor por caixa"
        value={valuePerBox}
        onChange={(e) => setValuePerBox(e.target.value)}
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
  color: "black",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
};
