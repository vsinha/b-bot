"use strict";
// lol
var Mean = /** @class */ (function () {
    function Mean() {
    }
    Mean.prototype.registerListener = function (robot) {
        return robot.hear(/^i mean/igm, function (res) {
            var prob = Math.random();
            if (prob > 0.95) {
                res.send("NO");
            }
            else if (prob > 0.50) {
                res.send("I mean...");
            }
            else if (prob > 0.20) {
                res.send("I mean");
            }
            else {
                // pass
            }
        });
    };
    return Mean;
}());
module.exports = new Mean().registerListener;
//# sourceMappingURL=mean.js.map