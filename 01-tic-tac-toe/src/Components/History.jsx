/* eslint-disable react/prop-types */
import "./styles/History.css";
export default function HistoryList({ history, onHistoryClick }) {
  const move = history.map((array, index) => {
    const description = index > 0 ? `Go to Move #${index}` : "Go to Game Start";

    return (
      <li key={index}>
        <button onClick={() => onHistoryClick(index)}>{description}</button>
      </li>
    );
  });

  return (
    <section className="history">
      <h2 className="history-title">History</h2>
      <ul className="history-buttons">{move}</ul>
    </section>
  );
}
