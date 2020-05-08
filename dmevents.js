(function (root) {

    var _endpoint = '/jsn/events/write';
    var _data = [];
    var _version = '1.0.2';
    var _url = window.location.origin + _endpoint;

    var sendData = function (payload) {
        var data = JSON.stringify(payload);
        if (!!(root.navigator && root.navigator.sendBeacon)) {
            root.navigator.sendBeacon(_url, data);
        } else {
            post(_url, data);
        }
    };

    var post = function (url, data, callback) {
        var client = new XMLHttpRequest();
        client.open('POST', url, false);
        client.setRequestHeader('Content-Type', 'text/plain;charset=UTF-8');
        client.onreadystatechange = function (request) {
            if (request.readyState === 4 && request.status === 200) {
                if (typeof callback  === 'function') {
                    callback(request.responseText);
                }
            }
        };
        client.send(data);
    };

    if (!window._dmq || window._dmq instanceof Array) {
        _data = root._dmq;

        root._dmq = (function () {
            return {
                version: _version,
                push: function (data) {
                    if (data instanceof Array) {
                        _data.concat(data);
                    } else if (data instanceof Object) {
                        _data.push(data);
                    }
                }
            };
        })();

        window.addEventListener('unload', function () {
            if (_data.length > 0) {
                sendData(_data);
            }
        }, false);
    }

})(window);
