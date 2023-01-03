export function Game({ question, onClickVariant, step }) {
  const percentage = Math.round((step / 15) * 100);

  return (
    <>
      <h1>Test "Angielskie czasowniki nieregularne"</h1>
      <div className="progress">
        <div
          style={{ width: `${percentage}%` }}
          className="progress__inner"
        ></div>
      </div>
      <h3>{question.title}</h3>
      <ul>
        {question.variants.map((text, index) => (
          <li onClick={() => onClickVariant(index)} key={text}>
            {text}
          </li>
        ))}
      </ul>
    </>
  );
}
