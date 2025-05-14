import { AbstractControl } from '@angular/forms';

export class ConfirmPasswordValidator {
	/**
	 * Check matching password with confirm password
	 * @param control AbstractControl
	 */
	static MatchPassword(control: AbstractControl) {
		const password = control.get('password').value;
		const confirmPassword = control.get('confirmpassword').value;
		if (password !== confirmPassword) {
			control.get('confirmpassword').setErrors({confirmpassword: true});
		} else {
			return null;
		}
	}
}
