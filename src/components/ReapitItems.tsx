import React from 'react';
import ReapitHeader from '../models/reapitheader';
import {Table,TableHead,TableRow,TableHeader,TableBody,TableCell,Button} from 'carbon-components-react';
import ReapitArticle from '../models/reapitarticle';
import './Reapititems.css';

const ReapitItems: React.FC<{headers: ReapitHeader[],articles: ReapitArticle[]}> = (props) => {

    return(
        <Table className="table">
            <TableHead className="thead">
                <TableRow>
                    {props.headers.map((header) => (
                        <TableHeader id={header.id} key={header.id}>
                            {header.text}
                        </TableHeader>
                    ))}
                </TableRow>
            </TableHead>
            <TableBody className="tbody">
            {props.articles.map((article) => (
                <TableRow className="trow" key={article.id}>
                    <TableCell className="tcell">{article.title}</TableCell>
                    <TableCell className="tcell">{article.publishAt}</TableCell>
                    <TableCell className="tcell">{article.description}</TableCell>
                    <TableCell className="tcell">{article.content}</TableCell>
                    <TableCell className="tcell">{article.url}</TableCell>
                    <TableCell className="tcell"><Button>Edit Me</Button></TableCell>
                </TableRow>
            ))}

            </TableBody>
        </Table>
    )
}

export default ReapitItems;