/** Utils */
export function isValidUrl(url) {
    try {
        const u = new URL(url);
        return u.protocol === "http:" || u.protocol === "https:";
    }
    catch {
        return false;
    }
}
export function uniqueNumbers(arr) {
    return Array.from(new Set(arr));
}
export function toNumber(value) {
    const normalized = String(value ?? "").replace(",", ".").trim();
    if (!normalized)
        return null;
    const n = Number(normalized);
    return Number.isFinite(n) ? n : null;
}
/** Angular Validators */
export function urlValidator(ctrl) {
    const v = String(ctrl.value ?? "").trim();
    if (!v)
        return { required: true };
    if (!isValidUrl(v))
        return { url: true };
    return null;
}
export function latValidator(ctrl) {
    const n = toNumber(ctrl.value);
    if (n === null)
        return { number: true };
    if (n < -90 || n > 90)
        return { range: true };
    return null;
}
export function lngValidator(ctrl) {
    const n = toNumber(ctrl.value);
    if (n === null)
        return { number: true };
    if (n < -180 || n > 180)
        return { range: true };
    return null;
}
/** Validación completa del payload (JSON) */
export function validateRoomPayload(payload) {
    const errors = {};
    if (!Number.isInteger(payload.motelId) || payload.motelId <= 0) {
        errors.motelId = "motelId debe ser un entero > 0";
    }
    if (!payload.number?.trim()) {
        errors.number = "El número de habitación es obligatorio";
    }
    // RoomType es union, no hace falta trim(). Solo valida que exista.
    if (!payload.roomType) {
        errors.roomType = "El tipo de habitación es obligatorio";
    }
    if (!(payload.price > 0)) {
        errors.price = "El precio debe ser mayor a 0";
    }
    if (!payload.description?.trim()) {
        errors.description = "La descripción es obligatoria";
    }
    // imageUrls es opcional en el type; valida solo si lo estás usando en este endpoint
    if (!Array.isArray(payload.imageUrls) || payload.imageUrls.length === 0) {
        errors.imageUrls = "Agrega al menos 1 URL de imagen";
    }
    else if (payload.imageUrls.some((u) => !isValidUrl(u))) {
        errors.imageUrls = "Hay URLs de imagen inválidas (usa http/https)";
    }
    /*
  
    if (payload.latitude !== undefined) {
      if (!(payload.latitude >= -90 && payload.latitude <= 90)) {
        errors.latitude = "Latitud inválida (-90 a 90)";
      }
    } else {
      errors.latitude = "La latitud es obligatoria";
    }
  
    if (payload.longitude !== undefined) {
      if (!(payload.longitude >= -180 && payload.longitude <= 180)) {
        errors.longitude = "Longitud inválida (-180 a 180)";
      }
    } else {
      errors.longitude = "La longitud es obligatoria";
    }
      */
    if (!Array.isArray(payload.serviceIds)) {
        errors.serviceIds = "serviceIds debe ser un arreglo";
    }
    else if (payload.serviceIds.length === 0) {
        errors.serviceIds = "Selecciona al menos 1 servicio";
    }
    else if (payload.serviceIds.some((id) => !Number.isInteger(id) || id <= 0)) {
        errors.serviceIds = "Hay IDs de servicio inválidos";
    }
    return errors;
}
export function hasErrors(errors) {
    return Object.keys(errors).length > 0;
}
