/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as shared from "../sdk/models/shared";
import { Pet } from "./pet";
import { Store } from "./store";
import { User } from "./user";
import axios from "axios";
import { AxiosInstance } from "axios";

/**
 * Contains the list of servers available to the SDK
 */
export const ServerList = [
    /**
     * SwaggerHub API Auto Mocking
     */
    "https://virtserver.swaggerhub.com/apple313/Petstore-Example/1.0.0",
    "https://petstore.swagger.io/v2",
] as const;

/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    petstoreAuth?: string;

    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;

    /**
     * Allows overriding the default server used by the SDK
     */
    serverIdx?: number;

    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
    /**
     * Allows overriding the default retry config used by the SDK
     */
    retryConfig?: utils.RetryConfig;
};

export class SDKConfiguration {
    defaultClient: AxiosInstance;
    security?: shared.Security | (() => Promise<shared.Security>);
    serverURL: string;
    serverDefaults: any;
    language = "typescript";
    openapiDocVersion = "1.0.0";
    sdkVersion = "0.3.0";
    genVersion = "2.213.3";
    userAgent = "speakeasy-sdk/typescript 0.3.0 2.213.3 1.0.0 PetStore2";
    retryConfig?: utils.RetryConfig;
    public constructor(init?: Partial<SDKConfiguration>) {
        Object.assign(this, init);
    }
}

/**
 * Swagger Petstore: This is a sample Petstore server.  You can find
 *
 * @remarks
 * out more about Swagger at
 * [http://swagger.io](http://swagger.io) or on
 * [irc.freenode.net, #swagger](http://swagger.io/irc/).
 *
 *
 * @see {@link http://swagger.io} - Find out more about Swagger
 */
export class PetStore2 {
    /**
     * Everything about your Pets
     *
     * @see {@link http://swagger.io} - Find out more
     */
    public pet: Pet;
    /**
     * Access to Petstore orders
     */
    public store: Store;
    /**
     * Operations about user
     *
     * @see {@link http://swagger.io} - Find out more about our store
     */
    public user: User;

    private sdkConfiguration: SDKConfiguration;

    constructor(props?: SDKProps) {
        let serverURL = props?.serverURL;
        const serverIdx = props?.serverIdx ?? 0;

        if (!serverURL) {
            serverURL = ServerList[serverIdx];
        }

        const defaultClient = props?.defaultClient ?? axios.create();
        this.sdkConfiguration = new SDKConfiguration({
            defaultClient: defaultClient,
            security: new shared.Security({ petstoreAuth: props?.petstoreAuth }),

            serverURL: serverURL,
            retryConfig: props?.retryConfig,
        });

        this.pet = new Pet(this.sdkConfiguration);
        this.store = new Store(this.sdkConfiguration);
        this.user = new User(this.sdkConfiguration);
    }
}
