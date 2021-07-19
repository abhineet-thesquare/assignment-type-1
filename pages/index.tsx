import Carousel from '../src/components/Carousel/Carousel';
// import axios from 'axios';
import ImageDataInterface from '../src/interface/imageData';
export default Carousel;

const data: ImageDataInterface[] = [
  {
    id: '0',
    updated_at: '2020-10-26 13:51:36.922242+00:00',
    filename: 'Avant-Garde Serviced Apartments Shoreditch',
    image_url:
      'http://lh3.googleusercontent.com/wO7Inuv6TCL-61ujLjXSVVPPVe6JjWSXfPD4o54zup3SmVCrIxD0rW0Kt9f1zGPozB6pdXr2Xg86CBjtpMy7fv_s_BDKa--tKK-20szZ9eeoYto',
    location: 'Shibuya',
    residentsCount: 2,
    bathsCount: 1,
    bedroomsCount: 1,
    period: 'night',
    price: '£115',
  },
  {
    id: '1',
    updated_at: '2020-10-26 13:51:36.922316+00:00',
    filename: 'Avant-Garde Serviced Apartments Shoreditch',
    image_url:
      'http://lh3.googleusercontent.com/gktvMbBTH6dldTdqSL0RLcqlu69GELxCaXiiFi4-hMhakjH-_1xCh_ExWTfGq0qfVCgtjq3crXfKb46Rf6D2nZeRtmJ8T2nlpXeqoDfCFUby2XU',
    location: 'Shibuya',
    residentsCount: 4,
    bathsCount: 1,
    bedroomsCount: 2,
    period: 'night',
    price: '£165',
  },
  {
    id: '2',
    updated_at: '2020-10-26 13:51:36.922389+00:00',
    filename: 'Avant-Garde Serviced Apartments Shoreditch',
    image_url:
      'http://lh3.googleusercontent.com/bZdyimllQve3kHALFB28YnBjr23B8oyymV6KhLDSez1tikZ6vIAxfGyOZ0vWZBGK1WX1lAN4u7j6ed5KM-E6C9DF3MYa-FEJOUeoLMrX2UQiSj4o',
    location: 'Shibuya',
    residentsCount: 6,
    bathsCount: 1,
    bedroomsCount: 3,
    period: 'night',
    price: '£221',
  },
  {
    id: '3',
    updated_at: '2020-10-26 13:51:36.922468+00:00',
    filename: 'Avant-Garde Serviced Apartments Shoreditch',
    image_url:
      'http://lh3.googleusercontent.com/e9lsO1RCwU0u2gKP49DtEA3IHDQokHJQQJ3Bp3ZkufdN35Ytmi0gajO_oV4bk-_djy0k51klLDSCBguEe-oMAAppfKpBUNkgi4cpfBts8klPx9c',
    location: 'Shibuya',
    residentsCount: 8,
    bathsCount: 1,
    bedroomsCount: 4,
    period: 'night',
    price: '£294',
  },
  {
    id: '4',
    updated_at: '2020-10-26 13:51:36.922543+00:00',
    filename: 'Avant-Garde Serviced Apartments Shoreditch',
    image_url:
      'http://lh3.googleusercontent.com/krFmd8EmvuVR-pS_wOB4kmsHmvSmbpfHOh1_FaFd2BsktopPdmn0uTwj2-3UZ-F7YLyRwC369ftw4PxvMQ728JLnDcZPIZg7T1PbO-7jSBZZplE',
    location: 'Shibuya',
    residentsCount: 6,
    bathsCount: 1,
    bedroomsCount: 3,
    period: 'night',
    price: '£294',
  },
  {
    id: '5',
    updated_at: '2020-10-26 13:51:36.922616+00:00',
    filename: 'Avant-Garde Serviced Apartments Shoreditch',
    image_url:
      'http://lh3.googleusercontent.com/Ot1EUyWslHRkzm3-2GU8MG_xh9wpP6SEQH6hcv0mcRjTVk769QiT7Rqb8SuuZ_WRhIg6-4H45QqAR1o1Hn0ERz4qj-xz8Mji5CJ95PcITQLUJaaq',
    location: 'Shibuya',
    residentsCount: 8,
    bathsCount: 2,
    bedroomsCount: 4,
    period: 'night',
    price: '£294',
  },
  {
    id: '6',
    updated_at: '2020-10-26 13:51:39.922763+00:00',
    filename: 'Avant-Garde Serviced Apartments Shoreditch',
    image_url:
      'http://lh3.googleusercontent.com/gFSrNE-fuJ10sfZWaS-cUajVTx5lR4mTR7OLJkN12ganCywKJdSOKwY8iCXzAthXwYWqRVOGtXylMNuIlS5nAvr9xTSBNQn5_NxSwD3MemIXt3KE',
    location: 'Shibuya',
    residentsCount: 8,
    bathsCount: 3,
    bedroomsCount: 4,
    period: 'night',
    price: '£294',
  },
  {
    id: '7',
    updated_at: '2020-10-26 13:51:36.922763+00:00',
    filename: 'Avant-Garde Serviced Apartments Shoreditch',
    image_url:
      'http://lh3.googleusercontent.com/_YvBuR-jeh1MTysMdHFNc34baMbBNFwGrowK4vscLRHuHRcLA7Cmsuwezc56YL2RGlsNhya1z2Qf6eZMSY-7Q0rz978NL1Blph2uxfSUMT7eEBQ',
    location: 'Shibuya',
    residentsCount: 8,
    bathsCount: 1,
    bedroomsCount: 4,
    period: 'night',
    price: '£294',
  },
];

export async function getServerSideProps({ query }) {
  // let images;
  try {
    // images = await axios.get('http://localhost:4001/images');
  } catch (e) {
    console.log('please make sure json server is running on port 4001');
  }

  return {
    props: {
      // imageDataArray: images.data,
      imageDataArray: data,
    },
  };
}
