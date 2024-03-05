import React, { useEffect, useRef } from "react";
import styles from "./index.module.css"; // 假设您已经有这个样式文件

import OneImge from "./20240226161301.png";
import ThreeImge from "./20240226161337.png";
import TwoImge from "./20240226161621.png";
import FourImge from "./20240226161401.png";

const App = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");

      if (ctx) {
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight - 60; // Adjust for the top container height
        canvas.width = screenWidth;
        canvas.height = screenHeight;

        const len = screenHeight / 15; // 定义每个小格子的边长

        // 绘制整个canvas的网格线
        ctx.strokeStyle = "#260737"; // Black color for grid lines

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

        // 绘制小方格的网格线
        ctx.strokeStyle = "#2d0d3e"; // Black color for grid lines
        // 绘制颜色区域和小方格的网格线
        ctx.font = "12px Arial"; // 设置字体样式和大小
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
            if (row === 0 && col === 1) {
              ctx.fillRect(x, y, len, len);
              ctx.fillStyle = "#fff"; // 设置文字颜色为黑色
              ctx.textAlign = "center"; // 设置文本水平居中
              ctx.font =
                '15px system-ui, "Segoe UI", "Helvetica Neue", Roboto, Helvetica, Arial, sans-serif';

              ctx.fillText("Docs", x + len / 2, y + len / 1.5);
              ctx.textBaseline = "middle"; // 设置基线为垂直居中
            } else if (row === 4 && col === 1) {
              ctx.fillRect(x, y, len, len);
              ctx.fillStyle = "#fff"; // 设置文字颜色为黑色
              ctx.textAlign = "center"; // 设置文本水平居中
              ctx.font =
                '15px system-ui, "Segoe UI", "Helvetica Neue", Roboto, Helvetica, Arial, sans-serif';

              ctx.fillText("Play", x + len / 2, y + len / 1.8);
              ctx.textBaseline = "middle"; // 设置基线为垂直居中
            } else if (row === 0 && col === 5) {
              ctx.fillRect(x, y, len, len);
              ctx.fillStyle = "#fff"; // 设置文字颜色为黑色
              ctx.textAlign = "center"; // 设置文本水平居中
              ctx.font =
                '15px system-ui, "Segoe UI", "Helvetica Neue", Roboto, Helvetica, Arial, sans-serif';

              ctx.fillText("Code", x + len / 2, y + len / 1.8);
              ctx.textBaseline = "middle"; // 设置基线为垂直居中
            } else if (row === 4 && col === 5) {
              ctx.fillRect(x, y, len, len);
              ctx.fillStyle = "#fff"; // 设置文字颜色为黑色
              ctx.textAlign = "center"; // 设置文本水平居中
              ctx.font =
                '15px system-ui, "Segoe UI", "Helvetica Neue", Roboto, Helvetica, Arial, sans-serif';

              ctx.fillText("Play", x + len / 2, y + len / 1.8);
              ctx.textBaseline = "middle"; // 设置基线为垂直居中
            } else {
              ctx.fillRect(x, y, len, len);
            }

            // 绘制小方格的网格线
            ctx.strokeStyle = "#2d0d3e"; // Black color for grid lines
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

            // 当图片加载完成后绘制到画布上
            imgOne.onload = function () {
              const xOffsetOne = (len - imgOne.width) / 2; // 图片一水平居中的偏移量
              const yOffsetOne = (len - imgOne.height) / 2; // 图片一垂直居中的偏移量

              // 在特定位置绘制图片一
              if (row === 1 && col === 1) {
                ctx.drawImage(
                  imgOne,
                  x + xOffsetOne,
                  y + yOffsetOne,
                  imgOne.width,
                  imgOne.height
                );
              }
            };

            imgTwo.onload = function () {
              // 在特定位置绘制图片
              const xOffsetOne = (len - imgOne.width) / 2; // 图片一水平居中的偏移量
              const yOffsetOne = (len - imgOne.height) / 2; // 图片一垂直居中的偏移量

              // 在特定位置绘制图片一

              if (row === 1 && col === 5) {
                ctx.drawImage(
                  imgTwo,
                  x + xOffsetOne,
                  y + yOffsetOne,
                  imgOne.width,
                  imgOne.height
                );
              }
            };
            imgThree.onload = function () {
              // 在特定位置绘制图片
              const xOffsetOne = (len - imgOne.width) / 2; // 图片一水平居中的偏移量
              const yOffsetOne = (len - imgOne.height) / 2; // 图片一垂直居中的偏移量
              if (row === 5 && col === 1) {
                ctx.drawImage(
                  imgThree,
                  x + xOffsetOne,
                  y + yOffsetOne,
                  imgOne.width,
                  imgOne.height
                );
              }
            };
            imgFour.onload = function () {
              // 在特定位置绘制图片
              const xOffsetOne = (len - imgOne.width) / 2; // 图片一水平居中的偏移量
              const yOffsetOne = (len - imgOne.height) / 2; // 图片一垂直居中的偏移量
              if (row === 5 && col === 5) {
                ctx.drawImage(
                  imgFour,
                  x + xOffsetOne,
                  y + yOffsetOne,
                  imgOne.width,
                  imgOne.height
                );
              }
            };
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
              window.open("https://pixelaw-core.vercel.app/");
            } else if (rowClicked > 3 && colClicked > 3) {
              window.open("https://demo.pixelaw.xyz/");
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
          src="https://demo.pixelaw.xyz/assets/logo/pixeLaw-logo.png"
          alt=""
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
        <canvas ref={canvasRef} style={{ display: "block" }} />
      </div>
      <div className={styles.footer}>pixel-based autonomous world</div>
    </>
  );
};

export default App;
