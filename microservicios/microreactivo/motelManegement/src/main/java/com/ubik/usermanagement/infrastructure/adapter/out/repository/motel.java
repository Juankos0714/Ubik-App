
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

@Table("motel")
public record MotelEntity(
        @Id Long id, 
        String username,
        String address,
        String phoneNumber
        String description,
        String city,
        Long property_id,
        java.time.LocalDateTime data_created
) {
}