export function ObjectFieldTransfer(from : {[key: string] : any}, target : {[key: string] : any}) {
    for (const key in from) {
        if (
            key != "__proto__" &&
            Object.prototype.hasOwnProperty.call(from, key) 
            && typeof from[key] !== "function") {
            const element = from[key];
            target[key] = element;
        }
    }
}