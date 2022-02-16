import React, { useState, MouseEvent } from 'react';
import { Table as CarbonTable, TableHead, TableRow, TableHeader, TableBody, TableCell, Button, Modal } from 'carbon-components-react';
import {TableHeader as ITableHeader, TableArticle as ITableArticle, TableProps } from './table';
import './style.css';
// import ModalWrapper from '../Modal/ModalWrapper';
import {ModalEdit} from '../Modal/ModalEdit';

// interface ArticleState {
//   message: string;
//   onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
// }

const Table: React.FC<TableProps> = (props) => {

  // const [isModalVisible, setIsModalVisible] = useState(false)
  const [isModalOpen,setModalState]=useState(false);

  // const [article, setArticle] = useState({ 
  //   title: '', 
  //   author: '', 
  //   description: '', 
  //   content:'',
  //   publishedAt:'' 
  // });

  const toggleModal =()=>{
    // setIsModalVisible(wasModalVisible=>!wasModalVisible)
    // console.log('modal jalan')
    setModalState(!isModalOpen);
  }

  
  // console.log(props.articles)

  // let author = article.author

  const clickHandler=()=>{
    console.log('tes')
  }

  // const clickHandler = (e: React.FormEvent<HTMLInputElement>): void => {
  //   this.setArticle({ author: e.currentTarget.value });
  // };

  // onChange = (e: React.FormEvent<HTMLInputElement>): void => {
  //   this.setState({ text: e.currentTarget.value });
  // };

  // handleClick(e: React.ChangeEvent<HTMLInputElement>) {
  //   // No longer need to cast to any - hooray for react!
  //   this.setState({temperature: e.target.value});
  // }

  // const handleClick = (e: MouseEvent): void => {
  //   e.preventDefault();
  //   alert(`Clicked at ${e}`);
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
              {/* <ModalWrapper isModalVisible={isModalVisible} onBackdropClick={toggleModal}/> */}
              <ModalEdit title={'My Modal'} isOpen={isModalOpen} onClose={toggleModal}>
                Tes Modal
              </ModalEdit>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </CarbonTable>
  )
}

export default Table;
