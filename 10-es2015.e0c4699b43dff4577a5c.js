(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"7Lvj":function(e,i,n){"use strict";n.r(i),n.d(i,"RecipesPageModule",(function(){return m}));var t=n("ofXK"),r=n("3Pt+"),o=n("TEn/"),c=n("tyNb"),s=n("fXoL"),l=n("DBWA");const p=function(e){return["/recipes/",e]};let a=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=s.Bb({type:e,selectors:[["app-recipe-item"]],inputs:{recipeItem:"recipeItem"},decls:5,vars:5,consts:[[3,"routerLink"],[1,"ion-margin"],[3,"src"]],template:function(e,i){1&e&&(s.Kb(0,"ion-item",0),s.Kb(1,"ion-avatar",1),s.Ib(2,"ion-img",2),s.Jb(),s.Kb(3,"ion-label"),s.fc(4),s.Jb(),s.Jb()),2&e&&(s.Wb("routerLink",s.Yb(3,p,i.recipeItem.id)),s.xb(2),s.Wb("src",i.recipeItem.imageUrl),s.xb(2),s.hc(" ",i.recipeItem.title," "))},directives:[o.o,o.y,c.h,o.c,o.m,o.p],styles:[""]}),e})();function b(e,i){1&e&&s.Ib(0,"app-recipe-item",5),2&e&&s.Wb("recipeItem",i.$implicit)}const u=function(){return["/","recipes","add-recipe"]},d=[{path:"",component:(()=>{class e{constructor(e){this.recipesService=e}ngOnInit(){console.log("ngOnInit"),console.log(this.recipes)}ionViewWillEnter(){console.log("ionViewWillEnter"),this.recipes=this.recipesService.getAllRecipes()}ionViewDidEnter(){console.log("ionViewDidEnter")}ionViewWillLeave(){console.log("ionViewWillLeave")}ionViewDidLeave(){console.log("ionViewDidLeave")}ngOnDestroy(){console.log("ngOnDestroy called")}}return e.\u0275fac=function(i){return new(i||e)(s.Hb(l.a))},e.\u0275cmp=s.Bb({type:e,selectors:[["app-recipes"]],decls:10,vars:3,consts:[["color","primary"],["slot","primary"],[3,"routerLink"],["name","add","slot","icon-only"],[3,"recipeItem",4,"ngFor","ngForOf"],[3,"recipeItem"]],template:function(e,i){1&e&&(s.Kb(0,"ion-header"),s.Kb(1,"ion-toolbar",0),s.Kb(2,"ion-title"),s.fc(3,"Recipes"),s.Jb(),s.Kb(4,"ion-buttons",1),s.Kb(5,"ion-button",2),s.Ib(6,"ion-icon",3),s.Jb(),s.Jb(),s.Jb(),s.Jb(),s.Kb(7,"ion-content"),s.Kb(8,"ion-list"),s.ec(9,b,1,1,"app-recipe-item",4),s.Jb(),s.Jb()),2&e&&(s.xb(5),s.Wb("routerLink",s.Xb(2,u)),s.xb(4),s.Wb("ngForOf",i.recipes))},directives:[o.k,o.u,o.t,o.g,o.f,o.y,c.h,o.l,o.i,o.q,t.h,a],styles:[""]}),e})()},{path:"add-recipe",loadChildren:()=>n.e(11).then(n.bind(null,"0MTU")).then(e=>e.AddRecipePageModule)},{path:":recipeId",loadChildren:()=>n.e(12).then(n.bind(null,"hZX4")).then(e=>e.RecipeDetailPageModule)}];let f=(()=>{class e{}return e.\u0275mod=s.Fb({type:e}),e.\u0275inj=s.Eb({factory:function(i){return new(i||e)},imports:[[c.i.forChild(d)],c.i]}),e})(),m=(()=>{class e{}return e.\u0275mod=s.Fb({type:e}),e.\u0275inj=s.Eb({factory:function(i){return new(i||e)},imports:[[t.b,r.a,o.v,f]]}),e})()},DBWA:function(e,i,n){"use strict";n.d(i,"a",(function(){return r}));var t=n("fXoL");let r=(()=>{class e{constructor(){this.recipes=[]}getAllRecipes(){return[...this.recipes]}getRecipe(e){return Object.assign({},this.recipes.find(i=>i.id===e))}addRecipe(e){this.recipes=[...this.recipes,e]}deleteRecipe(e){this.recipes=this.recipes.filter(i=>i.id!==e)}}return e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=t.Db({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);