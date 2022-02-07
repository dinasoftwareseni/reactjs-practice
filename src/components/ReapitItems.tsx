import React from 'react';
import ReapitHeader from '../models/reapitheader';
import {Table,TableHead,TableRow,TableHeader,TableBody,TableCell} from 'carbon-components-react';
import ReapitArticle from '../models/reapitarticle';

const ReapitItems: React.FC<{headers: ReapitHeader[],articles: ReapitArticle[]}> = (props) => {

    return(
        // <ul>{props.items.map(item=><li key={item.id}>{item.text}</li>)}</ul>
        <Table>
            <TableHead>
                <TableRow>
                {props.headers.map((header) => (
                    <TableHeader id={header.id} key={header.id}>
                        {header.text}
                    </TableHeader>
                ))}
                </TableRow>
            </TableHead>
            <TableBody>
            {props.articles.map((article) => (
                <TableRow key={article.id}>
                    {Object.keys(article)
                        .filter((key) => key !== 'id')
                        .map((key) => {
                            return <TableCell key={key}>{article.publishAt}</TableCell>;
                        })
                    }
                </TableRow>
            ))}

            </TableBody>
        </Table>
    )
}

export default ReapitItems;