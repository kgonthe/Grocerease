Grocer.ease

About:

Grocerease is a web-based application designed to help users organise their weekly grocery shopping lists efficiently. 
The website provides a seamless user experience with an intuitive interface for managing shopping lists, submitting items, and viewing personlised routes.
My design incorporates a fun, playful aesthetic to make grocery shopping enjoyable.

Features:

- Homepage (index.html): A landing page meant to be welcoming and warm with it's greeting and weekly savings information.
- Your Lists page (list.html): Page where one can create and manage their grocery lists.
- Your Profile page (profile.html): A basic profile page with bio information, seetings, and account management options (currently disabled)
+ Responsiveness.
- Routes:
    - Homepage (/): Displays a greeting and the current list of grocery items from the database.
    - Submit form (/submit): Allows users to submit grocery items through a form. Which are added to the databse and rendered dynamically.
    - Dynamic Route (/user/username): Personalised page based on user's username
    - About PAge (/): Describes the app and it's purpose.
- CRUD Functionality:
    - Create: Add new items to grocery list.
    - Read: View all items on homepage.
    - Update: Edit existing items.
    - Delete: Remove items from grocery list.
- Error handeling: Displays 404 error message for unknown routes.
- Backend: Backend is built using Express.js with a SQLite Database connection.
- Templating: Uses EJS to render items dynamically within the HTML. 

Software and Tech used:

- HTML5: to structure webpages.
- CSS3: for styling and implementation of media queries.
- JavaScript: For backend logic and routing.
- SQLite3: Used for stoeing grocery items. 
- EJS: Render dynamic content.

Installation:

1. Clone the repository.
2. Install dependancies. 
3. Start the server.
4. Open browser and visit localhost:3000

Known issues:

- Profile settings are currently inactive.
- Static pages do not reflect current database.
- User login capabilities and account handling to be added in future versions. 

Licence:

This project is under the MIT Licence.

Credits:

1. Kgonthe Radebe (Developer)
2. Google fonts for "Inter" font family
3. Unsplash for Free Use pictures
4. Canva AI for generated Corporate Memphis illustration (Commented out currently)
5. ChatGPT for minor debugging issues.

Happy shopping! 