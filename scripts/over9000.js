"use strict";
var Over9000 = /** @class */ (function () {
    function Over9000() {
    }
    Over9000.prototype.registerListener = function (robot) {
        return robot.hear(/[\d.,]+/g, function (res) {
            var num = res.match[0].split(',').join('').split('.')[0];
            if (parseInt(num, 10) > 9000) {
                var message = Over9000.baseMessage;
                res.send(message);
            }
        });
    };
    Over9000.baseMessage = "IT'S OVER 9000 https://www.youtube.com/watch?v=SiMHTK15Pik";
    return Over9000;
}());
module.exports = new Over9000().registerListener;
//# sourceMappingURL=over9000.js.map