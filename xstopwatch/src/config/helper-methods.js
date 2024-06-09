
export const formatTime = (time)=>{
    let seconds = `0${time%60}`.slice(-2);
    let minutes = Math.floor(time/60);
    minutes = `${minutes%60}`;
    let hours = `${Math.floor(time/3600)}`
    if(hours==='0'){
        return `${minutes}:${seconds}`
    }
    return `${hours}:${minutes}:${seconds}`
}