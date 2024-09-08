import { readable } from "svelte/store";


export default readable({x: 0, y: 0}, (set) => {
    const updateMove = (event: any) => {
        set({
            x: event.clientX,
            y: event.clientY,
        })
    };

    document.addEventListener("mousemove", updateMove); 

    return () => {
        document.removeEventListener("mousemove", updateMove);
    }
});
