const slider = ()=> {
    return slidr.create('slider', {
        touch: true,
        keyboard: true,
        overflow: true,
        breadcrumps: true,
        theme: '#fff'
    }).start();
}

export default slider;