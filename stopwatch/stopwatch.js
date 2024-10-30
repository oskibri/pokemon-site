class Timer {
    static #min = 0;
    static #second = 0;
    static #millisecond = 0;

    static #timeID;

    static #start;
    static #stop;

    static get count() {return `Timer: ${String(this.#min).padStart(2,'0')}:${String(this.#second).padStart(2,'0')}:${String(this.#millisecond).padStart(2,'0').substring(0,2)}`};

    static signal(mode) {
        switch(mode) {
            case 'start':
                if (this.#start) {break;}
                this.#start = true;
                this.#stop = false;

                this.#timeID = setInterval(() => {
                    if (this.#millisecond >= 100) {
                        this.#millisecond = 0;
                        this.#second++;
                        if (this.#second >= 60) {
                            this.#second = 0;
                            this.#min++;
                        };
                    };
                    this.#millisecond++;
                }, 10);

                break;
            case 'stop':
                if (this.#stop) {break;}
                this.#start = false;
                this.#stop = true;

                clearInterval(this.#timeID);

                break;
            case 'reset':
                this.#start = false;
                this.#stop = false;

                clearInterval(this.#timeID);

                this.#min = 0;
                this.#second = 0;
                this.#millisecond = 0;

                break;
            default:
                console.error("no");
        };
    };
};

setInterval(() => document.getElementById('h1').textContent = Timer.count, 1);

document.getElementById('start').onclick = function() {Timer.signal('start')};
document.getElementById('stop').onclick = function() {Timer.signal('stop')};
document.getElementById('reset').onclick = function() {Timer.signal('reset')};
