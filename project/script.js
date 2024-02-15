const time = 1000;//ms
const step = 10;

function outNum(num,elem) {
    let l = document.querySelector('#' + elem);
    n=0;
    let t = Math.round(time/(num/step));
    let interval = setInterval(() => {
        n = n + step;
        if(n==num) {
            clearInterval(interval);
        }
        l.innerHTML = n;
        },
    t);
}

outNum(500,'out-1');