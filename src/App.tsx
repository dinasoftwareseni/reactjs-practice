import ReapitItems from './components/ReapitItems';
import ReapitHeader from './models/reapitheader';
import ReapitArticle from './models/reapitarticle';

function App() {

  const reapitheaders=[
      new ReapitHeader('Title'),
      new ReapitHeader('Published At'),
      new ReapitHeader('Description'),
      new ReapitHeader('Content'),
      new ReapitHeader('Url'),
      new ReapitHeader('Action')
  ]; 
  
  const reapitarticle=[
        new ReapitArticle(
            {
                reapitarticleTitle:'As Kazakhstan Descends into Chaos, Crypto Miners Are at a Loss',
                reapitarticleContent:'When Denis Rusinovich set up cryptocurrency mining company Maveric Group in Kazakhstan in 2017, he thought he had hit the jackpot. Next door to China and Russia, the country had everything a Bitcoin … [+4140 chars]"',
                reapitarticleDescription:'The central Asian country became No. 2 in the world for Bitcoin mining. But political turmoil and power cuts have hit hard, and the future looks bleak.',
                reapitarticlePublishAt:'2022-01-12T12:00:00Z',
                reapitarticleUrl:'https://www.wired.com/story/kazakhstan-cryptocurrency-mining-unrest-energy/'
            },
        ),
        new ReapitArticle(
            {
                reapitarticleTitle:'The International Monetary Fund tells El Salvador it shouldn’t use Bitcoin as legal tender',
                reapitarticleContent:'El Salvador introduced Bitcoin as a legal tender alongside the US dollar in 2021. | Illustration by Alex Castro / The Verge\r\n\n \n\n The International Monetary Fund’s executive board has recommended El … [+2691 chars]',
                reapitarticleDescription:'The International Monetary Fund’s executive directors have recommended to El Salvador that it should narrow the scope of its Bitcoin law, making it so that the cryptocurrency is no longer legal tender in the country.',
                reapitarticlePublishAt:'2022-01-25T22:11:14Z',
                reapitarticleUrl:'https://www.theverge.com/2022/1/25/22901374/el-salvador-bitcoin-international-monetary-fund-crypto'
            },
        ),
    ]; 

  return (
      <div>
          <h1>News - Everything</h1>
          <ReapitItems headers={reapitheaders} articles={reapitarticle}/>
      </div>
  );
}

export default App;
