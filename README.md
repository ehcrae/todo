# A simple to-do app
# Overview 🏷
## Core functionality ⚙️
distinct 'to-do' *items* that can be:
- [x] created
- [ ] editied
- [ ] removed
- [ ] in two states: *uncomplete* or *complete*

## Roadmap 🗺
- [x] Users can create todo items, but they will not persist after exiting the app
- [x] The todo submit form 'drops down' and hides after submitting the item
- [x] The app drops down from the menu bar and hides when not in focus
- [ ] The user may resize the app window and the dimensions *will* persist after exit
- [ ] We can remove completed items
- [ ] Items can be edited

## Potential features 📋
- [ ] Copying text from the clipboard straight into an item
- [ ] Toggle day and night mode
- [ ] Better CSS styling
- [ ] Real icon

# Usage
Todo uses [electron](https://github.com/electron/electron) and depends on [menubar](https://github.com/maxogden/menubar).
~~~bash
git clone && cd todo
npm install
npm start
~~~
I use [Pico.css](https://picocss.com/) for styling while developing todo.
~~~bash
npm install @picocss/pico
~~~