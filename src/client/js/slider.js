const slider = ()=> {
    return slidr.create('slider', {
        constrols: 'corner',
        touch: true,
        keyboard: true,
        overflow: true,
        breadcrumps: true,
        theme: '#fff'
    }).start();
}

export default slider;