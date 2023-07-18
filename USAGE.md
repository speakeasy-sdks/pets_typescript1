<!-- Start SDK Example Usage -->


```typescript
import { PetStore2 } from "PetStore2";
import { AddPetJsonResponse } from "PetStore2/dist/sdk/models/operations";
import { PetStatus } from "PetStore2/dist/sdk/models/shared";

const sdk = new PetStore2();

sdk.pet.addPetJson({
  category: {
    id: 548814,
    name: "Kelvin Sporer",
  },
  id: 544883,
  name: "doggie",
  photoUrls: [
    "vel",
    "error",
    "deserunt",
    "suscipit",
  ],
  status: PetStatus.Pending,
  tags: [
    {
      id: 891773,
      name: "Lucia Goldner",
    },
    {
      id: 791725,
      name: "Ken Kshlerin",
    },
  ],
}, {
  petstoreAuth: "",
}).then((res: AddPetJsonResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->