## the-electric-conch

#### _By Liam Stabeno_

### Description

This app was designed around a hypothetical situation  of Ralph having a laptop to keep track of all the Castaways on the desert island in <em>Lord of the Flies</em>.

### Requirements

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/en)
* [Angular2](https://v2.angular.io/docs/ts/latest/)

### Installation

In  terminal type:
* `git clone https://github.com/mliams/electric-conch.git`
* `cd electric-conch`
* `npm install`


## Database Configuration
  * Create a [Firebase](https://firebase.google.com/) account.
  * Create a new project in your Firebase account.
  * Click the database icon on the left of the firebase. homepage, then click rules at the top, then Copy and Paste

   ```
   {
  "rules": {
    ".read": "true",
    ".write": "true"
  } }
  ```

  into the file and press CMD S (Ctrl S on PC).
  * Create an api-keys file in the top level of the-electric-conch directory by entering
  `touch src/app/api-keys.ts` in the terminal.
  * From the Firebase overview page in your project name click the "add Firebase to your web app" button.
  * Copy the "config" values.
  * Paste the copied config values from Firebase into your newly created api-keys file like this:

    ```
    export var masterFirebaseConfig = {
      apiKey: "YOUR FIREBASE VALUE HERE",
      authDomain: "YOUR FIREBASE VALUE HERE",
      databaseURL: "YOUR FIREBASE VALUE HERE",
      projectId: "YOUR FIREBASE VALUE HERE",
      storageBucket: "YOUR FIREBASE VALUE HERE",
      messagingSenderId: "YOUR FIREBASE VALUE HERE"
    };

    ```

### Running the App

Type `ng serve` in the terminal. Navigate to `http://localhost:4200/` in your browser.

### Next Steps
* Style everything, the whole concept of this app is to keep track of all castaways allied with you, and against.  Color coded background panels corresponding with each leader (Ralph or Jack) would help differentiate the two.
* Create an algorithm that ranks the Castaways by usefulness, the reason the constructor for Castaway has information like "intelligence" and "prone to violence" is just for this reason, along with height and weight ect.
* Create an algorithm that predicts the outcome of a mutiny with the alliances as they are at that point.
* Create an algorithm to show which castaway would most help your team if turned.
* Style the backgrounds, just give it a feel of a desert island, make it fun.

### Contact

liamstabeno@gmail.com

### License

Copyright (c) 2017 **_MIT License_**
