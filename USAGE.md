<!-- Start SDK Example Usage -->


```typescript
import { PetStore2 } from "PetStore2";
import { PetStatus } from "PetStore2/dist/sdk/models/shared";

(async () => {
    const sdk = new PetStore2({
        security: {
            petstoreAuth: "",
        },
    });

    const res = await sdk.pet.addPetJson({
        category: {},
        name: "doggie",
        photoUrls: ["string"],
        tags: [{}],
    });

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End SDK Example Usage -->