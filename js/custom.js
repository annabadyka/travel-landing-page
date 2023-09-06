(function () {
  'use strict';
    //active link on click
    let link_prev='link_home';
    let nav_links = document.querySelectorAll('.nav-link');
    for(let x = 0; x < nav_links.length; x++) { 
      nav_links[x].addEventListener('click', function(e){
        document.getElementById(link_prev).classList.remove('active');
        document.getElementById(e.target.id).classList.add('active');
        link_prev=e.target.id;
      });     
    } 
    //show btn Move up
    window.addEventListener('scroll', function(){
       let pos_y_window = window.scrollY;
       let pos_y_cont = document.getElementById('about-us').offsetTop;
        if(pos_y_window >= pos_y_cont){
           document.getElementById('to_top').style.display="block";
        }else{
            document.getElementById('to_top').style.display="none";
        }       
    });
 
  document.getElementById('to_top').addEventListener('click', function(e) {
    let nav_links = document.querySelectorAll('.nav-link'); 
    for(let x = 0; x < nav_links.length; x++) { 
      nav_links[x].classList.remove('active');
    }      
    document.getElementById('link_home').classList.add('active'); 
  });

    //IMGS HEADER
    document.getElementById('header_gallery_cntrl_right').addEventListener('click', function(e) {
        if(this.getAttribute('data-allow-click')=='1'){
           changeImgsHeader('next'); 
        }        
    });
    
    document.getElementById('header_gallery_cntrl_left').addEventListener('click', function(e) {
       if(this.getAttribute('data-allow-click')=='1'){
          changeImgsHeader('prev');
       }
    });
    
    let hide_img = document.querySelectorAll('.header_thumbs_imgs img');
    for(let x = 0; x < hide_img.length; x++) { 
        hide_img[x].addEventListener('click', function(e){
        if(hide_img[x].classList.contains('hide_img')){
            let get_id= e.target.id;
            let id = get_id.substr(get_id.length - 1);
            //cur_img_header=parseFloat(id)-1;
            cur_img_header=parseFloat(id);
            changeImgsHeader();
        }        
      });     
    } 
    
    //SEARCH
    loadContinents();
    searchVacations();
    
    document.getElementById('select-continent').addEventListener('change', function(e) {
      loadCountries(this.value); 
    });
    
    document.getElementById('search_send').addEventListener('click', function(e) {
        if(this.getAttribute('data-allow-click')=='1'){
            searchVacations();
        }        
    });
    //TESTIMONIALS
    getTestimonialsItem(1);

    document.getElementById('testim_cntrl_right').addEventListener('click', function(e) {
        if(this.getAttribute('data-allow-click')=='1'){
           let nmbr=testim_num+1;
           getTestimonialsItem(nmbr); 
        }        
    });
    document.getElementById('testim_cntrl_left').addEventListener('click', function(e) {
        if(this.getAttribute('data-allow-click')=='1'){
           let nmbr=testim_num-1;
           getTestimonialsItem(nmbr); 
        }        
    });
    //GALLERY
    getGalleryItems();
    /*open gallery img*/
    let btn_openGal = document.getElementsByClassName('btn_openGal');
    for(let i = 0; i < btn_openGal.length; i++) {
      btn_openGal[i].addEventListener('click', function(e) {
        let numero = this.getAttribute('data-bs-nid');
            getDiplPic(numero);
      });
    }
    //send form
    document.getElementById('form_send').addEventListener('click', function(e) {
        checkForm();
    });

    //show/hide error messages when sending the form
    let form_inputs = document.getElementsByClassName('form-control');
    for(let i = 0; i < form_inputs.length; i++) {
        //show
      form_inputs[i].addEventListener('keyup', function(e){
        let id =this.getAttribute('id');
        let valor= this.value;
        valor=valor.trim();
        if(valor.length>0){
            if(id!='email'){
                document.getElementById(id+'_error').style.display='none';
            }else{
                if(!regExpEmail.test(valor)) {
                    document.getElementById(id+'_error').style.display='block'; 
                    this.focus();
                }else{
                   document.getElementById(id+'_error').style.display='none'; 
                }
            }       
        }else{
           this.focus();
           document.getElementById(id+'_error').style.display='block';
        }      
      });
       //hide 
     form_inputs[i].addEventListener('blur', function(e){
        let id =this.getAttribute('id');
        document.getElementById(id+'_error').style.display='none';             
      }); 
    }
     
    //Animate on scroll plugin
    const josh = new Josh({
     onDOMChange: false,
    });
    
    //hide loader
    window.addEventListener('load', function(){
       document.getElementById('loader').style.display='none';
    });
})();