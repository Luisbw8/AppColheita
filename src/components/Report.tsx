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
        <table style={tableStyle}>
          <thead>
            <tr>
              <th>Data</th>
              <th>Funcionário</th>
              <th>Caixas</th>
              <th>Total (R$)</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {entries.map((entry, i) => (
              <tr key={i}>
                <td>{entry.date}</td>
                <td>{entry.workerName}</td>
                <td>{entry.boxes}</td>
                <td>R${entry.total.toFixed(2)}</td>
                <td>
                  <button
                    onClick={() => {
                      const confirm = window.confirm("Tem certeza que deseja deletar?");
                      if (confirm) onDelete(i);
                    }}
                    style={deleteButtonStyle}
                  >
                    Deletar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

const tableStyle: React.CSSProperties = {
  width: "100%",
  borderCollapse: "collapse",
  marginTop: "1rem",
  color: "white"
};

const deleteButtonStyle: React.CSSProperties = {
  backgroundColor: "#dc3545",
  color: "white",
  border: "none",
  padding: "0.4rem 0.6rem",
  borderRadius: "4px",
  cursor: "pointer"
};
