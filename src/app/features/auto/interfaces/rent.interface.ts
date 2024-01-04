import { AvailabilityEnum } from "../enum/availability.enum";
import { PaymentsAllowedEnum } from "../enum/payments-allowed.enum";
import { ReimbursementEnum } from "../enum/reimbursement.enum";

export interface Rent {
    price: string;
    price_period: string;
    restrictions_mileage: string;
    restrictions_region: string;
    trunk_capacity: AvailabilityEnum;
    children_chair: AvailabilityEnum;
    payments_allowed:PaymentsAllowedEnum;
    deposit: string;
    reimbursement: ReimbursementEnum;
    franchise_amount: number;
    insurance_amount: number;
}
