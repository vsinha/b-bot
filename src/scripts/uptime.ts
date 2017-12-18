import * as moment from 'moment';
import * as momentDurationFormatSetup from 'moment-duration-format';

momentDurationFormatSetup(moment);

function customTemplate() {
    return this.duration.asSeconds() >= 86400 ? "w [weeks], d [days]" : "hh:mm:ss";
}

class Uptime {
    public registerListener(robot: any) {

        const bootTime = moment();

        return robot.respond(/uptime/igm, (res: any) => {

            // typecast to use the .format lib declared above without a type warning... pretty janky.
            const uptime = (moment.duration(moment().diff(bootTime)) as any).format(customTemplate, {
                trim: false,
            });

            res.send(`I have been up for ${uptime}, since ${bootTime.format("MMMM Do, HH:mm:ss")}`);
        });
    }
}

export = new Uptime().registerListener;
