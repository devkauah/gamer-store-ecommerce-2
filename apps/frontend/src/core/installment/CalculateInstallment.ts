import { MAX_QTY_INSTALLMENTS, MONTHLY_INTEREST_RATE } from "../constants";
import Installment from "./Installment";

export default class CalculateInstallment {
    executar(
        price:number,
        quantityOfInstallments:number,
        interestRate:number,
    ):Installment {
        if (quantityOfInstallments < 2 || quantityOfInstallments > MAX_QTY_INSTALLMENTS) {
            throw new Error(`Quantidade de parcelas deve ser 2x - ${MAX_QTY_INSTALLMENTS}`);
        };

        const totalWithInterest = this.calculateCompoundInterest(price, MONTHLY_INTEREST_RATE, quantityOfInstallments);
        const valueOfInstallments = totalWithInterest / quantityOfInstallments;

        return {
            totalValue: this.withTwoDecimalPlaces(totalWithInterest),
            installmentValue: this.withTwoDecimalPlaces(valueOfInstallments),
            quantityOfInstallments,
            interestRate,
        };
    };

    private calculateCompoundInterest(
        totalValue:number, 
        monthlyFee:number, 
        quantityOfInstallments:number
    ):number {
        return totalValue * Math.pow(1 + monthlyFee, quantityOfInstallments);
    };

    private withTwoDecimalPlaces(value:number):number {
        return Number(value.toFixed(2));
    };
};