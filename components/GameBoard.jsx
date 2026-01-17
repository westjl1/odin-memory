function GameBoard(props) {
  if (!props.imagesData) {
    return <div>Loading...</div>;
  }

  if (props.imagesData.length === 0) {
    return <div>No images returned</div>;
  }

  console.log(props.imagesData);

  return (
    <div className="game-board">
      {props.imagesData.map((image) => {
        return (
          <img
            id={image.id}
            src={image.src}
            className={image.className}
            alt={image.alt}
          />
        );
      })}
    </div>
  );
}

export { GameBoard };
