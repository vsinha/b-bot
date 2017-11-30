
class Over9000 {
    public static baseMessage = "IT'S OVER 9000 https://www.youtube.com/watch?v=SiMHTK15Pik";

    public registerListener(robot: any) {
        return robot.hear(/[\d.,]+/g, (res: any) => {
            const num: string = res.match[0].split(',').join('').split('.')[0];

            if (parseInt(num, 10) > 9000) {
                const message = Over9000.baseMessage;
                res.send(message);
            }
        });
    }
}

export = new Over9000().registerListener;
