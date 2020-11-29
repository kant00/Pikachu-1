const string = `.skin * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.skin *::before,
.skin *::after {
  box-sizing: border-box;
}
#html{background: #ffe600;}
.skin {
  background: #ffe600;
  min-width: 100vh;
  position: relative;
}
.nose {
  border: 10px solid red;
  border-color: black transparent transparent;
  border-bottom: none;
  width: 0px;
  height: 0px;
  position: absolute;
  left: 50%;
  top: 145px;
  margin-left: -10px;
  z-index: 10;
}
@keyframes wave {
  0% {
    transform: rotate(0deg);
  }
  33% {
    transform: rotate(5deg);
  }
  66% {
    transform: rotate(-5deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
.nose:hover {
  transform-origin: center bottom;
  animation: wave 300ms infinite linear;
}
.yuan {
  background: black;
  width: 20px;
  height: 6px;
  position: absolute;
  top: -16px;
  left: -10px;
  border-radius: 10px 10px 0 0;
}
.eye {
  border: 2px solid #000000;
  width: 64px;
  height: 64px;
  position: absolute;
  left: 50%;
  top: 100px;
  margin-left: -32px;
  background: #2e2e2e;
  border-radius: 50%;
}
.eye::before {
  content: "";
  display: block;
  border: 3px solid #000000;
  width: 25px;
  height: 25px;
  background: #ffffff;
  border-radius: 50%;
  position: absolute;
  left: 6px;
  top: 2px;
}
.eye.left {
  transform: translateX(-100px);
}
.eye.right {
  transform: translateX(100px);
}
.mouth {
  width: 200px;
  height: 200px;
  position: absolute;
  left: 50%;
  top: 170px;
  margin-left: -100px;
}
.mouth .up {
  position: relative;
  top: -20px;
  z-index: 1;
}
.mouth .up .lip {
  border: 5px solid black;
  background: #ffe600;
  width: 100px;
  height: 30px;
  border-top: none;
  position: relative;
  position: absolute;
  left: 50%;
  margin-left: -50px;
}
.mouth .up .lip.left {
  border-radius: 0 0 0 50px;
  transform: rotate(-15deg) translateX(-53px);
}
.mouth .up .lip::before {
  content: "";
  display: block;
  width: 7px;
  height: 30px;
  position: absolute;
  bottom: 0;
  background: #ffe600;
}
.mouth .up .lip.left::before {
  right: -6px;
}
.mouth .up .lip.right {
  border-radius: 0 0 50px 0;
  transform: rotate(15deg) translateX(53px);
}
.mouth .up .lip.right::before {
  left: -6px;
}
.mouth .down {
  position: absolute;
  height: 180px;
  width: 100%;
  top: 5px;
  overflow: hidden;
}
.mouth .down .circle1 {
  border: 2px solid black;
  width: 150px;
  height: 1000px;
  position: absolute;
  left: 50%;
  bottom: 0;
  margin-left: -75px;
  border-radius: 75px/300px;
  background: #9b000a;
  overflow: hidden;
}
.mouth .down .circle1 .circle2 {
  background: #ff485f;
  width: 200px;
  height: 300px;
  position: absolute;
  bottom: -155px;
  left: 50%;
  margin-left: -100px;
  border-radius: 100px;
}
.face {
  border: 3px solid black;
  position: absolute;
  left: 50%;
  width: 88px;
  height: 88px;
  top: 200px;
  margin-left: -44px;
  z-index: 2;
}
.face.left {
  transform: translateX(-180px);
  background: #ff0000;
  border-radius: 50%;
}
.face.right {
  transform: translateX(180px);
  background: #ff0000;
  border-radius: 50%;
}
.face > img {
  position: absolute;
  top: 50%;
  left: 50%;
}
.face.left > img {
  transform: rotateY(180deg);
  transform-origin: 0 0;
}
// 好啦，这只皮卡丘送给你`;

export default string;
