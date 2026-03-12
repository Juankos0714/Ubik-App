export class EstablishmentValidation {
    /* ================================
     *  VALIDACIONES BÁSICAS
     * ================================ */
    static required(control) {
        return control.value === null ||
            control.value === undefined ||
            control.value === ''
            ? { required: true }
            : null;
    }
    static minLength(min) {
        return (control) => {
            if (!control.value)
                return null;
            return control.value.length < min
                ? { minLength: { requiredLength: min } }
                : null;
        };
    }
    /* ================================
     *  TELÉFONO
     * ================================ */
    static phoneNumber(control) {
        if (!control.value)
            return null;
        const regex = /^\+?\d{7,15}$/;
        return !regex.test(control.value)
            ? { phoneNumber: true }
            : null;
    }
    /* ================================
     *  EMAIL
     * ================================ */
    static email(control) {
        if (!control.value)
            return null;
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return !regex.test(control.value)
            ? { email: true }
            : null;
    }
    /* ================================
     *  COORDENADAS
     * ================================ */
    static latitude(control) {
        if (control.value === null || control.value === '')
            return null;
        const value = Number(control.value);
        return isNaN(value) || value < -90 || value > 90
            ? { latitude: true }
            : null;
    }
    static longitude(control) {
        if (control.value === null || control.value === '')
            return null;
        const value = Number(control.value);
        return isNaN(value) || value < -180 || value > 180
            ? { longitude: true }
            : null;
    }
    /* ================================
     *  IMÁGENES
     * ================================ */
    static imagesRequired(min = 1) {
        return (control) => {
            const files = control.value;
            if (!files || files.length < min) {
                return { imagesRequired: { min } };
            }
            return null;
        };
    }
    static imageSize(maxMb = 5) {
        return (control) => {
            const files = control.value;
            if (!files)
                return null;
            const maxSize = maxMb * 1024 * 1024;
            const invalid = files.some(file => file.size > maxSize);
            return invalid ? { imageSize: true } : null;
        };
    }
    static imageType(allowedTypes = ['image/jpeg', 'image/png', 'image/webp']) {
        return (control) => {
            const files = control.value;
            if (!files)
                return null;
            const invalid = files.some(file => !allowedTypes.includes(file.type));
            return invalid ? { imageType: true } : null;
        };
    }
    /* ================================
     *  PASSWORDS (LocationInfo)
     * ================================ */
    static strongPassword(control) {
        if (!control.value)
            return null;
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
        return !regex.test(control.value)
            ? { strongPassword: true }
            : null;
    }
    static matchFields(field, confirmField) {
        return (group) => {
            const value = group.get(field)?.value;
            const confirm = group.get(confirmField)?.value;
            if (value !== confirm) {
                group.get(confirmField)?.setErrors({ match: true });
                return { match: true };
            }
            return null;
        };
    }
}
