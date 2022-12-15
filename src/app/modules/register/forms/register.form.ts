import { FormControl, FormGroup, Validators } from "@angular/forms"

export const FRegister = function () {
    return new FormGroup({
        username: new FormControl(null, [Validators.required]),
        email: new FormControl(null, [Validators.required]),
        password: new FormControl(null, [Validators.required])
    })
}
