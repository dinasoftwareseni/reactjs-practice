import React, { useState } from 'react';
import { Table as CarbonTable, TableHead, TableRow, TableHeader, TableBody, TableCell, Button } from 'carbon-components-react';
import {TableHeader as ITableHeader, TableArticle as ITableArticle, TableProps } from './table';
import './style.css';

const Table: React.FC<TableProps> = (props) => {

  const [article, setArticle] = useState({ 
    title: 'tessss', 
    author: 'author tes', 
    description: '', 
    content:'',
    publishedAt:'' 
  });

  const [clickedButton, setClickedButton] = useState('');

  console.log(props.articles)

  let author = article.author

  const clickHandler=()=>{
    console.log('tes')
  }

  

  return (
    <CarbonTable className="table">
      <TableHead className="thead">
        <TableRow>
            {props.headers.map((header:ITableHeader) => (
                <TableHeader key={header.id}>
                    {header.text}
                </TableHeader>
            ))}
            <TableHeader>
                Action
            </TableHeader>
        </TableRow>
      </TableHead>
      <TableBody className="tbody">
        {props.articles?.map((article: ITableArticle, index: number) => (
          <TableRow className="trow" key={`${index}-${article.author}`}>
            {props.headers.map((header: ITableHeader) => (
              <TableCell className="tcell" key={`${header.id}-${index}-${article.author}`}>
                {article[header.id]}
              </TableCell>
            ))}
            <TableCell className="tcell">
              <Button onClick={()=>clickHandler()}>Edit Me</Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </CarbonTable>
  )
}

export default Table;
