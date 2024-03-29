import React, { useEffect, useRef } from "react";
import styles from "./index.module.css"; 

import OneImge from "./docs.svg";
import ThreeImge from "./redstone.svg";
import TwoImge from "./github.svg";
import FourImge from "./starknet.svg";

import PixeLAWLogoImge from "./pixelaw_logo.png";

const App = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
 
  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.font = '15px "Silkscreen"'
      

       
           console.log(ctx.font)
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight - 60; // Adjust for the top container height
        canvas.width = screenWidth;
        canvas.height = screenHeight;

        const len = screenHeight / 15; // 定义每个小格子的边长

        // 绘制整个canvas的网格线
        ctx.strokeStyle = "#260737"; // Black color for grid lines
          // ctx.font = styles.fontData; 
       // 使用 Silkscreen 字体，大小为 15px
        // 绘制网格线
        for (let i = 0.5; i < screenWidth; i += len) {
          ctx.beginPath();
          ctx.moveTo(i, 0);
          ctx.lineTo(i, screenHeight);
          ctx.stroke();
        }
        for (let i = 0.5; i < screenHeight; i += len) {
          ctx.beginPath();
          ctx.moveTo(0, i);
          ctx.lineTo(screenWidth, i);
          ctx.stroke();
        }

        // 绘制颜色区域
        const colors = ["#0300af", "#00af27", "#af5400", "#4e7d38"]; // Red, Blue, White, Black
        const startRow = Math.floor(screenHeight / 2 / len) - 3;
        const startCol = Math.floor(screenWidth / 2 / len) - 3;

      
        ctx.fillStyle = "#000"; // 设置文字颜色为黑色
      
        // 遍历每个小方格
        for (let row = 0; row < 7; row++) {
          if (row === 3) continue; // 跳过中间行
          for (let col = 0; col < 7; col++) {
            if (col === 3) continue; // 跳过中间列

            const x = (startCol + col) * len;
            const y = (startRow + row) * len;

            let colorIndex = 0;
            if (row < 3 && col >= 3) colorIndex = 1; // 右上角蓝色
            else if (row >= 3 && col < 3) colorIndex = 2; // 左下角白色
            else if (row >= 3 && col >= 3) colorIndex = 3; // 右下角黑色

            ctx.fillStyle = colors[colorIndex];
            // 在2*1位置写入颜色和数字
            document.fonts.ready.then(() => {
        
       
           // 在每个条件分支中设置对应小方格的颜色
if (row === 0 && col === 1) {
  ctx.fillRect(x, y, len, len);
  ctx.fillStyle = "#fff"; // 设置文字颜色为白色
  ctx.textAlign = "center";
  ctx.font = '13px "Silkscreen"';
  ctx.fillText("Docs", x + len / 2, y + len / 1.5);
  ctx.textBaseline = "middle";
} else if (row === 4 && col === 1) {
  ctx.fillRect(x, y, len, len);
  ctx.fillStyle = "#fff"; // 设置文字颜色为白色
  ctx.textAlign = "center";
  ctx.fillText("Play", x + len / 2, y + len / 1.8);
  ctx.textBaseline = "middle";
} else if (row === 0 && col === 5) {
  ctx.fillRect(x, y, len, len);
  ctx.fillStyle = "#fff"; // 设置文字颜色为白色
  ctx.textAlign = "center";
  ctx.fillText("Code", x + len / 2, y + len / 1.8);
  ctx.textBaseline = "middle";
} else if (row === 4 && col === 5) {
  ctx.fillRect(x, y, len, len);
  ctx.fillStyle = "#fff"; // 设置文字颜色为白色
  ctx.textAlign = "center";
  ctx.fillText("Play", x + len / 2, y + len / 1.8);
  ctx.textBaseline = "middle";
} else {
  ctx.fillStyle = colors[colorIndex]; // 设置其他小方格的颜色
  ctx.fillRect(x, y, len, len);
}
        
            // 绘制小方格的网格线
            // ctx.strokeStyle = "#2d0d3e"; // Black color for grid lines
            ctx.strokeRect(x, y, len, len);

            // 创建一个新的image对象
            const imgOne = new Image();
            const imgTwo = new Image();
            const imgThree = new Image();
            const imgFour = new Image();

            // 指定图片的URL
            imgOne.src = OneImge;
            imgTwo.src = TwoImge;
            imgThree.src = ThreeImge;
            imgFour.src = FourImge;

            const targetWidth =(len/3)*2; // 设置目标高度
            const targetHeight = (len/3)*2; // 设置目标高度
            imgOne.style.display = 'none';
            // 当图片加载完成后绘制到画布上
console.log(len , targetWidth,targetHeight)

            imgOne.onload = function () {
              // const xOffsetOne = (len - imgOne.width) / 2; // 图片一水平居中的偏移量
              // const yOffsetOne = (len - imgOne.height) / 2; // 图片一垂直居中的偏移量
              const xOffsetOne = (len - targetWidth) / 2; // 图片一水平居中的偏移量
              const yOffsetOne = (len - targetHeight) / 2; // 图片一垂直居中的偏移量
            
              // 在特定位置绘制图片一
              if (row === 1 && col === 1) {
                ctx.drawImage(
                  imgOne,
                  x + xOffsetOne,
                  y + yOffsetOne,
                  targetWidth,
                  targetHeight
                );
              }
              imgOne.style.display = 'block';
            };

            imgTwo.onload = function () {
              // 在特定位置绘制图片
              // const xOffsetOne = (len - imgOne.width) / 2; // 图片一水平居中的偏移量
              // const yOffsetOne = (len - imgOne.height) / 2; // 图片一垂直居中的偏移量
              const xOffsetOne = (len - targetWidth) / 2; // 图片一水平居中的偏移量
              const yOffsetOne = (len - targetHeight) / 2; // 图片一垂直居中的偏移量
              // 在特定位置绘制图片一

              if (row === 1 && col === 5) {
                ctx.drawImage(
                  imgTwo,
                  x + xOffsetOne,
                  y + yOffsetOne,
                  targetWidth,
                  targetHeight
                );
              }
            };
            imgThree.onload = function () {
              // 在特定位置绘制图片
              const xOffsetOne = (len - targetWidth) / 2; // 图片一水平居中的偏移量
              const yOffsetOne = (len - targetHeight) / 2; // 图片一垂直居中的偏移量
              if (row === 5 && col === 1) {
                ctx.drawImage(
                  imgThree,
                  x + xOffsetOne,
                  y + yOffsetOne,
                  targetWidth,
                  targetHeight
                );
              }
            };
            imgFour.onload = function () {
              // 在特定位置绘制图片
              const xOffsetOne = (len - targetWidth) / 2; // 图片一水平居中的偏移量
              const yOffsetOne = (len - targetHeight) / 2; // 图片一垂直居中的偏移量
              if (row === 5 && col === 5) {
                ctx.drawImage(
                  imgFour,
                  x + xOffsetOne,
                  y + yOffsetOne,
                  targetWidth,
                  targetHeight
                );
              }
            };
          });
            // fetch('data:image/png;base64,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')
            // .then(response => response.blob())
            // .then(blob => {
            //   const url = URL.createObjectURL(blob);
            //   imgFour.src = url;
            // });
//             const targetWidth = (len - imgOne.width) / 2; // 设置目标宽度
//             const targetHeight = (len - imgOne.height) /2; // 设置目标高度
//             imgOne.style.display = 'none';
//             // 当图片加载完成后绘制到画布上
// console.log(len , targetWidth,targetHeight)

//             imgOne.onload = function () {
//               // const xOffsetOne = (len - imgOne.width) / 2; // 图片一水平居中的偏移量
//               // const yOffsetOne = (len - imgOne.height) / 2; // 图片一垂直居中的偏移量
//               const xOffsetOne = (len - targetWidth) / 2; // 图片一水平居中的偏移量
//               const yOffsetOne = (len - targetHeight) / 2; // 图片一垂直居中的偏移量
            
//               // 在特定位置绘制图片一
//               if (row === 1 && col === 1) {
//                 ctx.drawImage(
//                   imgOne,
//                   x + xOffsetOne,
//                   y + yOffsetOne,
//                   targetWidth,
//                   targetHeight
//                 );
//               }
//               imgOne.style.display = 'block';
//             };

//             imgTwo.onload = function () {
//               // 在特定位置绘制图片
//               // const xOffsetOne = (len - imgOne.width) / 2; // 图片一水平居中的偏移量
//               // const yOffsetOne = (len - imgOne.height) / 2; // 图片一垂直居中的偏移量
//               const xOffsetOne = (len - targetWidth) / 2; // 图片一水平居中的偏移量
//               const yOffsetOne = (len - targetHeight) / 2; // 图片一垂直居中的偏移量
//               // 在特定位置绘制图片一

//               if (row === 1 && col === 5) {
//                 ctx.drawImage(
//                   imgTwo,
//                   x + xOffsetOne,
//                   y + yOffsetOne,
//                   targetWidth,
//                   targetHeight
//                 );
//               }
//             };
//             imgThree.onload = function () {
//               // 在特定位置绘制图片
//               const xOffsetOne = (len - targetWidth) / 2; // 图片一水平居中的偏移量
//               const yOffsetOne = (len - targetHeight) / 2; // 图片一垂直居中的偏移量
//               if (row === 5 && col === 1) {
//                 ctx.drawImage(
//                   imgThree,
//                   x + xOffsetOne,
//                   y + yOffsetOne,
//                   targetWidth,
//                   targetHeight
//                 );
//               }
//             };
//             imgFour.onload = function () {
//               // 在特定位置绘制图片
//               const xOffsetOne = (len - targetWidth) / 2; // 图片一水平居中的偏移量
//               const yOffsetOne = (len - targetHeight) / 2; // 图片一垂直居中的偏移量
//               if (row === 5 && col === 5) {
//                 ctx.drawImage(
//                   imgFour,
//                   x + xOffsetOne,
//                   y + yOffsetOne,
//                   targetWidth,
//                   targetHeight
//                 );
//               }
//             };
          }
        }

        // 添加点击事件处理
        const handleClick = (event: any) => {
          const rect = canvas.getBoundingClientRect();
          const x = event.clientX - rect.left;
          const y = event.clientY - rect.top;

          const colClicked = Math.floor(x / len) - startCol;
          const rowClicked = Math.floor(y / len) - startRow;

          if (
            rowClicked >= 0 &&
            rowClicked < 7 &&
            colClicked >= 0 &&
            colClicked < 7
          ) {
            if (rowClicked === 3 || colClicked === 3) return; // 忽略中间行和列

            let quadrant;
            if (rowClicked < 3 && colClicked < 3) {
              window.open("https://pixelaw.github.io/book/index.html");
            } else if (rowClicked < 3 && colClicked > 3) {
              window.open("https://github.com/pixelaw/");
            } else if (rowClicked > 3 && colClicked < 3) {
              window.open("https://mud.pixelaw.xyz/");
            } else if (rowClicked > 3 && colClicked > 3) {
              window.open("https://dojo.pixelaw.xyz/");
            }

            // console.log(`Clicked on quadrant: ${quadrant}`);
          }
        };

        canvas.addEventListener("click", handleClick);

        return () => {
          canvas.removeEventListener("click", handleClick);
        };
      }
    }
  }, []);

  return (
    <>
      <div className={styles.topCon}>
        <img
          className={styles.containerImg}
          src={PixeLAWLogoImge}
          alt={'PixeLAW Logo'}
        />
      </div>
      <div
        style={{
          margin: 0,
          padding: 0,
          overflow: "hidden",
          height: `calc(100vh - 60px)`,
        }}
      >
        <canvas ref={canvasRef} style={{ display: "block" }}  />
      </div>
      <div className={styles.footer}>pixel-based autonomous world</div>
    </>
  );
};

export default App;
