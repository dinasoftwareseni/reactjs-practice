import * as React from 'react';
import { PagesProps } from './pages';

const Pages: React.FC<PagesProps> = (props) => {
  return (
    <div className="pages">
      <h1>{props.title}</h1>
      {props.children}
    </div>
  )
}

export default Pages
