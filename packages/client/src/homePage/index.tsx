import React, { useEffect, useState, useRef } from "react";
import styles from "./index.module.css"; // 导入样式文件


import Three from './20240226161337.png';
import One from './20240226161301.png';
import Four from './20240226161401.png';
import Two from './20240226161621.png';

const App = () => {
  const [gridWidth, setGridWidth] = useState(0);
  const [gridHeight, setGridHeight] = useState(0);

  useEffect(() => {
    const updateDimensions = () => {
      if(window.innerWidth<=1600||window.innerWidth>=2100){
        //console.log('q111')
         setGridWidth(1600);
      setGridHeight(900);
      }else{
    //  setGridWidth(1600);
    //   setGridHeight(900);
      setGridWidth(window.innerWidth);
      setGridHeight(window.innerHeight);
      }
      
    };
//console.log(window.innerWidth,window.innerHeight,'---------------')
    updateDimensions(); // 初始化

    window.addEventListener("resize", updateDimensions); // 监听窗口大小变化

    return () => {
      window.removeEventListener("resize", updateDimensions); // 清除监听器
    };
  }, []);

  const renderGrid = () => {
    // const containerWidth = containerRef.current.offsetWidth;
    // const containerHeight = containerRef.current.offsetHeight;
    // const numCols = Math.floor(containerWidth / 64);
    // const numRows = Math.floor(containerHeight / 64);
    const numCols = Math.floor(gridWidth / 64);
    const numRows = Math.floor(gridHeight / 64);
   
    const grids = [];
    // if(window.innerWidth<=1600||window.innerWidth>=2100){
      if(gridWidth === 1600&&gridHeight===900){
   //console.log(gridWidth,'================================')
    
      const startRow = Math.floor(numRows / 5) - 1; // 起始行，使正方形位于中间
      const startCol = Math.floor(numCols / 3) ; // 起始列，使正方形位于中间
      const startCols = Array.from(
        { length: 10 },
        (_, index) => startCol - index
      ); // 生成每行的起始列数组
      for (let i = 0; i < numRows; i++) {
        const startColForRow = startCols[i];
  
        for (let j = 0; j < numCols; j++) {
          if (
            i >= startRow &&
            i < startRow + 7 &&
            j >= startColForRow &&
            j < startColForRow + 7 &&
            !(i === startRow + 3 || j === startColForRow + 3)
          ) {
            let className = "";
            if (
              i >= startRow &&
              i < startRow + 3 &&
              j >= startColForRow &&
              j < startColForRow + 3
            ) {
              className = styles.gridSquareBlue;
            } else if (
              i >= startRow + 4 &&
              i < startRow + 7 &&
              j >= startColForRow + 4 &&
              j < startColForRow + 7
            ) {
              className = styles.gridSquareBrown;
            } else if (
              i >= startRow &&
              i < startRow + 3 &&
              j >= startColForRow + 4 &&
              j < startColForRow + 7
            ) {
              className = styles.gridSquareGreen;
            } else if (
              i >= startRow + 4 &&
              i < startRow + 7 &&
              j >= startColForRow &&
              j < startColForRow + 3
            ) {
              className = styles.gridSquareOrange;
            } else {
              className = styles.gridSquareWhite;
            }
  
            grids.push(
              <div key={`${i}-${j}`} className={className}>
                {i === startRow && j === startColForRow + 1 && (
                  <span className={styles.text}>Docs</span>
                )}
                {i === startRow + 1 && j === startColForRow + 1 && (
                   <img  className={styles.imgIcon}  src={One} alt="" />
                )}
                {i === startRow && j === startColForRow + 5 && (
                    <span className={styles.text}>Code</span>
                )}
                {i === startRow +1&& j === startColForRow + 5 && (
                      <img className={styles.imgIcon} src={Two} alt="" />
                )}
                {i === startRow+5 && j === startColForRow +1 && (
                   <img  className={styles.imgIcon}  src={Three} alt="" />
                )}
                {i === startRow+4 && j === startColForRow +1 && (
                    <span className={styles.text}>Play</span>
                )}
                {i === startRow+4 && j === startColForRow + 5 && (
                    <span className={styles.text}>Play</span>
                )}
                {i === startRow+5 && j === startColForRow + 5 && (
                      <img className={styles.imgIcon}  src={Four} alt="" />
                )}
              </div>
            );
          } else {
            grids.push(
              <div key={`${i}-${j}`} className={styles.gridSquare}></div>
            );
          }
        }
      }
    }
    else{


    const startRow = Math.floor(numRows / 3) - 1; // 起始行，使正方形位于中间
    const startCol = Math.floor(numCols / 2.5) - 1; // 起始列，使正方形位于中间
    const startCols = Array.from(
      { length: 10 },
      (_, index) => startCol - index
    ); // 生成每行的起始列数组
    for (let i = 0; i < numRows; i++) {
      const startColForRow = startCols[i];
     
      for (let j = 0; j < numCols; j++) {
        const row = [];
        if (
          i >= startRow &&
          i < startRow + 7 &&
          j >= startColForRow &&
          j < startColForRow + 7 &&
          !(i === startRow + 3 || j === startColForRow + 3)
        ) {
          let className = "";
          if (
            i >= startRow &&
            i < startRow + 3 &&
            j >= startColForRow &&
            j < startColForRow + 3
          ) {
            className = styles.gridSquareBlue;
         
          } else if (
            i >= startRow + 4 &&
            i < startRow + 7 &&
            j >= startColForRow + 4 &&
            j < startColForRow + 7
          ) {
            className = styles.gridSquareBrown;
          } else if (
            i >= startRow &&
            i < startRow + 3 &&
            j >= startColForRow + 4 &&
            j < startColForRow + 7
          ) {
            className = styles.gridSquareGreen;
          } else if (
            i >= startRow + 4 &&
            i < startRow + 7 &&
            j >= startColForRow &&
            j < startColForRow + 3
          ) {
            className = styles.gridSquareOrange;
          } else {
            className = styles.gridSquareWhite;
          }

          grids.push(
            <div key={`${i}-${j}`} className={className}>
              {i === startRow && j === startColForRow + 1 && (
                <span className={styles.text}>Docs</span>
              )}
              {i === startRow + 1 && j === startColForRow + 1 && (
                 <img  className={styles.imgIcon}  src={One} alt="" />
              )}
              {i === startRow && j === startColForRow + 5 && (
                  <span className={styles.text}>Code</span>
              )}
              {i === startRow +1&& j === startColForRow + 5 && (
                    <img className={styles.imgIcon} src={Two} alt="" />
              )}
              {i === startRow+5 && j === startColForRow +1 && (
                 <img  className={styles.imgIcon}  src={Three} alt="" />
              )}
              {i === startRow+4 && j === startColForRow +1 && (
                  <span className={styles.text}>Play</span>
              )}
              {i === startRow+4 && j === startColForRow + 5 && (
                  <span className={styles.text}>Play</span>
              )}
              {i === startRow+5 && j === startColForRow + 5 && (
                    <img className={styles.imgIcon}  src={Four} alt="" />
              )}
            </div>
          );
        } else {
          grids.push(
            <div key={`${i}-${j}`} className={styles.gridSquare}></div>
          );
        }
        
      }
    }
          
  }
  
    return grids;
  };

  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      //console.log(containerWidth)
      const itemWidth = Math.floor(
        containerWidth / Math.floor(containerWidth / 64)
      );
      //console.log(itemWidth)
      // if(itemWidth!==64){
      //   containerRef.current.style.setProperty(
      //     "--grid-item-width",
      //     `64px`
      //   );
      // }else{
        containerRef.current.style.setProperty(
          "--grid-item-width",
          `${itemWidth}px`
        );
      // }
    
    
    }
  }, [gridWidth]);

  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth <= 1600 || window.innerWidth >= 2100);

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth <= 1600 || window.innerWidth >= 2100);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // 注意这里的空数组，表示 effect 仅在组件挂载和卸载时执行

  return (
    <>
    <div className={styles.topCon}> <img  className={styles.containerImg}
          src="https://demo.pixelaw.xyz/assets/logo/pixeLaw-logo.png"
          alt=""
        /></div>
       <div className={isWideScreen ? styles.aa : ''}>

        <div className={styles.gridContainer} ref={containerRef} >
      {renderGrid()}
    </div>
        </div>
    
    <div className={styles.footer}>pixel-based autonomous world</div>
    </>
  );
};

export default App;
