! function () {
    function writecode(prefix, code, fn) {
        let container = document.querySelector('#code')
        let styleTag = document.querySelector('#styleTag')
        let n = 0
        let timer = setInterval(() => {
            n += 1
            container.innerHTML = Prism.highlight(code.substring(0, n), Prism.languages.css);
            styleTag.innerHTML = code.substring(0, n)
            container.scrollTop = container.scrollHeight
            if (n >= code.length) {
                window.clearInterval(timer)
                // fn & fn.call()
            }
        }, 10)
    }
    let code = `/*让我们画一个hello kitty吧*/
/*首先画脸*/
.preview{
    border: 5px solid palevioletred;
}
.face {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 270px;
    height: 216px;
    background-color: #FFF;
    border: 10px solid #000;
    -moz-border-radius: 100px;
    -webkit-border-radius: 100px;
    border-radius: 100px;
    z-index: 100;
    transform: translate(-50%, -50%);
}
/*画左边眼睛*/
.left-eye,
.right-eye {
    position: absolute;
    left: 15%;
    top: 55%;
    width: 24px;
    height: 30px;
    background-color: #000;
    -moz-border-radius: 18px;
    -webkit-border-radius: 18px;
    border-radius: 18px;
}
/*画右边眼睛*/
.right-eye {
    left:75%;
}
/*画个鼻子吧*/
.nose {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 65%;
    width: 30px;
    height: 24px;
    background-color: #FFB827;
    border: 6px solid #000;
    -moz-border-radius: 25px;
    -webkit-border-radius: 25px;
    border-radius: 25px;
}
/*画胡须啦*/
.leftwhiskers,
.rightwhiskers {
    background-color: #000;
}
/*左边第一根*/
.leftwhiskers.one {
    position: absolute;
    width: 26px;
    height: 10px;
    -moz-border-radius: 0 20px 15px 0;
    -webkit-border-radius: 0 20px 15px 0;
    border-radius: 0 20px 15px 0;
    -moz-transform: rotate(6deg);
    -ms-transform: rotate(6deg);
    -o-transform: rotate(6deg);
    -webkit-transform: rotate(6deg);
    z-index: 150;
    top: 60%;
    left: 0;
}
.leftwhiskers.one::before {
    content: '';
    display: block;
    position: absolute;
    background-color: black;
    width: 40px;
    height: 10px;
    border-radius: 36px 20px 13px 14px;
    z-index: 150;
    top: 45%;
    left: -145%;
    -moz-border-radius: 36px 20px 13px 14pxx;
    -webkit-border-radius: 36px 20px 13px 14pxx;
    -webkit-transform: rotate(-15deg);
    -moz-transform: rotate(-15deg);
    -ms-transform: rotate(-15deg);
    -o-transform: rotate(-15deg);
   
}
/*左边第二根*/
.leftwhiskers.two {
    position: absolute;
    width: 46px;
    height: 10px;
    -webkit-transform: rotate(-15deg);
    border-radius: 20px 20px 20px 20px;
    z-index: 150;
    top: 72%;
    left: -8%;
    -moz-border-radius: 20px 20px 20px 20px;
    -webkit-border-radius: 20px 20px 20px 20px;
    -moz-transform: rotate(-15deg);
    -ms-transform: rotate(-15deg);
    -o-transform: rotate(-15deg);
}
/*左边第三根*/
.leftwhiskers.three {
    position: absolute;
    width: 30px;
    height: 10px;
    z-index: 150;
    top: 82%;
    left: 0%;
    -webkit-transform: rotate(-25deg);
    border-radius: 20px 20px 20px 20px;
    -moz-border-radius:  20px 20px 20px 20px;
    -webkit-border-radius:  20px 20px 20px 20px;
    -moz-transform: rotate(-25deg);
    -ms-transform: rotate(-25deg);
    -o-transform: rotate(-25deg); 
}
.leftwhiskers.three::before {
    position: absolute;
    content: '';
    display: block;
    background-color: black;
    width: 30px;
    height: 10px;
    border-radius: 20px 20px 20px 20px;
    -webkit-transform: rotate(-15deg);
    z-index: 150;
    top: 34%;
    left: -74%;
    -moz-border-radius: 20px 20px 20px 20px;
    -webkit-border-radius: 20px 20px 20px 20px; 
    -moz-transform: rotate(-15deg);
    -ms-transform: rotate(-15deg);
    -o-transform: rotate(-15deg);
}
/*右边胡须一样哒*/
.rightwhiskers.one {
    position: absolute;
    width: 26px;
    height: 10px;
    border-radius: 20px 0px 0px 15px;
    -webkit-transform: rotate(-6deg);
    z-index: 150;
    top: 60%;
    right: 0;
    -moz-transform: rotate(-6deg);
    -ms-transform: rotate(-6deg);
    -o-transform: rotate(-6deg);
    -moz-border-radius: 20px 0px 0px 15px;
    -webkit-border-radius: 20px 0px 0px 15px;
}

.rightwhiskers.one::before {
    content: '';
    display: block;
    position: absolute;
    background-color: black;
    width: 40px;
    height: 10px;
    border-radius: 20px 36px 14px 13px;
    -webkit-transform: rotate(15deg);
    z-index: 150;
    top: 45%;
    right: -145%;
    -moz-border-radius: 20px 36px 14px 13px;
    -webkit-border-radius: 20px 36px 14px 13px;
    -moz-transform: rotate(15deg);
    -ms-transform: rotate(15deg);
    -o-transform: rotate(15deg);
}

.rightwhiskers.two {
    position: absolute;
    width: 46px;
    height: 10px;
    border-radius: 20px 20px 20px 20px;
    -webkit-transform: rotate(15deg);
    z-index: 150;
    top: 72%;
    right: -8%;
    -moz-border-radius: 20px 20px 20px 20px;
    -webkit-border-radius: 20px 20px 20px 20px;
    -moz-transform: rotate(15deg);
    -ms-transform: rotate(15deg);
    -o-transform: rotate(15deg);
}

.rightwhiskers.three {
    position: absolute;
    width: 30px;
    height: 10px;
    border-radius: 20px 20px 20px 20px;
    -webkit-transform: rotate(25deg);
    z-index: 150;
    top: 82%;
    right: 0%;
    -moz-border-radius: 20px 20px 20px 20px;
    -webkit-border-radius: 20px 20px 20px 20px;
    -moz-transform: rotate(25deg);
    -ms-transform: rotate(25deg);
    -o-transform: rotate(25deg);
}

.rightwhiskers.three::before {
    position: absolute;
    content: '';
    display: block;
    background-color: black;
    width: 30px;
    height: 10px;
    border-radius: 20px 20px 20px 20px;
    -webkit-transform: rotate(15deg);
    z-index: 150;
    top: 34%;
    right: -74%;
    -moz-border-radius: 20px 20px 20px 20px;
    -webkit-border-radius: 20px 20px 20px 20px; 
    -moz-transform: rotate(15deg);
    -ms-transform: rotate(15deg);
    -o-transform: rotate(15deg);
}
/*左边耳朵*/
.left-ear {
    position: absolute;
    top: -14%;
    left: -5%;
    width: 100px;
    height: 108px;
    border: 8px solid #000;
    border-bottom-color: transparent;
    border-right-color: transparent;
    border-radius: 30px 77px 60px 84px;
    transform: rotate(12deg);
    -moz-border-radius: 30px 77px 60px 84px;
    -webkit-border-radius: 30px 77px 60px 84px;
    -moz-transform: rotate(14deg);
    -ms-transform: rotate(14deg);
    -o-transform: rotate(14deg);
    -webkit-transform: rotate(14deg);
    -webkit-backface-visibility: hidden;
}

.left-ear::before {
    content: "";
    display: block;
    position: absolute;
    top: 10%;
    left: 9%;
    width: 72px;
    height: 72px;
    background-color: #fff;
    border-radius: 22px;
}
/*右边耳朵*/
.right-ear {
    position: absolute;
    top: -14%;
    right: -5%;
    width: 100px;
    height: 108px;
    border: 8px solid #000;
    border-bottom-color: transparent;
    border-right-color: transparent;
    border-radius: 30px 77px 60px 84px;
    transform: rotate(86deg);
    -moz-border-radius: 20px 37px 20px 44px;
    -webkit-border-radius: 20px 37px 20px 44px;
    -moz-transform: rotate(14deg);
    -ms-transform: rotate(14deg);
    -o-transform: rotate(14deg);
    -webkit-transform: rotate(14deg);
    -webkit-backface-visibility: hidden;
}

.right-ear::before {
    content: "";
    display: block;
    position: absolute;
    top: 10%;
    right: 9%;
    width: 72px;
    height: 72px;
    background-color: #fff;
    border-radius: 22px;
}
/****************************蝴蝶结************************/
.bow {
    position: absolute;
    border: 1px black solid;
    right: 10%;
    top: 10%;
}

.center {
    position: absolute;
    left: -45px;
    top: -18px;
    width: 52px;
    height: 56px;
    background-color: #F51F27;
    border: 8px solid #000;
    border-radius: 30px;
    z-index: 2;
    -webkit-transform: rotate(20deg);
    -moz-border-radius: 30px;
    -webkit-border-radius: 30px;
    -moz-transform: rotate(20deg);
    -ms-transform: rotate(20deg);
    -o-transform: rotate(20deg);
}

.left {
    position: absolute;
    top: -55px;
    left: -100px;
    width: 76px;
    height: 92px;
    background-color: #F51F27;
    border: 8px solid #000;
    border-radius: 50px 50px 55px 46px;
    -webkit-transform: rotate(19deg);
    -moz-border-radius: 50px 50px 55px 46px;
    -webkit-border-radius: 50px 50px 55px 46px;
    -moz-transform: rotate(19deg);
    -ms-transform: rotate(19deg);
    -o-transform: rotate(19deg);
}

.left::before {
    content: '';
    display: block;
    position: absolute;
    top: 20px;
    left: 27px;
    width: 24px;
    height: 28px;
    border: 6px solid #000;
    border-radius: 30px;
    -moz-border-radius: 30px;
    -webkit-border-radius: 30px;
    
}

.right {
    position: absolute;
    top: -16px;
    left: -8px;
    width: 73px;
    height: 84px;
    background-color: #F51F27;
    border: 8px solid #000;
    border-radius: 78px 48px 60px 63px;
    -moz-border-radius: 78px 48px 60px 63px;
    -webkit-transform: rotate(22deg);
    -webkit-border-radius: 78px 48px 60px 63px;
    -moz-transform: rotate(22deg);
    -ms-transform: rotate(22deg);
    -o-transform: rotate(22deg);
}

.right::before {
    content: '';
    display: block;
    position: absolute;
    top: 18px;
    left: -5px;
    width: 24px;
    height: 28px;
    border: 6px solid #000;
    border-radius: 30px;
    -moz-border-radius: 30px;
    -webkit-border-radius: 30px;
}`
    writecode('', code)
}.call()