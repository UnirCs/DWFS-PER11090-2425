# Cinema Application

This is a Spring Boot application for managing a cinema's movie database. It allows users to create, delete, and modify movie entries.

## Project Structure

```
CinemaApplication
├── src
│   ├── main
│   │   ├── java
│   │   │   └── com
│   │   │       └── example
│   │   │           └── cinema
│   │   │               ├── CinemaApplication.java
│   │   │               ├── controller
│   │   │               │   └── MovieController.java
│   │   │               ├── model
│   │   │               │   └── Movie.java
│   │   │               └── service
│   │   │                   └── MovieService.java
│   │   └── resources
│   │       └── application.properties
├── .gitignore
├── mvnw
├── mvnw.cmd
└── pom.xml
```

## Features

- **Create Movie**: Add new movies to the database.
- **Delete Movie**: Remove existing movies from the database.
- **Update Movie**: Modify details of existing movies.

## Getting Started

1. Clone the repository.
2. Navigate to the project directory.
3. Run the application using `mvn spring-boot:run`.

## Dependencies

This project uses Maven for dependency management. Ensure you have Maven installed or use the provided wrapper scripts (`mvnw` or `mvnw.cmd`).

## License

This project is licensed under the MIT License.