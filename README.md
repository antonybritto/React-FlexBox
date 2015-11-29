# React-FlexBox

Flexbox implementation using React. Uses ES6 - you might need a ES6to5 compiler.

Usage:
------
   import {Row, Column, Cell} from 'FlexBox';

   <Row reverse>
        <Cell order="2">1</Cell>
        <Cell order="1">2</Cell>
   </Row>

   <Column reverse>
        <Cell order="2">1</Cell>
        <Cell order="1">2</Cell>
   </Column>

Supported Attributes for Row
----------------------------
   'reverse' - (no value) To reverse the cells in the row
   'valign' - (top, bottom, center, stretch, baseline) To control the vertical align, defaults to 'stretch'
   'align' - (left, right, center, between, around) To control the horizontal align, defaults to 'left'

Supported Attributes for Column
-------------------------------
   'reverse' - (no value) To reverse the cells in the row
   'valign' - (top, bottom, center, between, around) To control the vertical align, defaults to 'top'
   'align' - (left, right, center, stretch, baseline) To control the horizontal align, defaults to 'stretch'

Supported Attributes for Cell
-----------------------------
   'valign' (use only within Row) - (top, bottom, center, stretch, baseline) Within 'Row' to the control the vertical align for individual cells, defaults to 'stretch'
   'align' - (use only within Column) - (top, bottom, center, stretch, baseline) Within 'Column' to the control the horizontal align for individual cells, defaults to 'stretch'  
   'order' - (positive integer) Ordering of cells
   'size' - ('1of4', '1of2', '1of3', '3of4', 'auto', 'full') Sizing individual cells, defaults to equal sizing (flex:1 1 auto)
