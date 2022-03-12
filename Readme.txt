To install angular use- npm install -g @angular/cli.
To create new project use- ng new projectname.
To create new component use- ng g c componentname.
To create new module use- ng g m modulename.
----------------------------------------------------
To create manual components -
create component folder->   1.component.html,
                            2.component.css,
                            3.component.ts

In .ts file mention metadata 
@Component({
    selector:"app-name",
    templateUrl:"component.html",
    styleUrls:["component.css"]
})

and then mention class

export class ComponentnameComponent{

}

always create class name as HomeComponent{

}

firstletter of each word should be capital letter.
------------------------------------------------------
 automatically create any component using angular cli
 -> ng g c componentname
 automatically create any module using angular cli
 -> ng g m modulename
 -----------------------------------------------------
 Data Binding
 it is used to communicate html and ts files.

 -> one way data binding.
 -> two way data binding.

 one way data binding
 ->()-event binding- Html to ts.
 ->[]-property binding- ts to Html.
 two way data binding
 ->[(ngModel)]-both html to ts and ts to html
 ------------------------------------------------------------
 interpolation
 {{}}- used in html to render the data available in ts file.
 ------------------------------------------------------------
 Directives
 structural 
 ngIf
 ngFor
 attribute
 ngStyle
 ngClass
 DOM- Document Object Model