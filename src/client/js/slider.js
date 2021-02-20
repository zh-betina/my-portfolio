const slider = ()=> {
    return slidr.create('slider', {
        controls: 'none',
        touch: true,
        overflow: true,
        breadcrumps: true
    }).start();
}

export default slider;