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
 