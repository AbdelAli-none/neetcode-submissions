class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let stack = [];
        let cars = [];
        for(let i = 0; i < position.length; i++) {
            cars.push([position[i], speed[i]]); // [[4, 1], [1, 2], [0, 1], [7, 1]]
        }
        cars.sort((a, b) => b[0] - a[0]);
        for(const [pos, spd] of cars) {
            let arrivalTime = (target - pos) / spd;
            if(stack.length === 0 || arrivalTime > stack.at(-1)) {
                stack.push(arrivalTime);
            }
        }
        return stack.length;
    }
}
