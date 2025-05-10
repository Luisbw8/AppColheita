import type { HarvestEntry } from "../Types";

interface Props {
  entries: HarvestEntry[];
  onDelete: (index: number) => void;
}

export function Report({ entries, onDelete }: Props) {
  return (
    <div>
      <h2>Relatório</h2>
      {entries.length === 0 ? (
        <p>Nenhuma produção registrada.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {entries.map((entry, i) => (
            <li
              key={i}
              style={{
                backgroundColor: "#black",
                padding: "1rem",
                marginBottom: "1rem",
                borderRadius: "6px",
                boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
              }}
            >
              <strong>{entry.date}</strong> — {entry.workerName} colheu {entry.boxes} caixas
              <br />
              Total: <strong>R${entry.total.toFixed(2)}</strong>
              <br />
              <button
                onClick={() => {
                  const confirm = window.confirm("Tem certeza que deseja deletar?");
                  if (confirm) onDelete(i);
                }}
                style={{
                  marginTop: "0.5rem",
                  backgroundColor: "#dc3545",
                  color: "black",
                  border: "none",
                  padding: "0.3rem 0.6rem",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                Deletar
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
