## React for Drupal

### Description

Add ReactJS to Drupal node pages in a progressively decoupled manner
utilizing webpack. In other words, this is the module you want to use
if you want to integrate React into your existing Drupal site instead
of creating a completely separate site sacrificing everything front end
related provided by Drupal core.

### How to use

1. In the CLI, cd to /path/to/module/app and run `npm install`.
2. Run `npm run build` to compile components. This will create an aggregated main.js and main.css
   files which will be loaded in through Drupal. You will need to run this command each time
   you make changes to your React code.
   
   
### Resources

* [Official React Site](https://reactjs.org)
* [Getting Started with React](https://reactjs.org/docs/getting-started.html)
* [Webpack Documentation](https://webpack.js.org/concepts)
   

### Maintainers

* [Brian McVeigh](https://www.drupal.org/u/bribread22)
