import { derived, type Readable } from "svelte/store";

export default function throttle<T>(store: Readable<T>): Readable<T> {
    const throttleTime: number = 100;
    let lastTime: number = 0;
    return derived(store, (value, set) => {
        let now: number = Date.now();
        let elapsed: number = now - lastTime;
        if (elapsed > throttleTime) {
            set(value);
            lastTime = now;
        } else {
            var timeoutID = setTimeout(() => {
                set(value);
            }, throttleTime);
        }
        
        return () => clearTimeout(timeoutID);
    });
}

