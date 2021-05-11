# Trybeer project

Group full-stack project developed in 5 days, aiming at creating a beer selling and buying app.<br>
Agile methods used: Scrum and Kanban.<br>
Dev colleagues: [Virginia](https://github.com/virginia-duca), [Lucas](https://github.com/lucascv), [Jorge](https://github.com/JorgeLky), [Larissa](https://github.com/larissapalombo).

### Stack and architecture details

Front end - Reactjs, React Context API & hooks, fetching axios lib; <br>
Back end - Nodejs, Express, mySQL database, REST & MSC patterns;<br>
Style libs - Materialize for mobile-first layout, styled-components for Dark mode.

### Instructions to run the project

*Install dependencies*<br>
The project was uploaded without any node_modules or package-lock.json, so please use the command line```npm i``` in three places: root folder, front-end folder, back-end folder.

*Pre-seed the database*<br>
```sudo service mysql start``` (if necessary)<br>
```mysql -u root -p```<br>
```source ./script.sql```

*Launch the app*<br>
```npm start``` on both front-end and back-end folders, as indicated by both package.json settings.

*Test linter*<br>
```npm install eslint```<br>
```./node_modules/.bin/eslint .path_file_you_want_to_analyze```

### Ressources
[Video demo](https://www.linkedin.com/posts/juliette-beaudet_react-nodejs-mysql-activity-6770742874754584576-XNz9) of the app ; <br>
[Figma](https://www.figma.com/file/tzP4txu6Uy0qCxVZWdWMBO/TryBeer?node-id=0%3A1 ) product flow design we based our development on ; <br> 
[Project slides presentation (portuguese)](https://www.canva.com/design/DAEV9tS_qEc/ifjXL0GCUxOepagxH7gmRw/view?utm_content=DAEV9tS_qEc&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton) ; <br>
[Original Trybe project repository](https://github.com/tryber/sd-05-trybeer) with all project requirements ; <br>
[Trybeer V2 code](https://github.com/tryber/sd-05-project-trybeer-v2/pull/) with other requirements like ORM Sequelize, SOLID principles and real-time socket.io chat.


