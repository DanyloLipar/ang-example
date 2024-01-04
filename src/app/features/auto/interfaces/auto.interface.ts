export interface Auto {
    type: string;
    bodyType:  number[];
    brand: string[];
    model: string;
    year: number;
    priceSale: number;
    rentalPrice: {
        day: number;
        week: number;
        month: number;
        year: number;
    };
    provinceRegion: string;
    districtRegion: string;
    cityRegion: string;
    mileage: number;
    transmission: string;
    fuelType: string;
    driveType: string;
    engineCapacity: number;
    condition: string;
    isOperational: boolean;
    fuelConsumptionCity: number;
    fuelConsumptionHighway: number;
    fuelConsumptionAverage: number;
    enginePower: number;
    passengerSeats: number;
    doorsCount: number;
    colorExterior: string;
    colorInterior: string;
    vehicleDocuments: string;
    hasInsurance: boolean;
    insuranceType: string;
    insuranceExpirationDate: string;
    region: string;
    district: string;
}
