// 依赖jquery
$(function() {
    window.message_Path = "/live2d/"; //资源目录，如果目录不对请更改
    //思知机器人调用
    window.talkAPI = "https://api.ownthink.com/bot"; //如果有类似图灵机器人的聊天接口请填写接口路径
    // 聊天发送请求方法
    window.talkAPIFn = function() {
        var info_ = $("#AIuserText").val();
        var userid_ = $("#AIuserName").val();
        if (info_ == "") {
            showMessage("写点什么吧！", 0);
            return;
        }
        if (userid_ == "") {
            showMessage("聊之前请告诉我你的名字吧！", 0);
            return;
        }
        showMessage("思考中~", 0);
        $.ajax({
            type: "POST",
            url: talkAPI,
            data: {
                spoken: info_, //	string	是	请求的文本
                appid: "351a7ff9d9a49134a4b137fc746ddd60", //	string	否	机器人的appid，填写可使用自己的机器人
                userid: userid_, //	string	否	自己管理的用户id，填写可进行上下文对话
            },
            success: function(res) {
                // {
                //     "message": "success",               // 请求是否成功
                //     "data": {
                //         "type": 5000,                   // 答案类型，5000文本类型
                //         "info": {
                //             "text": "姚明的身高是226厘米"  // 机器人返回的答案
                //         }
                //     }
                // }
                if (res.message == "success") {
                    var text = res.data.info.text.replace(/(小思)/g, "伊斯特瓦尔");
                    talkValTimer();
                    showMessage(text, 0);
                    //   添加语音
                    var url = "https://dds.dui.ai/runtime/v1/synthesize?voiceId=qianranfa&speed=0.8&volume=100&audioType=wav&text=" + text;
                    var audio = new Audio(url);
                    audio.play();
                } else {
                    talkValTimer();
                    showMessage("似乎有什么错误，请和站长联系！", 0);
                }
                $("#AIuserText").val("");
                sessionStorage.setItem("live2duser", userid_);
            },
        });
    };

    $.getScript("/live2d/js/live2d.js");
    $.getScript("/live2d/js/message.js");
});
