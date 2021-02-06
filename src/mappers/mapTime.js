//  Fn that takes in a timestamp and returns a an output based on the interval
export const mapTime = timestamp => {

    const seconds = Math.floor((new Date() - timestamp * 1000)/1000);
    
    let interval = Math.floor(seconds/3153600);
    if(interval > 1) return `${interval} years ago`
    
    interval = Math.floor(seconds / 2592000);
    if(interval > 1) return `${interval} months ago`
    
    interval = Math.floor(seconds / 86400);
    if(interval > 1) return `${interval} days ago`
    
    interval = Math.floor(seconds / 3600);
    if(interval > 1) return `${interval} hours ago`
    
    interval = Math.floor(seconds / 60);
    if(interval > 1) return `${interval} minutes ago`
    
    return interval = `${Math.floor(seconds)} seconds ago`
};

