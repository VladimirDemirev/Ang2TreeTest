import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app';

    private nodes1 = [
        {
        id: 1,
        name: 'Category One',
        children: [
            { id: 22, name: 'child One One' },
            { id: 23, name: 'child One Two' },
            { id: 24, name: 'child One Three' },
            { id: 25, name: 'child One Four' },
            { id: 26, name: 'child One Five' }
        ]
        },
        {
        id: 4,
        name: 'Category Two',
        children: [
            { id: 5, name: 'child Two One' },
            {
            id: 6,
            name: 'child Two Two',
            children: [
                { id: 7, name: 'child in time' }
            ]
            }
        ]
        },
        {
        id: 8,
        name: 'Category Three',
        children: [
            { id: 9, name: 'child Three One' },
            { id: 10, name: 'child Three Two' }
        ]
        }    
    ];
  
    private nodes2 = [
        {
        id: 101,
        name: 'Aaaaaaaaa',
        children: [
            { id: 122, name: 'ccccc' },
            { id: 123, name: 'gdfgo' },
            { id: 124, name: 'cxxxxxxxxe' },
            { id: 125, name: 'cffffffffffr' },
            { id: 126, name: 'cgggggggggggggg' }
        ]
        }    
    ];
  
}
