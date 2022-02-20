import Carousel from 'styled-components-carousel';
import UpCard1 from '../UpCards/UpCard1';
import UpCard2 from '../UpCards/UpCard2';
import UpCard3 from '../UpCards/UpCard3';
 
const CarouselPage = () => (
    <Carousel
        slidesToShow={3}
        center
        centerPadding={30}
        breakpoints={[
            {
                size: 200,
                settings: {
                    slidesToShow: 1,
                    showArrows: false,
                    showIndicator: false,
                    swipeable: true,
                },
            },
            {
                size: 600,
                settings: {
                    slidesToShow: 3,
                    showArrows: false,
                    showIndicator: true,
                    swipeable: true,
                },
            },
            {
                size: 1000,
                settings: {
                    slidesToShow: 4,
                    showArrows: true,
                    showIndicator: true,
                    center: true,
                    swipeable: true,
                },
            },
        ]}
    >
        <div>
            <span><UpCard1 /></span>
        </div>
        <div>
            <span><UpCard2 /></span>
        </div>
        <div>
            <span><UpCard3 /></span>
        </div>
    </Carousel>
);