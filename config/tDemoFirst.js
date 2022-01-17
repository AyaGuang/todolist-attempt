var time = document.getElementById("time");
var todo = document.getElementById("todo");
var done = document.getElementById("done");
var add = document.getElementById("add");
//删除元素
function deleteElm(i) {
    i.parentNode.parentNode.removeChild(i.parentNode);
}
//切换元素修改转态
function rewriteElm(i) {
    i.parentNode.removeChild(i.parentNode.firstChild);
    var text = `<input type="text" id="reinText" onblur = "reInElm(this)" placeholder="输入修改内容(点击空白处确定)" />`;
    i.parentNode.insertAdjacentHTML("afterbegin", text);
}
//添加修改后的元素
function reInElm(i) {
    if (!i.value) {
        alert("输入值不能为空╮(╯﹏╰）╭");
    } else {
        var text = `<span class="p">${i.value}</span>`;
        i.parentNode.insertAdjacentHTML("afterbegin", text);
        i.parentNode.removeChild(i);
    }
}
//移动元素
function finish(i) {
    var inner = i.parentNode.firstChild.innerHTML;
    var text = `<div class="do"><span class="p">${inner}</span>`;
    text += `<img class="pic1" onclick="deleteElm(this)" src="pic/delete.jpg">`;
    done.insertAdjacentHTML("beforeend", text);
    deleteElm(i);
}
window.onload = function() {
    var date = new Date();
    var h = checkTime(date.getHours());
    var m = checkTime(date.getMinutes());
    var s = checkTime(date.getSeconds());
    var str = "" + h + ":" + m + ":" + s;
    time.innerHTML = str;

    function printTime() {
        var date = new Date();
        var h = checkTime(date.getHours());
        var m = checkTime(date.getMinutes());
        var s = checkTime(date.getSeconds());
        var str = "" + h + ":" + m + ":" + s;
        time.innerHTML = str;
    }

    function checkTime(i) {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    }
    var timer = setInterval(function() {
        printTime();
    }, 1000);
    //以上设置一个计时器
    //组建行元素
    function createElm(inner, pos) {
        if (pos = "todo") {
            var text = `<div class="do"><span class="p">${inner}</span>`;
            if (pos = "todo") {
                text += `<img class="pic1" id="right" onclick = "finish(this)" src="pic/finished.png">`
            }
            text += `<img class="pic1" onclick="rewriteElm(this)" src="pic/rewrite.png"> <img class="pic1" onclick="deleteElm(this)" src="pic/delete.jpg"></div>`;
            todo.insertAdjacentHTML("beforeend", text);
        }
    }
    //添加元素
    add.onclick = function() {
        var input = document.getElementById("inText");
        if (!input.value) {
            alert("输入值不能为空╮(╯﹏╰）╭");
        } else {
            createElm(input.value, todo);
            input.value = "";
            input.placeholder = "再输入一个吧_φ_(．．) "
        }
    }
}