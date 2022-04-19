import type { NextPage } from 'next';
import FirstCounter from './components/firstCounter';
import SecondCounter from './components/secondCounter';
import ThirdCounter from './components/thirdCounter';

const Home: NextPage = () => {


  return (
    <div className={"page-container"}>
        <div>

          <div className={"header-area"}>
            <h2>Redux Store :</h2>
          </div>

          <div className={"counter-area"}>
            <FirstCounter/>
            <SecondCounter/>
            <ThirdCounter/>
          </div>

        </div>
    </div>
  )
}

export default Home;
