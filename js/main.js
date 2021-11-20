"use strict";
(function(window, document) {
    /** 异步加载js */
    function asyncLoadJs(url) {
        return new Promise((resolve, reject) => {
            var script = document.createElement("script");
            script.src = url;
            script.async = true;
            document.body.appendChild(script);
            script.onload = () => {
                resolve();
            };
            script.onerror = () => {
                reject();
            };
        });
    }

    /** 加载css */
    function loadCss(url) {
        let css = document.createElement("link");
        css.href = url;
        css.rel = "stylesheet";
        css.type = "text/css";
        document.head.appendChild(css);
    }

    window.Blog_plugin = [
        {
            name: "Aplayer",
            title: "音乐插件",
            install: function() {
                // 创建盒子
                var el = document.createElement("div");
                el.id = "aplayer";
                el.style = "font-size: 12px";

                // 修改样式
                var styleEl = document.createElement("style");
                styleEl.textContent = `.aplayer *{color:#666;}
                    .aplayer.aplayer-fixed.aplayer-narrow .aplayer-body {
                        transform: translateX(-66px);
                        transition: none;
                    }
                    .aplayer.aplayer-fixed.aplayer-narrow .aplayer-body:hover {
                        transform: translateX(0);
                        transition: all 0.3s ease;
                }`;

                // 初始化
                loadCss("//cdn.jsdelivr.net/npm/aplayer@1.10.1/dist/APlayer.min.css");
                document.head.appendChild(styleEl);
                document.body.appendChild(el);
                asyncLoadJs("//cdn.jsdelivr.net/npm/aplayer@1.10.1/dist/APlayer.min.js").then(function() {
                    new window.APlayer({
                        container: document.getElementById("aplayer"),
                        fixed: true,
                        audio: [
                            {
                                name: "夜的第七章",
                                artist: "周杰伦",
                                url:
                                    "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-20cb47b8-e033-42e3-9522-e10a16bb5389/6393c1cf-da79-4c42-8c9c-e6272a813518.mp3",
                                cover: "//p3.music.126.net/06Yhj36Qu3ZCQJklc9MNKg==/7980255395852522.jpg",
                            },
                            {
                                name: "以父之名",
                                artist: "周杰伦",
                                url:
                                    "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-20cb47b8-e033-42e3-9522-e10a16bb5389/c9ac46bf-30a6-413b-953c-c395568ab90b.mp3",
                                cover: "//y.qq.com/music/photo_new/T002R300x300M000000MkMni19ClKG_3.jpg?max_age=2592000",
                            },
                            {
                                name: "等你下课 (with 杨瑞代)",
                                artist: "周杰伦",
                                url:
                                    "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-20cb47b8-e033-42e3-9522-e10a16bb5389/c4b4f9b6-fa7e-4f19-b641-8c4092a413f7.mp3",
                                cover: "//y.qq.com/music/photo_new/T002R300x300M000003bSL0v4bpKAx_1.jpg?max_age=2592000",
                            },
                            {
                                name: "战争世界",
                                artist: "陈姿彤",
                                url:
                                    "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-20cb47b8-e033-42e3-9522-e10a16bb5389/7ce0d7e0-bd64-436a-a1b6-08351d3f1191.mp3",
                                cover: "//p2.music.126.net/5dxDAiqgeIzKfydIehOZlg==/5896680859766191.jpg?param=130y130",
                            },
                            {
                                name: "说一声感谢(中文版)",
                                artist: "刘承俊",
                                url:
                                    "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-20cb47b8-e033-42e3-9522-e10a16bb5389/858a7aa6-4ab6-4457-8474-50ffe863114a.mp3",
                                cover: "//p2.music.126.net/GUC9XhtYK9rEtHtgMbRSXQ==/2536573326826293.jpg?param=130y130",
                            },
                            {
                                name: "起风了",
                                artist: "买辣椒也用券",
                                url:
                                    "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-20cb47b8-e033-42e3-9522-e10a16bb5389/40612fed-5601-4f99-8809-da91507af715.mp3",
                                cover: "//p1.music.126.net/diGAyEmpymX8G7JcnElncQ==/109951163699673355.jpg?param=130y130",
                            },
                            {
                                name: "起风了(2018年旧版)",
                                artist: "买辣椒也用券",
                                url:
                                    "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-20cb47b8-e033-42e3-9522-e10a16bb5389/787401a5-e3bc-4840-ad1d-8fe68d87d929.mp3",
                                cover: "//p1.music.126.net/diGAyEmpymX8G7JcnElncQ==/109951163699673355.jpg?param=130y130",
                            },
                            {
                                name: "她",
                                artist: "朱婧汐",
                                url:
                                    "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-20cb47b8-e033-42e3-9522-e10a16bb5389/dbaeac0e-af3b-42b6-9605-97749cfc6d73.mp3",
                                cover: "//p1.music.126.net/b8E1rHRTNeB52Hh1FCJqPg==/1267736906883880.jpg?param=130y130",
                            },
                            {
                                name: "星辰大海",
                                artist: "好乐无荒&黄霄雲",
                                url:
                                    "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-20cb47b8-e033-42e3-9522-e10a16bb5389/86e30690-e4e1-4213-9842-a20b265f845d.mp3",
                                cover: "//p2.music.126.net/eRSdB2vIoBHJV7-0Ga3i6g==/109951165641911293.jpg?param=130y130",
                            },
                            {
                                name: "少年",
                                artist: "梦然",
                                url:
                                    "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-20cb47b8-e033-42e3-9522-e10a16bb5389/4e22a13d-4502-42bd-bdd9-999d108314a0.mp3",
                                cover: "//y.qq.com/music/photo_new/T002R300x300M000000EI9tu27e5iy_1.jpg?max_age=2592000",
                            },
                            {
                                name: "For the Damaged Coda",
                                artist: "Blonde Redhead",
                                url:
                                    "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-20cb47b8-e033-42e3-9522-e10a16bb5389/08e08d61-da96-4786-b21a-a32dc0f96432.mp3",
                                cover: "//p1.music.126.net/GX7yk-BUeSkK5BOLX9TNBw==/109951163506318872.jpg?param=130y130",
                            },
                            {
                                name: "MELANCHOLY",
                                artist: "White Cherry",
                                url:
                                    "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-20cb47b8-e033-42e3-9522-e10a16bb5389/7cf07b15-bc91-4f14-8bc2-73ecf8fca1b6.mp3",
                                cover: "//p1.music.126.net/2bcwjIFFTiaS6Hg_4AdMJQ==/109951165424074168.jpg?param=130y130",
                            },
                            {
                                name: "冬眠",
                                artist: "司南",
                                url:
                                    "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-20cb47b8-e033-42e3-9522-e10a16bb5389/bc1cb71d-b874-4886-b509-32721e2979a5.mp3",
                                cover: "//p1.music.126.net/4KDBaQXnQywQovmqvjx-8Q==/109951164444131697.jpg?param=130y130",
                            },
                        ],
                    });
                });
            },
        },
        {
            name: "clickLove",
            title: "爱心插件",
            install: function() {
                asyncLoadJs("/js/clickLove.js");
            },
        },
        {
            name: "live2d",
            title: "live2d插件",
            install: function() {
                var el = document.createElement("div");
                el.id = "landlord";
                el.innerHTML = `<div class="message" style="opacity:0"></div>
                    <canvas id="live2d" width="500" height="560" class="live2d"></canvas>
                    <div class="live_talk_input_body">
                        <div class="live_talk_input_name_body">
                            <input name="name" type="text" class="live_talk_name white_input" id="AIuserName" autocomplete="off" placeholder="你的名字" />
                        </div>
                        <div class="live_talk_input_text_body">
                            <input name="talk" type="text" class="live_talk_talk white_input" id="AIuserText" autocomplete="off" placeholder="要和我聊什么呀？" />
                            <button type="button" class="live_talk_send_btn" id="talk_send">
                                发送
                            </button>
                        </div>
                    </div>
                    <input name="live_talk" id="live_talk" value="1" type="hidden" />
                    <div class="live_ico_box">
                        <div class="live_ico_item type_info" id="showInfoBtn"></div>
                        <div class="live_ico_item type_talk" id="showTalkBtn"></div>
                        <!-- <div class="live_ico_item type_music" id="musicButton"></div> -->
                        <div class="live_ico_item type_youdu" id="youduButton"></div>
                        <div class="live_ico_item type_quit" id="hideButton"></div>
                        <input name="live_statu_val" id="live_statu_val" value="0" type="hidden" />
                        <audio src="" style="display:none;" id="live2d_bgm" data-bgm="0" preload="none"></audio>
                        <input name="live2dBGM" value="https://t1.aixinxi.net/o_1c52p4qbp15idv6bl55h381moha.mp3" type="hidden" />
                        <input name="live2dBGM" value="https://t1.aixinxi.net/o_1c52p8frrlmf1aled1e14m56una.mp3" type="hidden" />
                        <!-- <input id="duType" value="douqilai,l2d_caihong" type="hidden" /> -->
                        <input id="duType" value="douqilai" type="hidden" />
                    </div>`;

                let open_live2dEl = document.createElement("div");
                open_live2dEl.id = "open_live2d";
                open_live2dEl.innerHTML = "召唤伊斯特瓦尔";

                document.body.appendChild(el);
                document.body.appendChild(open_live2dEl);
                loadCss("/live2d/css/live2d.css");
                asyncLoadJs("/live2d/js/index.js");
            },
        },
    ];
})(window, document);

// aplyer插件初始化
window.addEventListener("load", function() {
    window.Blog_plugin.forEach(plugin => {
        plugin.install();
    });
});
