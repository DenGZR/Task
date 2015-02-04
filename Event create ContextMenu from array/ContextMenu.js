(function () {
    'use strict';
    var ESC_KEYCODE = 27;

    function ContextMenu(node, ConstructorMenu) {
        this.root = node;
        this.menu = this._createMenu(ConstructorMenu);
        this.root.addEventListener('contextmenu', this._startPositionMenu.bind(this), false);
        this.root.addEventListener('keyup', this._globalKeyup.bind(this), false);
    }

    ContextMenu.prototype._createMenu = function (opt) {
        var list,
            obj;

        list = document.createElement('ul');
        list.classList.add('context-menu');

        function recursia(elem, arr) {
            var i, key, item, subMenuPointer;

            for (i = 0; i < arr.length; i++) {
                item = document.createElement('li');
                obj = arr[i];

                for (key in obj) {
                    if (obj.hasOwnProperty(key) && key === "title") {
                        item.innerHTML = obj[key];
                    } else if (obj.hasOwnProperty(key) && key === "submenu") {
                        item.appendChild(recursia(document.createElement('ul'), obj[key]));
                        item.className = 'submenu hide';
                        subMenuPointer = document.createElement('span');
                        subMenuPointer.innerText = '>';
                        item.appendChild(subMenuPointer);

                        item.addEventListener("mouseenter", function () {
                            this.classList.remove('hide');

                        }, false);
                        item.addEventListener("mouseleave", function () {
                            this.classList.add('hide');
                        }, false);
                    } else if (obj.hasOwnProperty(key) && key === "action") {
                        item.addEventListener("click", obj[key], false);
                    }
                }
                elem.appendChild(item);
            }
            return elem;
        }

        return recursia(list, opt);
    };

    ContextMenu.prototype._startPositionMenu = function (e) {
        var x, y;

        e = e || window.event;
        x = e.pageX;
        y = e.pageY;
        e.preventDefault();
        this.root.appendChild(this.menu);
        this.show(x, y);
    };

    ContextMenu.prototype._globalKeyup = function (e) {
        if(e.keyCode === ESC_KEYCODE){
            this.hide();
        }
    };
    ContextMenu.prototype.show = function (left, top) {
        this.menu.style.left = left + 'px';
        this.menu.style.top = top + 'px';
        this.menu.style.display = 'block';
    };

    ContextMenu.prototype.hide = function () {
        this.menu.style.display = 'none';
    };

    window.ContextMenu = ContextMenu;

}());





