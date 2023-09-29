# PetStore2

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://github.com/speakeasy-sdks/pets_typescript1
```

### Yarn

```bash
yarn add https://github.com/speakeasy-sdks/pets_typescript1
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import { PetStore2 } from "PetStore2";
import { AddPetJsonResponse } from "PetStore2/dist/sdk/models/operations";
import { PetStatus } from "PetStore2/dist/sdk/models/shared";

const sdk = new PetStore2({
  security: {
    petstoreAuth: "",
  },
});

sdk.pet.addPetJson({
  category: {
    id: 775358,
    name: "male Convertible Strontium",
  },
  id: 681886,
  name: "doggie",
  photoUrls: [
    "Mobility",
  ],
  status: PetStatus.Pending,
  tags: [
    {
      id: 63852,
      name: "Freeway",
    },
  ],
}).then((res: AddPetJsonResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [pet](docs/sdks/pet/README.md)

* [addPetJson](docs/sdks/pet/README.md#addpetjson) - Add a new pet to the store
* [addPetRaw](docs/sdks/pet/README.md#addpetraw) - Add a new pet to the store
* [deletePet](docs/sdks/pet/README.md#deletepet) - Deletes a pet
* [findPetsByStatus](docs/sdks/pet/README.md#findpetsbystatus) - Finds Pets by status
* [~~findPetsByTags~~](docs/sdks/pet/README.md#findpetsbytags) - Finds Pets by tags :warning: **Deprecated**
* [getPetById](docs/sdks/pet/README.md#getpetbyid) - Find pet by ID
* [updatePetWithForm](docs/sdks/pet/README.md#updatepetwithform) - Updates a pet in the store with form data
* [updatePetJson](docs/sdks/pet/README.md#updatepetjson) - Update an existing pet
* [updatePetRaw](docs/sdks/pet/README.md#updatepetraw) - Update an existing pet
* [uploadFile](docs/sdks/pet/README.md#uploadfile) - uploads an image

### [store](docs/sdks/store/README.md)

* [deleteOrder](docs/sdks/store/README.md#deleteorder) - Delete purchase order by ID
* [getInventory](docs/sdks/store/README.md#getinventory) - Returns pet inventories by status
* [getOrderById](docs/sdks/store/README.md#getorderbyid) - Find purchase order by ID
* [placeOrder](docs/sdks/store/README.md#placeorder) - Place an order for a pet

### [user](docs/sdks/user/README.md)

* [createUser](docs/sdks/user/README.md#createuser) - Create user
* [createUsersWithArrayInput](docs/sdks/user/README.md#createuserswitharrayinput) - Creates list of users with given input array
* [createUsersWithListInput](docs/sdks/user/README.md#createuserswithlistinput) - Creates list of users with given input array
* [deleteUser](docs/sdks/user/README.md#deleteuser) - Delete user
* [getUserByName](docs/sdks/user/README.md#getuserbyname) - Get user by user name
* [loginUser](docs/sdks/user/README.md#loginuser) - Logs user into the system
* [logoutUser](docs/sdks/user/README.md#logoutuser) - Logs out current logged in user session
* [updateUser](docs/sdks/user/README.md#updateuser) - Updated user
<!-- End SDK Available Operations -->



<!-- Start Dev Containers -->

<!-- End Dev Containers -->



<!-- Start Pagination -->
# Pagination

Some of the endpoints in this SDK support pagination. To use pagination, you make your SDK calls as usual, but the
returned response object will have a `next` method that can be called to pull down the next group of results. If the
return value of `next` is `null`, then there are no more pages to be fetched.

Here's an example of one such pagination call:
<!-- End Pagination -->

<!-- Placeholder for Future Speakeasy SDK Sections -->



### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release!

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
