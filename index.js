const returnFirstTwoDrivers = (listOfDrivers) => listOfDrivers.slice(0, 2);
const returnLastTwoDrivers = (listOfDrivers) => listOfDrivers.slice(-2);
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
const createFareMultiplier = (multiplier) => (fare) => fare * multiplier;
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);
const selectDifferentDrivers = (drivers, driverFunction) => driverFunction(drivers);