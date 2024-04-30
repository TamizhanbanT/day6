class UberCalculator {
    constructor(baseFare, cost, surge) {
        this.baseFare = baseFare;
        this.cost = cost;
        this.surge = surge;
    }

    calculatePrice(distance) {
        const totalPrice = this.baseFare + (distance * this.cost);
        const surgePrice = totalPrice * this.surge;
        return surgePrice;
    }
}

const uberXCalculator = new UberCalculator(2.5, 1.5, 1.2);
const distanceInKm = 10;
const surgePrice = uberXCalculator.calculatePrice(distanceInKm);
console.log(`The UberX price for a ${distanceInKm} Km ride with a 1.2x surge is Rs.${surgePrice.toFixed(2)}`);
