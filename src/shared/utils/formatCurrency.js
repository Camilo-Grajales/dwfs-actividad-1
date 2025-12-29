export function formatCurrency (value, currency = 'COP') {
    const locale = navigator.language || "es-CO";
    const formatter = new Intl.NumberFormat(locale, {
        style: "currency",
        currency,
        minimumFractionDigits: 0,
    });

    return formatter.format(value);
}