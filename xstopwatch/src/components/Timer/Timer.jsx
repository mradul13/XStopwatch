import { formatTime } from '../../config/helper-methods';

const Timer = ({time})=>{
    return (
        <p>{formatTime(time)}</p>
    )
}

export default Timer;