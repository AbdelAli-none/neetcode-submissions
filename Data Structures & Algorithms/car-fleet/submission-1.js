class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let cars = [];
        for(let i = 0; i < position.length; i++) {
            cars.push([position[i], speed[i]]);
        }
        cars.sort((a, b) => b[0] - a[0]);
        let stack = [];
        for(const [pos, spd] of cars) {
            const arrivalTime = (target - pos) / spd;
            if(stack.length === 0 || arrivalTime > stack.at(-1)) {
                stack.push(arrivalTime);
            }
        }
        return stack.length;
    }
}
