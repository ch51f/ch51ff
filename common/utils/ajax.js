function ajax(options) {
    function setData() {
        function setObjData(data, parentName) {
            function encodeData(name, value, parentName) {
                let items = [];
                name = parentName === undefined ? name : parentName + "[" + name + "]";
                if(typeof value === "object" && value !== null) {
                    items = items.concat(setObjData(value, name));
                } else {
                    name = encodeURIComponent(name);
                    value = encodeURIComponent(value);
                    items.push(name + "=" + value);
                }
                return items;
            }
            let arr = [], value;
            if(Object.prototype.toString.call(data) == '[object Array]') {
                for(let i = 0, len = data.length; i < len; i++) {
                    value = data[i];
                    arr = arr.concat(encodeData(typeof value == "object" ? i : "", value, parentName));
                }
            } else if(Object.prototype.toString.call(data) == '[object Object]') {
                for(let key in data) {
                    value = data[key];
                    arr = arr.concat(encodeData(key, value, parentName));
                }
            }
            return arr;
        };
        function setStrData(data) {
            let arr = data.split("&");
            for(let i = 0, len = arr.length; i < len; i++) {
                name = encodeURIComponent(arr[i].split("=")[0]);
                value = encodeURIComponent(arr[i].split("=")[1]);
                arr[i] = name + "=" + value;
            }
            return arr;
        }
        if(data) {
            if(typeof data === "string") {
                data = setStrData(data);
            } else if (typeof data === "object") {
                data = setObjData(data);
            }
            data = data.join("&").replace("/%20/g", "+");
            if(type === "get" || dataType === "jsonp") {
                url += url.indexOf("?") > -1 ? (url.indexOf("=") > -1 ? "&" + data: data) : "?" + data;
            }
        }
    }
    function createJsonp() {
        let script = document.createElement("script"),
            timeName = new Date().getTime() + Math.round(Math.random() * 1000),
            callback = "JSONP_" + timeName;
        window[callback] = function(data) {
            clearTimeout(timeout_flag);
            document.body.removeChild(script);
            success(data);
        }
        script.src = url + (url.indexOf("?") > -1 ? "&" : "?") + "callback=" + callback;
        script.type = "text/javascript";
        setTime(callback, script);
    }
    function setTime(callback, script) {
        if(timeOut !== undefined) {
            timeout_flag = setTimeout(function() {
                if(dataType === "jsonp") {
                    delete window[callback];
                    document.body.removeChild(script);
                } else {
                    timeout_bool = true;
                    xhr && xhr.abort();
                }
                error(500, "网络超时"); 
            }, timeOut);
        }
    }
    function createXHR() {
        function getXHR() {
            if(window.XMLHttpRequest) {
                return new XMLHttpRequest();
            } else {
                let versions = ["Microsoft", "msxml3", "msxml2", "msxml1"];
                for(let i = 0; i < versions.length; i++) {
                    try {
                        var version = versions[i] + ".XMLHTTP";
                        return new ActiveXObject(version);
                    } catch(e) {}
                }
            }
        }
        xhr = getXHR(); 
        xhr.open(type, url, async); 
        if(type === "post" && !contentType) {
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8"); 
        } else if(contentType) {
            xhr.setRequestHeader("Content-Type", contentType); 
        } 
        xhr.onreadystatechange = function() {
            if(xhr.readyState === 4) {
                if(timeOut !== undefined) {
                    if(timeout_bool) {
                        return; 
                    } 
                    clearTimeout(timeout_flag); 
                } 
                console.log(xhr)
                if((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
                    success(JSON.parse(xhr.responseText)); 
                } else {
                    error(xhr.status, xhr.statusText); 
                } 
            } 
        }; 
        xhr.send(type === "get" ? null : data); 
        setTime(); 
    }
    let url = options.url || "",
        type = (options.type || "post").toLowerCase(),
        data = options.data || null,
        contentType = options.contentType || "",
        dataType = options.dataType || "",
        async = options.async === undefined ? true : options.async,
        timeOut = options.timeOut,
        before = options.before || function() {},
        error = options.error || function() {},
        success = options.success || function() {};
    let timeout_bool = false,
        timeout_flag = null,
        xhr = null;
    setData();
    before();
    if(dataType === "jsonp") {
        createJsonp();
    } else {
        createXHR();
    }
}

export default ajax;