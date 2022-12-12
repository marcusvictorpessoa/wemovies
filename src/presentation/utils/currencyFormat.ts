export function CurrencyFormat(value: Number) {
    return value.toLocaleString('pt-br',
        {
            style: 'currency',
            currency: 'BRL',
            minimumFractionDigits: 2
        });
}