/* tslint:disable */
/* eslint-disable */
/**
 * RedCloor
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    OrderType,
    OrderTypeFromJSON,
    OrderTypeFromJSONTyped,
    OrderTypeToJSON,
} from './';

/**
 * 
 * @export
 * @interface OrderFilter
 */
export interface OrderFilter {
    /**
     * 
     * @type {OrderType}
     * @memberof OrderFilter
     */
    orderType?: OrderType;
}

export function OrderFilterFromJSON(json: any): OrderFilter {
    return OrderFilterFromJSONTyped(json, false);
}

export function OrderFilterFromJSONTyped(json: any, ignoreDiscriminator: boolean): OrderFilter {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'orderType': !exists(json, 'orderType') ? undefined : OrderTypeFromJSON(json['orderType']),
    };
}

export function OrderFilterToJSON(value?: OrderFilter | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'orderType': OrderTypeToJSON(value.orderType),
    };
}


