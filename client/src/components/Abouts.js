const Abouts = ({ data }) => {
  return (
    <div>
      <h1>Abouts</h1>
      {data ? (
        <ul>
          {data.result.tags.map((tag, index) => (
            <li key={index}>
              {tag.tag.en} - Confidence: {tag.confidence}
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default Abouts;
