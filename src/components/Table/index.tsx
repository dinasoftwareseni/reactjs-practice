import React from 'react';
import { Table as CarbonTable, TableHead, TableRow, TableHeader, TableBody, TableCell, Button } from 'carbon-components-react';
import { TableProps, TableHeader as ITableHeader, TableItem as ITableItem } from './table'
import './style.css';

const Table: React.FC<TableProps> = (props) => {
  if (!props.items || !props.items.length) return null
  return (
    <CarbonTable className="table">
      <TableHead className="thead">
        <TableRow>
          {props.headers.map((header: ITableHeader) => (
            <TableHeader key={header.id}>
              {header.text}
            </TableHeader>
          ))}
          <TableHeader />
        </TableRow>
      </TableHead>
      <TableBody className="tbody">
        {props.items?.map((item: ITableItem, index: number) => (
          <TableRow className="trow" key={`${index}-${item.author}`}>
            {props.headers.map((header: ITableHeader) => (
              <TableCell className="tcell" key={`${header.id}-${index}-${item.author}`}>
                {item[header.id]}
              </TableCell>
            ))}
            <TableCell className="tcell">
              <Button>Edit Me</Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </CarbonTable>
  )
}

export default Table
