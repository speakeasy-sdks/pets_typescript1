# pet

## Overview

Everything about your Pets

Find out more
<http://swagger.io>
### Available Operations

* [addPetJson](#addpetjson) - Add a new pet to the store
* [addPetRaw](#addpetraw) - Add a new pet to the store
* [deletePet](#deletepet) - Deletes a pet
* [findPetsByStatus](#findpetsbystatus) - Finds Pets by status
* [~~findPetsByTags~~](#findpetsbytags) - Finds Pets by tags :warning: **Deprecated**
* [getPetById](#getpetbyid) - Find pet by ID
* [updatePetWithForm](#updatepetwithform) - Updates a pet in the store with form data
* [updatePetJson](#updatepetjson) - Update an existing pet
* [updatePetRaw](#updatepetraw) - Update an existing pet
* [uploadFile](#uploadfile) - uploads an image

## addPetJson

Add a new pet to the store

### Example Usage

```typescript
import { PetStore2 } from "PetStore2";
import { AddPetJsonResponse, AddPetJsonSecurity } from "PetStore2/dist/sdk/models/operations";
import { PetStatus } from "PetStore2/dist/sdk/models/shared";

const sdk = new PetStore2();
const operationSecurity: AddPetJsonSecurity = {
  petstoreAuth: "",
};

sdk.pet.addPetJson({
  category: {
    id: 925597,
    name: "Miss Raymond Hauck III",
  },
  id: 832620,
  name: "doggie",
  photoUrls: [
    "quo",
    "odit",
    "at",
    "at",
  ],
  status: PetStatus.Sold,
  tags: [
    {
      id: 799159,
      name: "Erik Lebsack",
    },
    {
      id: 118274,
      name: "Luke McCullough",
    },
  ],
}, operationSecurity).then((res: AddPetJsonResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [shared.Pet](../../models/shared/pet.md)                                       | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `security`                                                                     | [operations.AddPetJsonSecurity](../../models/operations/addpetjsonsecurity.md) | :heavy_check_mark:                                                             | The security requirements to use for the request.                              |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.AddPetJsonResponse](../../models/operations/addpetjsonresponse.md)>**


## addPetRaw

Add a new pet to the store

### Example Usage

```typescript
import { PetStore2 } from "PetStore2";
import { AddPetRawResponse, AddPetRawSecurity } from "PetStore2/dist/sdk/models/operations";
import { PetStatus } from "PetStore2/dist/sdk/models/shared";

const sdk = new PetStore2();
const operationSecurity: AddPetRawSecurity = {
  petstoreAuth: "",
};

sdk.pet.addPetRaw("hic".encode(), operationSecurity).then((res: AddPetRawResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [Uint8Array](../../models//.md)                                              | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `security`                                                                   | [operations.AddPetRawSecurity](../../models/operations/addpetrawsecurity.md) | :heavy_check_mark:                                                           | The security requirements to use for the request.                            |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.AddPetRawResponse](../../models/operations/addpetrawresponse.md)>**


## deletePet

Deletes a pet

### Example Usage

```typescript
import { PetStore2 } from "PetStore2";
import { DeletePetResponse, DeletePetSecurity } from "PetStore2/dist/sdk/models/operations";

const sdk = new PetStore2();
const operationSecurity: DeletePetSecurity = {
  petstoreAuth: "",
};

sdk.pet.deletePet({
  apiKey: "optio",
  petId: 521848,
}, operationSecurity).then((res: DeletePetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [operations.DeletePetRequest](../../models/operations/deletepetrequest.md)   | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `security`                                                                   | [operations.DeletePetSecurity](../../models/operations/deletepetsecurity.md) | :heavy_check_mark:                                                           | The security requirements to use for the request.                            |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.DeletePetResponse](../../models/operations/deletepetresponse.md)>**


## findPetsByStatus

Multiple status values can be provided with comma separated strings

### Example Usage

```typescript
import { PetStore2 } from "PetStore2";
import { FindPetsByStatusResponse, FindPetsByStatusSecurity } from "PetStore2/dist/sdk/models/operations";

const sdk = new PetStore2();
const operationSecurity: FindPetsByStatusSecurity = {
  petstoreAuth: "",
};

sdk.pet.findPetsByStatus({
  status: "beatae",
}, operationSecurity).then((res: FindPetsByStatusResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.FindPetsByStatusRequest](../../models/operations/findpetsbystatusrequest.md)   | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `security`                                                                                 | [operations.FindPetsByStatusSecurity](../../models/operations/findpetsbystatussecurity.md) | :heavy_check_mark:                                                                         | The security requirements to use for the request.                                          |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.FindPetsByStatusResponse](../../models/operations/findpetsbystatusresponse.md)>**


## ~~findPetsByTags~~

Muliple tags can be provided with comma separated strings. Use\ \ tag1, tag2, tag3 for testing.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { PetStore2 } from "PetStore2";
import { FindPetsByTagsResponse, FindPetsByTagsSecurity } from "PetStore2/dist/sdk/models/operations";

const sdk = new PetStore2();
const operationSecurity: FindPetsByTagsSecurity = {
  petstoreAuth: "",
};

sdk.pet.findPetsByTags({
  tags: [
    "molestiae",
    "modi",
  ],
}, operationSecurity).then((res: FindPetsByTagsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.FindPetsByTagsRequest](../../models/operations/findpetsbytagsrequest.md)   | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `security`                                                                             | [operations.FindPetsByTagsSecurity](../../models/operations/findpetsbytagssecurity.md) | :heavy_check_mark:                                                                     | The security requirements to use for the request.                                      |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.FindPetsByTagsResponse](../../models/operations/findpetsbytagsresponse.md)>**


## getPetById

Returns a single pet

### Example Usage

```typescript
import { PetStore2 } from "PetStore2";
import { GetPetByIdResponse, GetPetByIdSecurity } from "PetStore2/dist/sdk/models/operations";

const sdk = new PetStore2();
const operationSecurity: GetPetByIdSecurity = {
  apiKey: "",
};

sdk.pet.getPetById({
  petId: 186332,
}, operationSecurity).then((res: GetPetByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.GetPetByIdRequest](../../models/operations/getpetbyidrequest.md)   | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `security`                                                                     | [operations.GetPetByIdSecurity](../../models/operations/getpetbyidsecurity.md) | :heavy_check_mark:                                                             | The security requirements to use for the request.                              |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.GetPetByIdResponse](../../models/operations/getpetbyidresponse.md)>**


## updatePetWithForm

Updates a pet in the store with form data

### Example Usage

```typescript
import { PetStore2 } from "PetStore2";
import { UpdatePetWithFormResponse, UpdatePetWithFormSecurity } from "PetStore2/dist/sdk/models/operations";

const sdk = new PetStore2();
const operationSecurity: UpdatePetWithFormSecurity = {
  petstoreAuth: "",
};

sdk.pet.updatePetWithForm({
  petId: 774234,
  petPetIdBody: {
    name: "Cory Emmerich",
    status: "perferendis",
  },
}, operationSecurity).then((res: UpdatePetWithFormResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.UpdatePetWithFormRequest](../../models/operations/updatepetwithformrequest.md)   | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `security`                                                                                   | [operations.UpdatePetWithFormSecurity](../../models/operations/updatepetwithformsecurity.md) | :heavy_check_mark:                                                                           | The security requirements to use for the request.                                            |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.UpdatePetWithFormResponse](../../models/operations/updatepetwithformresponse.md)>**


## updatePetJson

Update an existing pet

### Example Usage

```typescript
import { PetStore2 } from "PetStore2";
import { UpdatePetJsonResponse, UpdatePetJsonSecurity } from "PetStore2/dist/sdk/models/operations";
import { PetStatus } from "PetStore2/dist/sdk/models/shared";

const sdk = new PetStore2();
const operationSecurity: UpdatePetJsonSecurity = {
  petstoreAuth: "",
};

sdk.pet.updatePetJson({
  category: {
    id: 324141,
    name: "Louis Moore",
  },
  id: 386489,
  name: "doggie",
  photoUrls: [
    "saepe",
    "fuga",
    "in",
    "corporis",
  ],
  status: PetStatus.Pending,
  tags: [
    {
      id: 902349,
      name: "Roger Beier",
    },
    {
      id: 653140,
      name: "Ernest Ebert",
    },
  ],
}, operationSecurity).then((res: UpdatePetJsonResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [shared.Pet](../../models/shared/pet.md)                                             | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `security`                                                                           | [operations.UpdatePetJsonSecurity](../../models/operations/updatepetjsonsecurity.md) | :heavy_check_mark:                                                                   | The security requirements to use for the request.                                    |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.UpdatePetJsonResponse](../../models/operations/updatepetjsonresponse.md)>**


## updatePetRaw

Update an existing pet

### Example Usage

```typescript
import { PetStore2 } from "PetStore2";
import { UpdatePetRawResponse, UpdatePetRawSecurity } from "PetStore2/dist/sdk/models/operations";
import { PetStatus } from "PetStore2/dist/sdk/models/shared";

const sdk = new PetStore2();
const operationSecurity: UpdatePetRawSecurity = {
  petstoreAuth: "",
};

sdk.pet.updatePetRaw("nobis".encode(), operationSecurity).then((res: UpdatePetRawResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [Uint8Array](../../models//.md)                                                    | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `security`                                                                         | [operations.UpdatePetRawSecurity](../../models/operations/updatepetrawsecurity.md) | :heavy_check_mark:                                                                 | The security requirements to use for the request.                                  |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.UpdatePetRawResponse](../../models/operations/updatepetrawresponse.md)>**


## uploadFile

uploads an image

### Example Usage

```typescript
import { PetStore2 } from "PetStore2";
import { UploadFileResponse, UploadFileSecurity } from "PetStore2/dist/sdk/models/operations";

const sdk = new PetStore2();
const operationSecurity: UploadFileSecurity = {
  petstoreAuth: "",
};

sdk.pet.uploadFile({
  requestBody: "enim".encode(),
  petId: 607831,
}, operationSecurity).then((res: UploadFileResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.UploadFileRequest](../../models/operations/uploadfilerequest.md)   | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `security`                                                                     | [operations.UploadFileSecurity](../../models/operations/uploadfilesecurity.md) | :heavy_check_mark:                                                             | The security requirements to use for the request.                              |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.UploadFileResponse](../../models/operations/uploadfileresponse.md)>**

