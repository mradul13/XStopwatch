import { formatTime } from '../../config/helper-methods';

const Timer = ({time})=>{
    return (
        <p>Time: {formatTime(time)}</p>
    )
}

export default Timer;