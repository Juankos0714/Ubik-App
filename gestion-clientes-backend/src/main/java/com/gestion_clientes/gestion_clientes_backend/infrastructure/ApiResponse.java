package com.gestion_clientes.gestion_clientes_backend.infrastructure;



import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import lombok.Builder;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@JsonInclude(JsonInclude.Include.NON_NULL)
public class ApiResponse<T> { // <T> define el tipo genérico de los datos de respuesta
    private boolean success;
    private String message;
    private String code;
    private T data;
    private Object errors;

    public static <T> ApiResponse<T> success(T data, String message) {
        return ApiResponse.<T>builder()
                .success(true)
                .message(message)
                .data(data)
                .build();
    }

    public static <T> ApiResponse<T> error(String code, String message) {
        return ApiResponse.<T>builder()
                .success(false)
                .code(code)
                .message(message)
                .build();
    }

    public static <T> ApiResponse<T> error(String code, String message, Object errors) {
        return ApiResponse.<T>builder()
                .success(false)
                .code(code)
                .message(message)
                .errors(errors)
                .build();
    }
}