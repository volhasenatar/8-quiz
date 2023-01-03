export function Result({ correct }) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/9281/9281521.png" />
      <h2>Prawidłowe odpowiedzi {correct} z 15</h2>
      <a href="/">
        <button>Spróbuj ponownie</button>
      </a>
    </div>
  );
}
