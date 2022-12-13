import { FormControl, FormGroup, Validators } from "@angular/forms"

export const FProductCreate = function () {
    return new FormGroup({
        title: new FormControl(null, [Validators.required]),
        price: new FormControl(null, [Validators.required, Validators.min(0.01)])
    })
}
