const regExpEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

var testim_num=1;//current testimonials item

const testimonials_items =[
    {nid: '1', pic: 'imgs/img1_testim.jpg', name: 'Darika Samat', job: 'Web developer', text: 'Best experience ever. Check it by yourself.'}, 
    {nid: '2', pic: 'imgs/img2_testim.jpg', name: 'Xu Jianhong', job: 'Secretary', text: 'We have spent a wonderful vacation. Thank you!'},
    {nid: '3', pic: 'imgs/img3_testim.jpg', name: 'Bill Williams', job: 'Student', text: 'That was a wonderful vacation spent with my best friends.'},
];

const gallery_items =[
    {
      nid: '1', country: 'Florida', place: 'Miami', beach: 'South Beach', img_portada: 'imgs/img1_gallery_thumb.jpg', img: 'imgs/img1_gallery.jpg'  
    },
    {
      nid: '2', country: 'Hawaii', place: 'Honolulu', beach: 'Waikiki', img_portada: 'imgs/img2_gallery_thumb.jpg', img: 'imgs/img2_gallery.jpg'  
    },
    {
      nid: '3', country: 'Italy', place: 'Positano', beach: 'Spiaggia Grande', img_portada: 'imgs/img3_gallery_thumb.jpg', img: 'imgs/img3_gallery.jpg'  
    },    
    {
      nid: '4', country: 'Philippines', place: 'Cagayan Valley', beach: 'Palaui Island', img_portada: 'imgs/img4_gallery_thumb.jpg', img: 'imgs/img4_gallery.jpg'  
    }
];

const continents= [
    { nid: '1', name: 'Africa'},
    { nid: '2', name: 'Asia'},
    { nid: '3', name: 'Oceania'},
    { nid: '4', name: 'Europe'}, 
    { nid: '5', name: 'America'}   
];

const countries= [
    { nid: '1', continent:'1', name: 'Egypt'},
    { nid: '2', continent:'2', name: 'Vietnam'},
    { nid: '3', continent:'3', name: 'Australia'},
    { nid: '4', continent:'5', name: 'Brazil'}, 
    { nid: '5', continent:'5', name: 'United States'},
    { nid: '6', continent:'5', name: 'Mexico'},
    { nid: '7', continent:'4', name: 'Italy'},
    { nid: '8', continent:'4', name: 'Greece'},
];

const vacations_items =[
    {
      nid: '1', continent:'5', country: '5', place: 'Miami', beach: 'South Beach', img_portada: 'imgs/img1_search.jpg', duration: '7 days', price: '$2,000', stars: '4'  
    },
    {
      nid: '2', continent:'5', country: '6', place: 'Cancun', beach: 'Playa Delfines', img_portada: 'imgs/img2_search.jpg', duration: '7 days', price: '$3,000', stars: '5' 
    },
    {
      nid: '3', continent:'4', country: '7', place: 'Positano', beach: 'Spiaggia Grande', img_portada: 'imgs/img3_search.jpg', duration: '7 days', price: '$1,600', stars: '4' 
    },    
    {
      nid: '4', continent:'3', country: '3', place: 'Sydney', beach: 'Bondi Beach', img_portada: 'imgs/img4_search.jpg', duration: '7 days', price: '$1,800', stars: '5'   
    },
    {
      nid: '5', continent:'4', country: '8', place: 'Crete', beach: 'Falassarna Beach', img_portada: 'imgs/img5_search.jpg', duration: '7 days', price: '$2,200', stars: '5' 
    }, 
    {
      nid: '6', continent:'2', country: '2', place: 'Phu Quoc', beach: 'Long Beach', img_portada: 'imgs/img6_search.jpg', duration: '7 days', price: '$1,000', stars: '4' 
    }
    , 
    {
      nid: '7', continent:'1', country: '1', place: 'Sharm el Sheikh', beach: 'Naama Bay', img_portada: 'imgs/img7_search.jpg', duration: '7 days', price: '$900', stars: '5' 
    }
    , 
    {
      nid: '8', continent:'5', country: '4', place: 'Rio de Janeiro', beach: 'Copacabana', img_portada: 'imgs/img8_search.jpg', duration: '7 days', price: '$800', stars: '5' 
    }
];