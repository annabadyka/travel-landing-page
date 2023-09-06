//fadeIn and fadeOut
function fadeOut(el){
    if(el.classList.contains('fadeIn')){
      el.classList.remove('fadeIn'); 
    }
      el.classList.add('fadeOut');//add classes in css
}
function fadeIn(el){
    setTimeout(function(){
        if(el.classList.contains('fadeOut')){
            el.classList.remove('fadeOut'); 
        }
       el.classList.add('fadeIn'); 
    }, 150);   
}
//Change header imgs
var cur_img_header =1;

function changeImgsHeader(dir){
    fadeOut(document.getElementById('cont_img_header'));
    
    let gal_images = document.querySelectorAll('.header_thumbs_imgs img');
    for(let y = 0; y < gal_images.length; y++) { 
        gal_images[y].classList.add('hide_img');
        gal_images[y].classList.remove('show_img');
    }    
   
    cur_img_header = parseFloat(cur_img_header);
    if(dir && (dir=='next')){
        cur_img_header +=1;       
    }
    if(dir && (dir=='prev')){
        cur_img_header -=1;        
    }
    
    if(cur_img_header==gal_images.length){
        document.getElementById('header_gallery_cntrl_right').setAttribute('data-allow-click', '0');
    }else{
        document.getElementById('header_gallery_cntrl_right').setAttribute('data-allow-click', '1');
    }
    if(cur_img_header==1){
        document.getElementById('header_gallery_cntrl_left').setAttribute('data-allow-click', '0');
    }else{
        document.getElementById('header_gallery_cntrl_left').setAttribute('data-allow-click', '1');
    }
  document.getElementById('cont_img_header').style.backgroundImage='url("imgs/img_header_'+cur_img_header+'.jpg")';
  
  fadeIn(document.getElementById("cont_img_header"));
    
  document.getElementById('cover_img_'+cur_img_header).classList.remove('hide_img');
  document.getElementById('cover_img_'+cur_img_header).classList.add('show_img');  
}
//TESTIMONIALS
function getTestimonialsItem(num){ 
    let resultado=testimonials_items;
    if(num){
       resultado = testimonials_items.filter(item =>item.nid==num);
       testim_num = num;
        
        document.getElementById('testim-num').innerHTML=resultado[0].nid;
       document.getElementById('testim-txt').innerHTML=resultado[0].text;
        document.getElementById('testim-name').innerHTML=resultado[0].name;
        document.getElementById('testim-job').innerHTML=resultado[0].job;
        
        fadeOut(document.getElementById('testim-img'));
        
        document.getElementById('testim-img').innerHTML='<img src="'+resultado[0].pic+'" alt="" class="img-fluid shadow-sm">';
        
        fadeIn(document.getElementById('testim-img'));
    
        if(num==3){
            document.getElementById('testim_cntrl_right').setAttribute('data-allow-click', '0');
        }else{
            document.getElementById('testim_cntrl_right').setAttribute('data-allow-click', '1');
        }
        if(num==1){
            document.getElementById('testim_cntrl_left').setAttribute('data-allow-click', '0');
        }else{
            document.getElementById('testim_cntrl_left').setAttribute('data-allow-click', '1');
        }
    }else{
        testim_num = 0;
        document.getElementById('testim-num').innerHTML='';
        document.getElementById('testim-txt').innerHTML='';
        document.getElementById('testim-name').innerHTML='';
        document.getElementById('testim-job').innerHTML='';
        document.getElementById('testim-img').innerHTML='';
    }
 }
/*Search*/
function getStars(item_stars){
    let total_stars=5;
    let add_html='';
    for(let y=0; y<item_stars; y++){
        add_html+='<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/></svg>';
    }
    if(item_stars<total_stars){
        let left_stars=total_stars -item_stars;
        for(let x=0; x<left_stars; x++){
            add_html+='<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16"><path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/></svg>';
        }
    }
    return add_html;
}
function loadContinents(){
    document.getElementById('select-continent').innerHTML='<option value="" selected>Continent</option>';
       for(let i=0; i<continents.length; i++){
            document.getElementById('select-continent').innerHTML+='<option value="'+continents[i].nid+'">'+continents[i].name+'</option>';                
       }    
     document.getElementById('select-country').innerHTML='<option value="" selected>Country</option>';
}

function loadCountries(continent_sel){
     document.getElementById('select-country').innerHTML='<option value="" selected>Country</option>';
    if(continent_sel!=''){
       let resultado = countries.filter(item =>item.continent==continent_sel); 
        for(let i=0; i<resultado.length; i++){
            document.getElementById('select-country').innerHTML+='<option value="'+resultado[i].nid+'">'+resultado[i].name+'</option>';                
       } 
    }  
}

