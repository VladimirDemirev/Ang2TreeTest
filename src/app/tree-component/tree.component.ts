import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { TreeModule, TreeComponent, TreeModel, TreeNode  } from 'angular-tree-component';
import { TREE_ACTIONS, KEYS, IActionMapping } from 'angular-tree-component';


@Component({
  selector: 'te-tree-component',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})

export class MyTreeComponent implements OnInit 
{
    @Input() 
    public nodes : any;
    
    @ViewChild(TreeComponent)
    private tree: TreeComponent;
    private myfilter: string = '';

    private static fromTreeModel = null;

    private onDragStart = (tree:TreeModel, node:TreeNode, $event:any, rest:any) => {
        MyTreeComponent.fromTreeModel = tree;
        console.log('DRAG started...');
    }

    private onDropEnd = (trgTree:TreeModel, node:TreeNode, $event:any, {from, to}) => {
                // use from to get the dragged node.
                // use to.parent and to.index to get the drop location
                // use TREE_ACTIONS.MOVE_NODE to invoke the original action

                if( MyTreeComponent.fromTreeModel )
                {
                    console.log('--entered in DROP--');
                    let selection : TreeNode[] =  MyTreeComponent.fromTreeModel.getActiveNodes();

                    for (let n of selection) {
                        TREE_ACTIONS.MOVE_NODE( trgTree, n, $event, {from, to} );
                    }

                    // todo: clear tree selection / focus...
                    console.log('--DROP ended--');
                }
    }
    
    options: any = {
        displayField: 'name',
        isExpandedField: 'expanded',
        idField: 'id',
        actionMapping: {
        mouse: {
            // dblClick: (tree, node, $event) => {
            // if (node.hasChildren) TREE_ACTIONS.TOGGLE_EXPANDED(tree, node, $event);
            // }
            click:  TREE_ACTIONS.TOGGLE_SELECTED_MULTI,
            dragStart: this.onDragStart,
            drop: this.onDropEnd
        }
        },
        nodeHeight: 23,
        allowDrag: (node) => {
        return true;
        },
        allowDrop: (node) => {
        return true;
        },
        //useVirtualScroll: true,
        animateExpand: true,
        animateSpeed: 30,
        animateAcceleration: 1.2
    }

    constructor() 
    { 
    }

    ngOnInit() 
    {
    }

    public myFilterFunc() : void
    {
        this.tree.treeModel.filterNodes(this.myfilter, true);        
        //this.tree.treeModel.setActiveNode( this.tree.treeModel.getNodeById(4) , true, true);
    }

    public btn1($event: any) : void
    {
        window.alert('CLICK !!!');
    }
}
