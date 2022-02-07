import ReapitItems from './components/ReapitItems';
import ReapitHeader from './models/reapitheader';
import ReapitArticle from './models/reapitarticle';

function App() {

  const reapitheaders=[
      new ReapitHeader('Title'),
      new ReapitHeader('Published At'),
      new ReapitHeader('Description'),
      new ReapitHeader('Content'),
      new ReapitHeader('Url')
  ]; 
  
  const reapitarticle=[
    new ReapitArticle('1'),
    new ReapitArticle('2'),
    new ReapitArticle('3'),
    new ReapitArticle('4'),
    new ReapitArticle('5')
]; 

  return (
      <div>
          <ReapitItems headers={reapitheaders} articles={reapitarticle}/>
      </div>
  );
}

export default App;