function searchVacations(){
    document.getElementById('search_send').setAttribute('data-allow-click','0');
    let continent_value = document.getElementById('select-continent').value;
    let country_value = document.getElementById('select-country').value;
    let resultado =vacations_items;
    if(continent_value!=''){
       resultado =vacations_items.filter(item =>item.continent==continent_value);
       if(country_value!=''){
           resultado =vacations_items.filter(item =>item.country==country_value);        
       }
    }
    fadeOut(document.getElementById('search-data'));
    document.getElementById('search-data').innerHTML='';
    for(let i=0; i<resultado.length; i++){
        document.getElementById('search-data').innerHTML+='<div class="p-3 col-sm-12 col-md-4 col-lg-3 col-xl-3">'+
                '<div class="card m-0 p-0 bgColorBlanco shadow-sm josh-js" data-josh-anim-name="fadeInUp">'+
                   '<div class="card-top">'+
                       '<img src="'+resultado[i].img_portada+'" class="card-img-top img-fluid" alt="">'+ 
                      '<span class="p-2 price bgColorBlanco color1 font-bold">'+resultado[i].price+'</span>'+
                  '</div>'+                    
                   '<div class="card-body">'+
                        '<div class="row">'+
                           '<div class="col-sm-6 col-md-12 col-lg-12 col-xl-6 text-sm-start text-xl-start">'+getStars(resultado[i].stars)+
                           '</div>'+
                           '<div class="col-sm-6 col-md-12 col-lg-12 col-xl-6 text-sm-start text-xl-end">'+resultado[i].duration+
                           '</div>'+
                           '<div class="col-sm-12 my-1 color3 font-bold">'+resultado[i].beach+'</div>'+
                           '<div class="col-sm-12 text-start ">'+resultado[i].place+'</div>'+
                        '</div>'+
                    '</div>'+           
                '</div>'+
            '</div>';       
   } 
    fadeIn(document.getElementById('search-data'));
    document.getElementById('search_send').setAttribute('data-allow-click','1');
}

/*Show gallery items*/
function getGalleryItems(){
    let resultado=gallery_items;
    let num=1;
    let marginT='';
    document.getElementById('gallery-data').innerHTML='';
        for(let i=0; i<resultado.length; i++){
            marginT=(num%2==0)?' mt-5 ':'';
            num++;
            document.getElementById('gallery-data').innerHTML+='<div class="p-3 col-sm-12 col-md-4 col-lg-3">'+
                '<div class="card m-0 p-0'+marginT+'bgColorBlanco shadow-sm btn_openGal"  data-bs-toggle="modal" data-bs-target="#windowModalGal" data-bs-nid="'+resultado[i].nid+'">'+
                   '<div class="card-top">'+
                       '<img src="'+resultado[i].img_portada+'" class="img-fluid w-100" alt="'+resultado[i].place+'">'+ 
                   '</div>'+                    
                   '<div class="card-body bgColor2">'+
                        '<div class="row">'+
                           '<div class="col-sm-12 text-start">'+
                              '<p class="font-bold colorBlanco">'+resultado[i].place+', ' +resultado[i].country+'</p>'+
                              '<p class="font-bold color1">'+resultado[i].beach+'</p>'+
                           '</div>'+                           
                        '</div>'+                                              
                    '</div>'+           
                '</div>'+
            '</div>';
    }    
}

/*Show gallery img*/
function getDiplPic(num){
    let resultado = gallery_items.filter(item =>item.nid==num); 
    //rellenar datos
    document.getElementById('gallery_imgs_modal').innerHTML='<img src="'+resultado[0].img+'" class="img-fluid" alt="'+resultado[0].beach+'" title="'+resultado[0].beach+'">';
    document.getElementById('gallery_descrip_modal').innerHTML=resultado[0].place+', '+resultado[0].beach;
}
function checkForm(){
    let ok = true;
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let message = document.getElementById('message');
   
    if( (name.value == '') && ok){
        document.getElementById('name_error').style.display='block';
        name.focus();
        ok = false;
    }
	if( ( (email.value =='') || (!regExpEmail.test(email.value)) ) && ok){
        document.getElementById('email_error').style.display='block';
        email.focus();
        ok = false;
    }

    if( (message.value == '') && ok){
        document.getElementById('message_error').style.display='block';
        message.focus();
        ok = false;
    }  
    			
    if(ok){		
        document.getElementById('message_sent_ok').style.display='block'; 
        name.value = '';
        email.value = '';
        message.value = '';
        return false;
        /*let datos = 'name='+encodeURIComponent(name.value)+'&email='+encodeURIComponent(email.value)+'&message='+encodeURIComponent(message.value);
        let xhr = new XMLHttpRequest();
        xhr.onload = function () {  
            if (this.readyState == 4 && this.status == 200) {
                let result= this.responseText;
                document.getElementById('message_sent_ok').style.display='block'; 
                name.value = '';
                email.value = '';
                message.value = '';
                return false;
            }else{
                document.getElementById('message_sent_ok').style.display='none';
                return false;
            }
        }; 
        
        xhr.open('POST', 'php/contact-form.php', true);  
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
         
        xhr.send(datos);*/
    } 
}