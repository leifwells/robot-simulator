# Robot Simulator

This is the technical interview assignment I was given:

> - This application simulates a toy robot moving on a 5x5 square tabletop. 
>
> - The tabletop has no obstructions.
>
> - The robot can move freely on the tabletop but must not fall off.
> 
> - Clicking on a table space will PLACE the robot on the table at the clicked position (using X, Y coordinates), facing north.
>
> - The origin (0,0) is at the SOUTH WEST corner of the table (bottom left).
>
> - The first valid command is a PLACE command. Subsequent commands can be issued in any order, including another PLACE command (i.e. you can click another space and it would place the original toy robot on that space).
>
> - MOVE will move the toy robot one space forward in the direction it is currently facing.
> 
> - LEFT and RIGHT will rotate the robot 90 degrees in the specified direction without changing the position of the robot.
>
> - REPORT will announce the X,Y position and F (facing direction) of the robot.
>
> - A robot not on the table ignores commands.
> 
> - Commands can be issued via buttons on the page or arrow keys 
> 
> - Provide test instructions to exercise the application.
>

## Questions

The only real question I had was around the concept of "LEFT" and "RIGHT". Since the actual action being taken really is rotating the direction, I replaced the LEFT with a counter-clockwise icon, and the RIGHT with a clockwise icon.

I went ahead and made this change as I would in a work environment to be able to show the UX designer what it would look like as it would be really simple to adjust or revert.

## Graphics

I made an executive decision to use CSS and icons for the robot tile instead of processing the graphics. Normally I would have asked for processed graphics (or processed them myself), but this also gave me an opportunity to demonstrate a couple of Angular and CSS skills.

Please note: I couldn't find the actual icon that matches the robot icon.

## Interactivity

The keyboard functions are working along with the on-screen buttons, with the added functionality of using the up key to move the robot.

## Unit Tests

The only real unit testing I created for this project was for the `game.service.ts` where all the data action is handled. These tests are certainly not as complex as they could be nor do they provide the level of coverage that I would normally create.

## Testing Instructions

For manually testing this project, I would refer a tester to the instructions (above) and remind them that they should test interactivity combining on-screen and keyboard actions. In a real-world scenario, I would set up a brief meeting with the testers and show them how I manually tested this project in development and answer any questions they might have.

## Thanks

Thank you for your consideration.

---

## Boilerplate ReadMe documentation

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.0.1.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
