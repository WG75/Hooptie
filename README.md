### Usage

```sh
yarn start 
```


## Architecture

- **/Components** This folder contains Reusable UI  presentational components which means that it contains the styles files for those components where I used BEM methodology for class naming convention.

- **/Containers** Here is where things starts to get a little bit interesting, a container may contain one file (I.e. container file) or tow files:

    - *Container file* : 
    No thing new here, This where components connects to redux.
    
    - *Redux file* : Here I am following "ducks-modular-redux" proposal to group all redux stuff in one file. I really do like this approach because it keeps everything in one place which makes things easier when debugging.
    

- **/Api** I created a folder for models, each model file will contain all the http methods for a particular collection (I.e. cars / colors / etc).


### Improvements
Things that I would improve if I had more time:

- **Testing**: due to lack of time I was not able to test everything thoroughly and I was only able to test some components, reducers and actions Using Jest & Enzyme.
- **Type-checking**: I used flow to define the types of data that are passed into the components, But I did not cover all of the code but I made sure to cover the more important parts. also I used Object type in some parts which I would not do when it comes to real world projects

- **UI**: I tried to make the layout responsive using media queries But it is not super responsive So I would make more responsive if I had more time.
