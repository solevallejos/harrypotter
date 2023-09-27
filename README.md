# Harry Potter 🪄 ✨
This is a page that displays all the characters from the magical world of Harry Potter. By default, all characters are displayed.

In this project, the user can:

- Filter the characters based on whether they are staff or students.
- Access the character's information by clicking on their card.
- Save their favorite characters to view them later.

## Project installation
To install this project please follow this instructions:

1. Clone the repository:
```bash
git clone https://github.com/solevallejos/harrypotter.git
```

2. Install all the necessary dependencies:
```bash
npm install
```

3. To run this project, write the following command:
```bash
npm run start
```

## Libraries used
* [React Router Dom](https://www.npmjs.com/package/react-router-dom)
* [Styled Components](https://styled-components.com/)
* [Typescript](https://www.typescriptlang.org/)

## API Reference
Base URL https://hp-api.onrender.com/

#### Get all characters
```http
  GET /characters
```
#### Get all students
```http
  GET /characters/students
```
#### Get all staff
```http
  GET /characters/staff
```

#### Get information from a specific house
```http
  GET /characters/house/${house}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `house`   | `string` | **Required**. House name |


#### Get information from a specific character
```http
  GET /character/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Character information |


## Assets

### Color palette
- ![#EEE5DA](https://placehold.co/15x15/EEE5DA/EEE5DA.png) `#EEE5DA`
- ![#FBF8F5](https://placehold.co/15x15/FBF8F5/FBF8F5.png) `#FBF8F5`
- ![#8A7EB4](https://placehold.co/15x15/8A7EB4/8A7EB4.png) `#8A7EB4`
- ![#75A57F](https://placehold.co/15x15/75A57F/75A57F.png) `#75A57F`
- ![#F97071](https://placehold.co/15x15/F97071/F97071.png) `#F97071`
- ![#FADA74](https://placehold.co/15x15/FADA74/FADA74.png) `#FADA74`
- ![#4D3E38](https://placehold.co/15x15/4D3E38/4D3E38.png) `#4D3E38`

## Project structure
```
src/
├── assets - color palette and images
├── axios - basic axios configuration
├── hooks - custom hooks
└── components/ - Custom components
|   ├── Button
|   ├── Card
|   ├── Container
|   ├── Favorites
|   ├── Header
|   ├── Loader
|   ├── NavigationHeader
|   ├── Options
|   └── Typography
└── routes - project routes
    ├── Characters
    ├── FavoritesList
    ├── Home
    └── NotFound

```


## Future Improvements
I used tools appropriate for the project's size; that's why I didn't use external libraries for local state management. For the same reason, I used React Router for navigation and not another tool like Next.js, for example.

   ### Technical Tasks
  - Implementation of i18n for proper content translation.
  - Linter and prettier to further improve code quality.
  - Decouple component logic to make them completely agnostic to business logic.
  - Organize TypeScript variables.
  - Tests

  ### UI
  CSS resets to ensure proper functionality in different browsers and operating systems.

  ### UX
  - Add a search bar to search for specific characters.
  - Accessibility improvements.
  
## Unresolved Detected Issues
Both problems do not prevent the compilation of the project, but I believe it's important to mention them. They were not resolved due to time constraints.

- ~~Local storage is not functioning correctly on some occasions.~~ The issue was bigger than I thought so I decided to fix it.
- In the console, there are two errors related to styled components.
    