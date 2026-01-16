function GameBoard(props) {
  if (!props.imageUrls) {
    return <div>Loading...</div>;
  }

  if (props.imageUrls.length === 0) {
    return <div>No images returned</div>;
  }

  return (
    <div>
      {props.imageUrls.map((url) => {
        <img src={url} className="game-image" alt="game image" />;
        // <img id="2" src={url} className="game-image" alt="game image" />
      })}
    </div>
  );
}

export { GameBoard };
