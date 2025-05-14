import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";



export const dateValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const start = control.get('startDate');
    const end = control.get('endDate');

    if(start.value === null || end.value === null)
    return {dateValid : false}

    return start.value !== null && end.value !== null && start.value <= end.value
        ? { dateValid : false} : { dateValid: true };
}
