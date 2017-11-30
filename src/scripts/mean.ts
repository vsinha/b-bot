
// lol

class Mean {
    public registerListener(robot: any) {
        return robot.hear(/^i mean/igm, (res: any) => {
            const prob = Math.random();
            if (prob > 0.95) {
                res.send("NO");
            } else if (prob > 0.50) {
                res.send("I mean...");
            } else if (prob > 0.20) {
                res.send("I mean");
            } else {
                // pass
            }
        });
    }
}

export = new Mean().registerListener;
