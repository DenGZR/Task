function getUniqueTags(domElement) {
    var childrenList,
        res = {},
        iterator = function (array, callback) {
            var item, index = 0, length = array.length;
            debugger;
            for (; index < length; index++) {
                item = array[index];
                callback(item);
                if (item.children.length) {
                    iterator(item.children, callback);
                } else {
                    callback(item);
                }
            }
        },
        callback =  function (item) {
            // Будет вызвана для каждого элемента, не являющимся массивом.

            res[item.tagName] = true;

            return res;
        };

    childrenList = domElement.children;

    iterator(childrenList, callback);

    return Object.keys(res);
}
