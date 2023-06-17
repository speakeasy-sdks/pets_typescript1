# user

## Overview

Operations about user

Find out more about our store
<http://swagger.io>
### Available Operations

* [createUser](#createuser) - Create user
* [createUsersWithArrayInput](#createuserswitharrayinput) - Creates list of users with given input array
* [createUsersWithListInput](#createuserswithlistinput) - Creates list of users with given input array
* [deleteUser](#deleteuser) - Delete user
* [getUserByName](#getuserbyname) - Get user by user name
* [loginUser](#loginuser) - Logs user into the system
* [logoutUser](#logoutuser) - Logs out current logged in user session
* [updateUser](#updateuser) - Updated user

## createUser

This can only be done by the logged in user.

### Example Usage

```typescript
import { PetStore2 } from "PetStore2";
import { CreateUserResponse } from "PetStore2/dist/sdk/models/operations";

const sdk = new PetStore2();

sdk.user.createUser({
  email: "Macy.Durgan@gmail.com",
  firstName: "Zechariah",
  id: 653108,
  lastName: "McCullough",
  password: "numquam",
  phone: "1-542-613-1663 x171",
  userStatus: 949572,
  username: "Freida.Ondricka9",
}).then((res: CreateUserResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `request`                                                    | [shared.User](../../models/shared/user.md)                   | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.CreateUserResponse](../../models/operations/createuserresponse.md)>**


## createUsersWithArrayInput

Creates list of users with given input array

### Example Usage

```typescript
import { PetStore2 } from "PetStore2";
import { CreateUsersWithArrayInputResponse } from "PetStore2/dist/sdk/models/operations";

const sdk = new PetStore2();

sdk.user.createUsersWithArrayInput([
  {
    email: "Margie_Boyer87@hotmail.com",
    firstName: "Jane",
    id: 509624,
    lastName: "Wolff",
    password: "ipsa",
    phone: "(570) 242-9132 x4163",
    userStatus: 880476,
    username: "Harry21",
  },
  {
    email: "Kennedi.Mante50@hotmail.com",
    firstName: "Judah",
    id: 916723,
    lastName: "Botsford",
    password: "repudiandae",
    phone: "(292) 406-8167 x8221",
    userStatus: 397821,
    username: "Kyler16",
  },
  {
    email: "Friedrich67@hotmail.com",
    firstName: "Kevin",
    id: 270008,
    lastName: "Prosacco",
    password: "tempore",
    phone: "942-853-5856 x289",
    userStatus: 680056,
    username: "Isadore_Kirlin69",
  },
]).then((res: CreateUsersWithArrayInputResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `request`                                                    | [shared.User[]](../../models//.md)                           | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.CreateUsersWithArrayInputResponse](../../models/operations/createuserswitharrayinputresponse.md)>**


## createUsersWithListInput

Creates list of users with given input array

### Example Usage

```typescript
import { PetStore2 } from "PetStore2";
import { CreateUsersWithListInputResponse } from "PetStore2/dist/sdk/models/operations";

const sdk = new PetStore2();

sdk.user.createUsersWithListInput([
  {
    email: "Obie.Schulist@gmail.com",
    firstName: "Mariah",
    id: 881104,
    lastName: "Friesen",
    password: "occaecati",
    phone: "(996) 676-5592 x634",
    userStatus: 618809,
    username: "Lenna47",
  },
]).then((res: CreateUsersWithListInputResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `request`                                                    | [shared.User[]](../../models//.md)                           | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.CreateUsersWithListInputResponse](../../models/operations/createuserswithlistinputresponse.md)>**


## deleteUser

This can only be done by the logged in user.

### Example Usage

```typescript
import { PetStore2 } from "PetStore2";
import { DeleteUserResponse } from "PetStore2/dist/sdk/models/operations";

const sdk = new PetStore2();

sdk.user.deleteUser({
  username: "Elisha.Rau",
}).then((res: DeleteUserResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [operations.DeleteUserRequest](../../models/operations/deleteuserrequest.md) | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.DeleteUserResponse](../../models/operations/deleteuserresponse.md)>**


## getUserByName

Get user by user name

### Example Usage

```typescript
import { PetStore2 } from "PetStore2";
import { GetUserByNameResponse } from "PetStore2/dist/sdk/models/operations";

const sdk = new PetStore2();

sdk.user.getUserByName({
  username: "Effie_Hoppe",
}).then((res: GetUserByNameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.GetUserByNameRequest](../../models/operations/getuserbynamerequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.GetUserByNameResponse](../../models/operations/getuserbynameresponse.md)>**


## loginUser

Logs user into the system

### Example Usage

```typescript
import { PetStore2 } from "PetStore2";
import { LoginUserResponse } from "PetStore2/dist/sdk/models/operations";

const sdk = new PetStore2();

sdk.user.loginUser({
  password: "eum",
  username: "Shaina29",
}).then((res: LoginUserResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                  | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `request`                                                                  | [operations.LoginUserRequest](../../models/operations/loginuserrequest.md) | :heavy_check_mark:                                                         | The request object to use for the request.                                 |
| `config`                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)               | :heavy_minus_sign:                                                         | Available config options for making requests.                              |


### Response

**Promise<[operations.LoginUserResponse](../../models/operations/loginuserresponse.md)>**


## logoutUser

Logs out current logged in user session

### Example Usage

```typescript
import { PetStore2 } from "PetStore2";
import { LogoutUserResponse } from "PetStore2/dist/sdk/models/operations";

const sdk = new PetStore2();

sdk.user.logoutUser().then((res: LogoutUserResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.LogoutUserResponse](../../models/operations/logoutuserresponse.md)>**


## updateUser

This can only be done by the logged in user.

### Example Usage

```typescript
import { PetStore2 } from "PetStore2";
import { UpdateUserResponse } from "PetStore2/dist/sdk/models/operations";

const sdk = new PetStore2();

sdk.user.updateUser({
  user: {
    email: "Kevon_Hermann@gmail.com",
    firstName: "Kiley",
    id: 33625,
    lastName: "O'Hara",
    password: "reiciendis",
    phone: "1-442-913-0498 x2857",
    userStatus: 447926,
    username: "Barbara.Bradtke71",
  },
  username: "Janessa.Zulauf90",
}).then((res: UpdateUserResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [operations.UpdateUserRequest](../../models/operations/updateuserrequest.md) | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.UpdateUserResponse](../../models/operations/updateuserresponse.md)>**

