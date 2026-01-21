import { useEffect, useState } from "react";
import { GameBoard } from "./components/GameBoard";
import { collectGiphyData, buildImageMap } from "./memory-utils";
import images from "./assets/images.json";
import "./App.css";

function App() {
  const [imagesData, setImagesData] = useState(images);
  const [selected, setSelected] = useState("");
  const [matched, setMatched] = useState([]);

  // useEffect(() => {
  //   collectGiphyData().then((result) => {
  //     setImagesData(buildImageMap(result));
  //   });
  // }, []);

  function parseId(inId) {
    if (inId.includes("_")) {
      return inId.slice(0, inId.indexOf("_"));
    }
    return inId;
  }

  const handleImageClick = (e) => {
    if (selected.length > 0) {
      if (
        parseId(selected) === parseId(e.target.id) &&
        selected !== e.target.id
      ) {
        setMatched([...matched, selected, e.target.id]);
        setSelected("");
      } else if (selected === e.target.id) {
        setSelected("");
      } else {
        setSelected(e.target.id);

        setTimeout(setSelected, 1000, "");
      }
    } else {
      setSelected(e.target.id);
    }
  };

  function resetBoard() {
    setSelected("");
    setMatched([]);
  }

  return (
    <>
      <h1>Memory</h1>
      <GameBoard
        imagesData={imagesData}
        selected={selected}
        matched={matched}
        handleImageClick={handleImageClick}
      />
    </>
  );
}

export default App;
