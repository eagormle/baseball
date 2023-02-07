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


import * as runtime from '../runtime';
import {
    CreateOrder,
    CreateOrderFromJSON,
    CreateOrderToJSON,
    GetOrder,
    GetOrderFromJSON,
    GetOrderToJSON,
    HttpStatusCode,
    HttpStatusCodeFromJSON,
    HttpStatusCodeToJSON,
    OrderFilter,
    OrderFilterFromJSON,
    OrderFilterToJSON,
    UpdateOrder,
    UpdateOrderFromJSON,
    UpdateOrderToJSON,
} from '../models';

export interface OrdersFilteredPostRequest {
    orderFilter?: OrderFilter;
}

export interface OrdersIdDeleteRequest {
    id: number;
}

export interface OrdersIdPutRequest {
    id: number;
    updateOrder?: UpdateOrder;
}

export interface OrdersPostRequest {
    createOrder?: CreateOrder;
}

/**
 * 
 */
export class OrdersApi extends runtime.BaseAPI {

    /**
     */
    async ordersFilteredPostRaw(requestParameters: OrdersFilteredPostRequest): Promise<runtime.ApiResponse<Array<GetOrder>>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/Orders/Filtered`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: OrderFilterToJSON(requestParameters.orderFilter),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(GetOrderFromJSON));
    }

    /**
     */
    async ordersFilteredPost(requestParameters: OrdersFilteredPostRequest): Promise<Array<GetOrder>> {
        const response = await this.ordersFilteredPostRaw(requestParameters);
        return await response.value();
    }

    /**
     */
    async ordersIdDeleteRaw(requestParameters: OrdersIdDeleteRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling ordersIdDelete.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/Orders/{Id}`.replace(`{${"Id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async ordersIdDelete(requestParameters: OrdersIdDeleteRequest): Promise<void> {
        await this.ordersIdDeleteRaw(requestParameters);
    }

    /**
     */
    async ordersIdPutRaw(requestParameters: OrdersIdPutRequest): Promise<runtime.ApiResponse<GetOrder>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling ordersIdPut.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/Orders/{Id}`.replace(`{${"Id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateOrderToJSON(requestParameters.updateOrder),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => GetOrderFromJSON(jsonValue));
    }

    /**
     */
    async ordersIdPut(requestParameters: OrdersIdPutRequest): Promise<GetOrder> {
        const response = await this.ordersIdPutRaw(requestParameters);
        return await response.value();
    }

    /**
     */
    async ordersPostRaw(requestParameters: OrdersPostRequest): Promise<runtime.ApiResponse<HttpStatusCode>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/Orders`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateOrderToJSON(requestParameters.createOrder),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => HttpStatusCodeFromJSON(jsonValue));
    }

    /**
     */
    async ordersPost(requestParameters: OrdersPostRequest): Promise<HttpStatusCode> {
        const response = await this.ordersPostRaw(requestParameters);
        return await response.value();
    }

}
