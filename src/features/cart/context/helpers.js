import { DUTY_PERCENTAGE, IVA_PERCENTAGE, SHIPPING_PERCENTAGE  } from './constants';

export const getShippingValue = value => value * SHIPPING_PERCENTAGE;

export const getDutyValue = value => {
    const shippingValue = value + getShippingValue(value);
    return shippingValue * DUTY_PERCENTAGE;
}

export const getIvaValue = value => {
    const dutyValue = getDutyValue(value);
    const shippingValue = getShippingValue(value);
    const ivaBase = value + shippingValue + dutyValue;
    return ivaBase * IVA_PERCENTAGE;
}

export const getTaxes = value => {
    return getIvaValue(value) + getDutyValue(value);
}