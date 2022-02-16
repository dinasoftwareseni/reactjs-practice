import React, { useState, MouseEvent, Dispatch } from 'react';
import { Table as CarbonTable, TableHead, TableRow, TableHeader, TableBody, TableCell, Button, Modal } from 'carbon-components-react';
import {TableHeader as ITableHeader, TableArticle as ITableArticle, TableProps } from './table';
import './style.css';
import {ModalEdit} from '../Modal/ModalEdit';


const Table: React.FC<TableProps> = (props) => {

  const [isModalOpen,setModalState]=useState(false);

  // const [article, setArticle] = useState({ 
  //   title: '', 
  //   author: '', 
  //   description: '', 
  //   content:'',
  //   publishedAt:'' 
  // });

  // const [data, setData] = useState<ITableArticle[]>([]);


  const [newTitle, setNewTitle] = useState('');
  const [newAuthor, setNewAuthor] = useState('');
  const [newDescription,setNewDescription]=useState('');
  const [newContent,setNewContent]=useState('');
  const [newPublishedAt,setNewPublishedAt]=useState('');
  // const [author, setAuthor] = useState<ITableArticle[]>([]);

  const toggleModal =()=>{
    setModalState(!isModalOpen);
    setNewTitle('Tes New Title');
    setNewAuthor('Tes New Author');
    setNewDescription('Tes New Description');
    setNewContent('Tes New Content');
    setNewPublishedAt('Tes New Published At');
  }

  // const toggleModal=({el: ITableArticle})=> {
  //   setModalState(!isModalOpen);
  //   setData([...data, el]);
  // }

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
      </TableBody>
    </CarbonTable>
  )
}

export default Table;
