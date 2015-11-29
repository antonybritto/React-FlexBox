# React-FlexBox

Flexbox implementation using React. Uses ES6 - For older browser support you might need a ES6to5 compiler.

Usage:
------
   import {Row, Column, Cell} from 'FlexBox';

```html
   <Row reverse>
        <Cell order="2">1</Cell>
        <Cell order="1">2</Cell>
   </Row>

   <Column reverse>
        <Cell order="2">1</Cell>
        <Cell order="1">2</Cell>
   </Column>
```

Supported Attributes for Row
----------------------------
   'reverse' - (no value) To reverse the cells in the row<br/>
   'valign' - (top, bottom, center, stretch, baseline) To control the vertical align, defaults to 'stretch'<br/>
   'align' - (left, right, center, between, around) To control the horizontal align, defaults to 'left'<br/>

Supported Attributes for Column
-------------------------------
   'reverse' - (no value) To reverse the cells in the row<br/>
   'valign' - (top, bottom, center, between, around) To control the vertical align, defaults to 'top'<br/>
   'align' - (left, right, center, stretch, baseline) To control the horizontal align, defaults to 'stretch'<br/>

Supported Attributes for Cell
-----------------------------
   'valign' (use only within Row) - (top, bottom, center, stretch, baseline) Within 'Row' to the control the vertical align for individual cells, defaults to 'stretch'<br/>
   'align' - (use only within Column) - (top, bottom, center, stretch, baseline) Within 'Column' to the control the horizontal align for individual cells, defaults to 'stretch'<br/>  
   'order' - (positive integer) Ordering of cells<br/>
   'size' - ('1of4', '1of2', '1of3', '3of4', 'auto', 'full') Sizing individual cells, defaults to equal sizing (flex:1 1 auto)<br/>
