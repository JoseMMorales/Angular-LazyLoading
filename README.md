
<div align="center">
  <img src="https://miro.medium.com/max/5000/1*s3yfQnz9cqkOU8i-lL7Eiw.jpeg" width="100%">
</div>

<hr>

[Lazy loading](https://angular.io/guide/lazy-loading-ngmodules) is a technique in Angular that allows you to load JavaScript components asynchronously when a specific route is activated. It improves the speed of the application load time by splitting the application into several bundles using loadChildren (instead of component).

## How Lazy Loading works?
The application is split into multiple modules. Top level in the tree is the App itself where handle a main module which will hold the root components (usually called app-routing.module.ts located in the app folder), and underneath will be seat the featured modules which will be loaded "on demand" after user interaction. 

Each module can define multiple components, services, pages, models and routes if the project requires.

<div align="center">

![Screenshot 2021-12-22 at 17 11 25](https://user-images.githubusercontent.com/43299285/147122174-a706d0e2-c45c-47ea-92d1-70507c3366a5.png)

</div>

### Declare the Lazy Load Routes ...

The way that lazy load in Angular modules is declared via route declarations. We can use Promise-based syntax for declaring which routes to lazy load, so we add to a loadChildren property on the routes(see below)...

<div align="center">

![Screenshot 2021-12-22 at 17 30 25](https://user-images.githubusercontent.com/43299285/147124615-8d3f63ca-3755-4a06-a74d-e44596c39aba.png)

</div>

## ng commands for pages in auth modules...
* `ng g m module --routing`
* `ng g m auth/authRouting --flat`
* `ng g c auth/pages/feature`

## Installing this repo
* `git clone https://github.com/JoseMMorales/Angular-LazyLoading.git`
* `cd Angular-LazyLoading`
* `npm start`
* `ng serve`

## Author
JoseMMorales
