/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class FindPetsByTagsRequest extends SpeakeasyBase {
    /**
     * Tags to filter by
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tags" })
    tags: string[];
}

export class FindPetsByTagsResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    body?: Uint8Array;

    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * successful operation
     */
    @SpeakeasyMetadata({ elemType: shared.Pet })
    pets?: shared.Pet[];

    /**
     * HTTP response status code for this operation
     */
    @SpeakeasyMetadata()
    statusCode: number;

    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}
