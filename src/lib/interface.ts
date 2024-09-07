export interface ColorObject {
    color: string;
    //removeListenToColorChange(fn: (newColor: string) => void): void;
    listenToColorChange(fn: (newColor: string) => void): (fn: (newColor: string) => void) => void;
}

