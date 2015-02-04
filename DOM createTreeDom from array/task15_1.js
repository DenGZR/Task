
function createList(listData, listContainer, itemContainer) {
    var defSet = {};

    defSet.list = listContainer || 'ul';
    defSet.item = itemContainer || 'li';

    document.body.appendChild(createTreeDom(listData, defSet));
}

function createTreeDom(arr, objSet) {
    // если нет детей, то рекурсивный вызов ничего не возвращает
    // так что вложенный list не будет создан
    var list,
        item,
        childrenList,
        i;

    if (!isArray(arr)) return;

    list = document.createElement(objSet.list);

    for (i = 0; i < arr.length; i++) {
        item = document.createElement(objSet.item);
        if (!isArray(arr[i])) {
            item.innerText = arr[i];
        }

        childrenList = createTreeDom(arr[i], objSet);
        if (childrenList) {
            item.appendChild(childrenList);
        }
        list.appendChild(item);
    }
    return list;
}

function isArray(obj) {
    return Object.prototype.toString.call(obj) === "[object Array]";
}