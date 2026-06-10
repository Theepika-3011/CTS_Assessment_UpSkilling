import java.util.List;

record Person(String name, int age) {}

public class RecordsExample {

    public static void main(String[] args) {

        List<Person> people = List.of(
            new Person("Dhana",20),
            new Person("Rahul",17),
            new Person("Priya",22)
        );

        people.stream()
              .filter(p -> p.age() >= 18)
              .forEach(System.out::println);
    }
}