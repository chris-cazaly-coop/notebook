import { useEffect, useState } from "react";
import "./App.css";

// comment to test git
// comment to test git

function App() {
  const [pages, setPages] = useState([{ id: 1, textContent: "" }]);
  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  function handlePreviousPage() {
    if (currentPageIndex === 0) return;
    setCurrentPageIndex(currentPageIndex - 1);
  }
  function handleNextPage() {
    if (currentPageIndex === pages.length - 1) {
      const newPages = [...pages];
      newPages.push({ id: pages.length + 1, textContent: "" });
      setPages(newPages);
      setCurrentPageIndex(pages.length);
    } else {
      setCurrentPageIndex(currentPageIndex + 1);
    }
  }
  function handleTextInput(event) {
    const newPages = [...pages];
    newPages[currentPageIndex].textContent = event.target.value;
    setPages(newPages);
  }
  function adjustTextAreaHeight() {
    const textArea = document.querySelector("textarea");
    textArea.style.height = "auto"; // Reset the height to auto to recalculate the scrollHeight
    textArea.style.height = textArea.scrollHeight + "px";
  }

  useEffect(() => {
    adjustTextAreaHeight(); // Adjustment of textarea height when content changes
  }, [pages, currentPageIndex]);

  useEffect(() => {
    window.addEventListener("resize", adjustTextAreaHeight); // Adjustment of textarea height when window resizes
  }, []);

  return (
    <div className="App page-container">
      <h1>App</h1>
      <div className="text-area-wrapper">
        <textarea
          onInput={handleTextInput}
          value={pages[currentPageIndex].textContent}
        />
      </div>
      <br />
      <div className="button-container">
        <button onClick={handlePreviousPage}>Previous page</button>
        <button onClick={handleNextPage}>Next page</button>
      </div>
    </div>
  );
}

export default App;
