import React from 'react';
import ReapitHeader from '../models/reapitheader';
import {Table,TableHead,TableRow,TableHeader,TableBody,TableCell} from 'carbon-components-react';
import ReapitArticle from '../models/reapitarticle';
import './Reapititems.css';

const ReapitItems: React.FC<{headers: ReapitHeader[],articles: ReapitArticle[]}> = (props) => {

    return(
        // <ul>{props.items.map(item=><li key={item.id}>{item.text}</li>)}</ul>
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
                <TableRow key={article.id}>
                    <TableCell>{article.title}</TableCell>
                    <TableCell>{article.publishAt}</TableCell>
                    <TableCell>{article.description}</TableCell>
                    <TableCell>{article.content}</TableCell>
                    <TableCell>{article.url}</TableCell>
                </TableRow>
            ))}

            </TableBody>
        </Table>
    )
}

export default ReapitItems;