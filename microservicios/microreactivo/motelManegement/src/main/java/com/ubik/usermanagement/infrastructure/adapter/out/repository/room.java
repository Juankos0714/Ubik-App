
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;
import org.springframework.data.relational.core.mapping.Column;

@Table ("room")
public record Room({
        @id Long id, 
        Long motel_id,
        String number,
        String roomType,
        double price,
        String description

}