function GameBoard(props) {
  if (!props.imagesData) {
    return <div>Loading...</div>;
  }

  if (props.imagesData.length === 0) {
    return <div>No images returned</div>;
  }

  console.log("Gameboard rebuilding");

  return (
    <div className="game-board">
      {props.imagesData.map((image) => {
        let nextClassName = "";

        if (image.id === props.selected || props.matched.includes(image.id)) {
          nextClassName = "card";
        } else {
          nextClassName = "card flip";
        }

        return (
          <div
            className={nextClassName}
            id={image.id}
            key={image.id}
            onClick={props.handleImageClick}
          >
            <div className="front">
              <img id={image.id} src={image.src} alt={image.alt} />
            </div>
            <div className="back">
              <img
                id={image.id}
                className="logo"
                src="../public/odin.jpeg"
                alt="Odin logo"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export { GameBoard };
