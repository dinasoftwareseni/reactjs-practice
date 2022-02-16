import React, { useState, MouseEvent, Dispatch } from 'react';
import { Table as CarbonTable, TableHead, TableRow, TableHeader, TableBody, TableCell, Button, Modal } from 'carbon-components-react';
import {TableHeader as ITableHeader, TableArticle as ITableArticle, TableProps } from './table';
import './style.css';
import {ModalEdit} from '../Modal/ModalEdit';


const Table: React.FC<TableProps> = (props) => {

  const [isModalOpen,setModalState]=useState(false);

  const [newTitle, setNewTitle] = useState('');
  const [newAuthor, setNewAuthor] = useState('');
  const [newDescription,setNewDescription]=useState('');
  const [newContent,setNewContent]=useState('');
  const [newPublishedAt,setNewPublishedAt]=useState('');
  
  // const toggleModal =()=>{
  //   setModalState(!isModalOpen);
  //   setNewTitle('Update Data');
  //   setNewAuthor('Tes New Author');
  //   setNewDescription('Tes New Description');
  //   setNewContent('Tes New Content');
  //   setNewPublishedAt('Tes New Published At');
  // }

  const toggleModal =(e : any)=>{
    setModalState(!isModalOpen);
    setNewTitle(e.title);
    setNewAuthor(e.author);
    setNewDescription(e.description);
    setNewContent(e.content);
    setNewPublishedAt(e.publishedAt);
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
      {/* <TableBody className="tbody">
        {props.articles?.map((article: ITableArticle, index: number) => (
          <TableRow className="trow" key={`${index}-${article.author}`}>
            {props.headers.map((header: ITableHeader) => (
              <TableCell className="tcell" key={`${header.id}-${index}-${article.author}`}>
                {article[header.id]}
              </TableCell>
            ))}
            <TableCell className="tcell">
              <Button onClick={toggleModal}>
                Edit Me
              </Button>
              <ModalEdit 
                title={newTitle} 
                isOpen={isModalOpen} 
                onClose={toggleModal}
              >
                <p>Author: {newAuthor}</p>
                <p>Description: {newDescription}</p>
                <p>Content: {newContent}</p>
                <p>Published At: {newPublishedAt}</p>
              </ModalEdit>
            </TableCell>
          </TableRow>
        ))}
      </TableBody> */}

      <TableBody className="tbody">
        {props.articles?.map((article:ITableArticle, index: number) => (
          <TableRow className="trow" key={index}>
            <TableCell className="tcell">{article.title}</TableCell>
            <TableCell className="tcell">{article.author}</TableCell>
            <TableCell className="tcell">{article.description}</TableCell>
            <TableCell className="tcell">{article.content}</TableCell>
            <TableCell className="tcell">{article.publishedAt}</TableCell>
            <TableCell className="tcell"><Button onClick={()=>toggleModal(article)}>Edit Me</Button></TableCell>
            <ModalEdit 
                title={newTitle} 
                isOpen={isModalOpen} 
                onClose={()=>{setModalState(!isModalOpen)}}
              >
                {/* <p>Title: {newTitle}</p> */}
                <p>Author: {newAuthor}</p>
                <p>Description: {newDescription}</p>
                <p>Content: {newContent}</p>
                <p>Published At: {newPublishedAt}</p>
              </ModalEdit>
          </TableRow>
        ))}
      </TableBody>
    </CarbonTable>
  )
}

export default Table;
