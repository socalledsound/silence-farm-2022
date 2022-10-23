import IntroPage from '../../features/intro/IntroPage'
import FarmSilence from '../../features/farm-silence/FarmSilence';

const MainPage = () => {

    const started = false
    return ( 
        <div>
            {
                started ? 
                    <FarmSilence />
                    :
                    <IntroPage />

            }
        </div>
     );
}
 
export default MainPage;