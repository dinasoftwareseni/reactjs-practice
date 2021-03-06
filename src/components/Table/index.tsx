import React, { useState, MouseEvent, Dispatch } from 'react';
import { Table as CarbonTable, TableHead, TableRow, TableHeader, TableBody, TableCell, Button, Modal, TextInput, TextArea } from 'carbon-components-react';
import {TableHeader as ITableHeader, TableArticle as ITableArticle, TableProps } from './table';
import './style.scss';
// import {ModalEdit} from '../Modal/ModalEdit';


const Table: React.FC<TableProps> = (props) => {

  const [isModalOpen,setModalState]=useState(false);

  const [newTitle, setNewTitle] = useState('');
  const [newAuthor, setNewAuthor] = useState('');
  const [newDescription,setNewDescription]=useState('');
  const [newContent,setNewContent]=useState('');
  const [newPublishedAt,setNewPublishedAt]=useState('');

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
      <TableBody className="tbody">
        {props.articles?.map((article:ITableArticle, index: number) => (
          <TableRow className="trow" key={index}>
            <TableCell className="tcell">{article.title}</TableCell>
            <TableCell className="tcell">{article.author}</TableCell>
            <TableCell className="tcell">{article.description}</TableCell>
            <TableCell className="tcell">{article.content}</TableCell>
            <TableCell className="tcell">{article.publishedAt}</TableCell>
            <TableCell className="tcell"><Button className="button-edit" onClick={()=>toggleModal(article)}>Edit Me</Button></TableCell>        
          </TableRow>
        ))}
        
        { isModalOpen? (
          <Modal
            primaryButtonText="Add"
            secondaryButtonText="Cancel"
            open={isModalOpen}
            onRequestClose={()=>{setModalState(!isModalOpen)}}
            modalHeading={newTitle}
          >
            <TextInput
              id="author"
              labelText="Author"
              placeholder="author"
              style={{ marginBottom: '1rem'}}
              defaultValue={newAuthor}
            />
            <TextArea
              id="description"
              labelText="Description"
              placeholder="description"
              style={{ marginBottom: '1rem'}}
              defaultValue={newDescription}
            />
            <TextArea
              id="content"
              labelText="Content"
              placeholder="content"
              style={{ marginBottom: '1rem'}}
              defaultValue={newContent}
            />
            <TextInput
              id="publishedAt"
              labelText="Published At"
              placeholder="publishedAt"
              style={{ marginBottom: '1rem'}}
              defaultValue={newPublishedAt}
            />
          </Modal>
        ):null}
      </TableBody>
    </CarbonTable>
  )
}

export default Table;
