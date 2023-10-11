import "../src/style/reset.css";
import "../src/style/font.css";
import Navigator from "./components/Navigator";
import { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import AboutMe from "./components/AboutMe";
import Works from "./components/Works";
import Contact from "./components/Contact";

function App() {
  const [navState, setNavState] = useState(0);
  const wrapRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    let page = 0; // 영역 포지션 초기값
    const lastPage = 2; // 마지막 페이지
    const wrap = wrapRef.current;
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (e.deltaY > 0) {
        page++;
        setNavState((prev) => prev + 1);
      } else if (e.deltaY < 0) {
        page--;
        setNavState((prev) => prev - 1);
      }
      if (page < 0) {
        page = 0;
        setNavState(0);
      } else if (page > lastPage) {
        page = lastPage;
        setNavState(page);
      }
      wrap!.style.top = page * -100 + "vh";
    };

    if (wrap) {
      wrap.addEventListener("wheel", handleWheel, { passive: false });
    }

    return () => {
      if (wrap) {
        wrap.removeEventListener("wheel", handleWheel);
      }
    };
  }, []);
  return (
    <Wrapper id="wrap" ref={wrapRef}>
      <Navigator state={navState} setter={setNavState} wrapRef={wrapRef} />
      <div className="container">
        <AboutMe />
      </div>
      <div className="container">
        <Works />
      </div>
      <div className="container">
        <Contact />
      </div>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  position: relative;
  top: 0;
  width: 100%;
  height: 100%;
  transition: 0.5s;
  overflow: hidden;
`;
