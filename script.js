setInterval(() => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();

    hrotation = 30*htime +mtime/2;
    mrotation = 6 * mtime;
    srotation = 6 * stime;
    // Calculated from formulas

    hr.style.transform = `rotate(${hrotation}deg)`;
    mn.style.transform = `rotate(${mrotation}deg)`;
    sc.style.transform = `rotate(${srotation}deg)`;
}, 1000);

// Style transform property javascript

