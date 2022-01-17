var app = new Vue({
    el: '#box',
    data: {
        message: '', //临时储存文本
        fin_todo: `<img class="pic1" src="pic/finished.png">`, //对应功能图片
        rew_todo: `<img class="pic1" src="pic/rewrite.png">`,
        del_todo: `<img class="pic1" src="pic/delete.jpg">`,
        del_done: `<img class="pic2" src="pic/delete.jpg">`,
        rewrite: `<input type="text" id="reinText" placeholder="输入修改内容(输入回车确定)" />`,
        todoList: ['考核'], //建立两个数组来储存任务内容
        doneList: [],
    },
    methods: {
        //添加元素
        addElm: function() {
            if (this.message) {
                this.todoList.splice(this.todoList.length, 1, this.message);
                this.message = '';
                inText.placeholder = "再输入一个吧_φ_(．．) ";
            } else {
                alert("输入点内容进去吧╮(╯﹏╰）╭");
            }
        },
        //删除元素
        deleteElm: function(i, index) {
            i.splice(index, 1);
        },
        //移动元素
        moveElm: function(index) {
            this.doneList.push(this.todoList[index]);
            this.todoList.splice(index, 1);
        },
        //切换元素修改转态
        rewriteElm: function(i, index) {
            var num = 2 * index;
            var Lists = document.getElementsByClassName("p1");
            Lists[num].style.display = 'none';
            Lists[num + 1].style.display = '';
        },
        //添加修改后的元素
        readdElm: function(index) {
            var num = 2 * index;
            var Lists = document.getElementsByClassName("p1");
            var text = Lists[num + 1].firstChild.value;
            if (text) {
                this.todoList.splice(index, 1, text);
            } else {
                alert("输入值不能为空哦")
            }
            Lists[num].style.display = '';
            Lists[num + 1].style.display = 'none';
        }
    }
})
var time = document.getElementById("time"); //以下设置一个计时器
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
}