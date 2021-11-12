function sb(obj) {

}

function baidu_advice(keyword, callback) {
    let url = "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?cb=sb&wd=" + keyword;
    if (window.baidu_advice_ajax) {
        window.baidu_advice_ajax.abort()
    }

    if (keyword === "") {
        callback([]);
        return;
    }


    window.baidu_advice_ajax = $.ajax({
        url: url,
        data: "",
        type: "GET",
        dataType: "jsonp",
        jsonpCallback: "sb",
        success: function (data) {
            callback(data.s)
        },
        error: function (e) {
            callback([])
        }
    });


}

function bilibili_advice(keyword, callback) {
    let url = "https://s.search.bilibili.com/main/suggest?func=suggest&suggest_type=accurate&tag_num=10&jsonp=jsonp&callback=sb&term=" + keyword;
    if (window.baidu_advice_ajax) {
        window.baidu_advice_ajax.abort()
    }

    if (keyword === "") {
        callback([]);
        return;
    }


    window.baidu_advice_ajax = $.ajax({
        url: url,
        data: "",
        type: "GET",
        dataType: "jsonp",
        jsonpCallback: "sb",
        success: function (data) {
            let temp_arr = []
            for (const key in data) {
                temp_arr.push(data[key].value)
            }
            callback(temp_arr)
        },
        error: function (e) {
            callback([])
        }
    });

}



