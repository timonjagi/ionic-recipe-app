!function(){function e(e){return function(e){if(Array.isArray(e))return n(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return n(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);"Object"===i&&e.constructor&&(i=e.constructor.name);if("Map"===i||"Set"===i)return Array.from(e);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return n(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,i=new Array(n);t<n;t++)i[t]=e[t];return i}function t(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function i(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function r(e,n,t){return n&&i(e.prototype,n),t&&i(e,t),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"7Lvj":function(e,n,i){"use strict";i.r(n),i.d(n,"RecipesPageModule",(function(){return w}));var o,c=i("ofXK"),a=i("3Pt+"),u=i("TEn/"),l=i("tyNb"),s=i("fXoL"),p=i("DBWA"),f=function(e){return["/recipes/",e]},b=((o=function(){function e(){t(this,e)}return r(e,[{key:"ngOnInit",value:function(){}}]),e}()).\u0275fac=function(e){return new(e||o)},o.\u0275cmp=s.Bb({type:o,selectors:[["app-recipe-item"]],inputs:{recipeItem:"recipeItem"},decls:5,vars:5,consts:[[3,"routerLink"],[1,"ion-margin"],[3,"src"]],template:function(e,n){1&e&&(s.Kb(0,"ion-item",0),s.Kb(1,"ion-avatar",1),s.Ib(2,"ion-img",2),s.Jb(),s.Kb(3,"ion-label"),s.bc(4),s.Jb(),s.Jb()),2&e&&(s.Vb("routerLink",s.Wb(3,f,n.recipeItem.id)),s.xb(2),s.Vb("src",n.recipeItem.imageUrl),s.xb(2),s.dc(" ",n.recipeItem.title," "))},directives:[u.n,u.x,l.h,u.c,u.m,u.o],styles:[""]}),o);function m(e,n){1&e&&s.Ib(0,"app-recipe-item",2),2&e&&s.Vb("recipeItem",n.$implicit)}var d,g,h,y=[{path:"",component:(d=function(){function e(n){t(this,e),this.recipesService=n}return r(e,[{key:"ngOnInit",value:function(){console.log("ngOnInit"),console.log(this.recipes)}},{key:"ionViewWillEnter",value:function(){console.log("ionViewWillEnter"),this.recipes=this.recipesService.getAllRecipes()}},{key:"ionViewDidEnter",value:function(){console.log("ionViewDidEnter")}},{key:"ionViewWillLeave",value:function(){console.log("ionViewWillLeave")}},{key:"ionViewDidLeave",value:function(){console.log("ionViewDidLeave")}},{key:"ngOnDestroy",value:function(){console.log("ngOnDestroy called")}}]),e}(),d.\u0275fac=function(e){return new(e||d)(s.Hb(p.a))},d.\u0275cmp=s.Bb({type:d,selectors:[["app-recipes"]],decls:7,vars:1,consts:[["color","primary"],[3,"recipeItem",4,"ngFor","ngForOf"],[3,"recipeItem"]],template:function(e,n){1&e&&(s.Kb(0,"ion-header"),s.Kb(1,"ion-toolbar",0),s.Kb(2,"ion-title"),s.bc(3,"Recipes"),s.Jb(),s.Jb(),s.Jb(),s.Kb(4,"ion-content"),s.Kb(5,"ion-list"),s.ac(6,m,1,1,"app-recipe-item",1),s.Jb(),s.Jb()),2&e&&(s.xb(6),s.Vb("ngForOf",n.recipes))},directives:[u.k,u.t,u.s,u.i,u.p,c.h,b],styles:[""]}),d)},{path:":recipeId",loadChildren:function(){return i.e(11).then(i.bind(null,"hZX4")).then((function(e){return e.RecipeDetailPageModule}))}}],v=((h=function e(){t(this,e)}).\u0275mod=s.Fb({type:h}),h.\u0275inj=s.Eb({factory:function(e){return new(e||h)},imports:[[l.i.forChild(y)],l.i]}),h),w=((g=function e(){t(this,e)}).\u0275mod=s.Fb({type:g}),g.\u0275inj=s.Eb({factory:function(e){return new(e||g)},imports:[[c.b,a.a,u.u,v]]}),g)},DBWA:function(n,i,o){"use strict";o.d(i,"a",(function(){return a}));var c=o("fXoL"),a=function(){var n=function(){function n(){t(this,n),this.recipes=[{id:"r1",title:"Schnitzel",imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Wiener-Schnitzel02.jpg/220px-Wiener-Schnitzel02.jpg",ingredients:["French Fries","Pork Meat","Salad"]},{id:"r2",title:"Spaghetti",imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Spaghetti_alle_vongole.jpg/285px-Spaghetti_alle_vongole.jpg",ingredients:["Spaghetti","Meat","Tomatoes"]}]}return r(n,[{key:"getAllRecipes",value:function(){return e(this.recipes)}},{key:"getRecipe",value:function(e){return Object.assign({},this.recipes.find((function(n){return n.id===e})))}},{key:"deleteRecipe",value:function(e){this.recipes=this.recipes.filter((function(n){return n.id!==e}))}}]),n}();return n.\u0275fac=function(e){return new(e||n)},n.\u0275prov=c.Db({token:n,factory:n.\u0275fac,providedIn:"root"}),n}()}}])}();