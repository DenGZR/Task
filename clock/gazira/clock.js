;(function () {
    'use strict';

    function GaziraClock (node) {
            this.node = node;
            this.init();
        };

        GaziraClock.prototype.init = function () {
            var a,
                nowtime = {};
            a = this;
            this.node.className += 'fireclock';
            this.node.innerHTML = '<div class="hours0"></div><div class="hours1"></div><div class="minutes0">:</div><div class="minutes1"></div><div class="seconds0">:</div><div class="seconds1"></div>';
            this.hours0 = this.node.querySelector('.hours0');
            this.hours1 = this.node.querySelector('.hours1');
            this.minutes0 = this.node.querySelector('.minutes0');
            this.minutes1 = this.node.querySelector('.minutes1');
            this.seconds0 = this.node.querySelector('.seconds0');
            this.seconds1 = this.node.querySelector('.seconds1');

            setInterval(function () {
                nowtime = a.gettime();
                a.show(nowtime);
            }, 100);
        };
     
        

        GaziraClock.prototype.gettime = function () {
            var h,
                    m,
                    s,
                    dt,
                    time = {
                        hours : '',
                        minutes : '',
                        seconds :''
                    };

            dt = new Date;
            h = dt.getHours();
            m = dt.getMinutes();
            s = dt.getSeconds();


            time.hours = h.toString().split('');
            time.minutes = m.toString().split('');
            time.seconds = s.toString().split('');


            for (var key in time) {

                if (time[key].length === 1) {
                    Array.prototype.unshift.call(time[key], '0');
                };
            };
            return time;

        };
        

        GaziraClock.prototype.show = function (dtime) {
            for (var keys in dtime) {
                for (var i = 0; i < dtime[keys].length; i++) {
                    var sum = parseFloat(dtime[keys][i]) + 1;
                   this[keys + i].style.background = 'url(gazira/num_img/s_' + dtime[keys][i] + '.jpg) no-repeat';
                };
            };
        };

    function exportModule(context){
            context.GaziraClock = GaziraClock;
        }

    exportModule(window);

}());