# Profile Viewer: Minimal Solid App
A minimal profile viewer solid app. 

## Description 
A solid app that allows a solid user to view and edit his solid profile.

## Purpose 
* This is a minimal solid app. It does not use any library except the core libraries and the needed ones.

* The purpose is to understand solid in and out, so it can be used with custom configuration, or build upon it.


## Solid? 
If you don't know what solid is? Visit: [solid.mit.edu](https://solid.mit.edu) 

## Installation 

1. Clone or download this repo
    ```
    $ git clone https://github.com/pavittarx/solid-minimal.git
    ```
2. Install Nodejs Dependencies 
   ```
   $ npm install
   ```
3. Fire up a local Server 
   ```
   $ npm run start
   ```

4. You can now visit the site at: https://localhost:9227

## Feature list 
|Status| Feature |
|:---:|:---:|
|OK 200| Log in to a solid pod|
|OK 200 |Log out of a Solid pod|
|Not Implemented| Preview Profile Information|
|Not Implemented|Edit Profile Information|

## Dependencies 

### Browser Dependencies 
  * [solid-auth-client](https://github.com/solid/solid-auth-client): to provide authentication at a solid server.
  * [rdflib.js](https://github.com/linkeddata/rdflib.js): A library to work with linked data. A data format solid uses. 

### Server Dependencies 
  * [browser-sync](https://browsersync.io) : A NodeJs library to quickly create a local server. This is not a solid server.
  
## License 
DBAD (Don't be a Dick) Public License: [View License](license.md)

## Authore 
[pavittarx](https://github.com/pavittarx)
