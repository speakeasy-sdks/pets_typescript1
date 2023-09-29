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