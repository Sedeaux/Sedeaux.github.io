 function filter(type){
      const items = document.querySelectorAll('.project');
      items.forEach(it=>{
        if(type==='all') it.style.display = '';
        else it.style.display = it.dataset.type === type ? '' : 'none';
      })
    }

    function sendMail(){
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const msg = document.getElementById('msg').value;
      const subject = encodeURIComponent('Contact portfolio — ' + name);
      const body = encodeURIComponent(msg + '\n\nContact: ' + email);
      window.location.href = 'mailto:thomas.barbagli@etu.u-bordeaux.fr?subject='+subject+'&body='+body;
    }

    document.querySelectorAll('.fade-up').forEach((el,i)=>{el.style.animationDelay = (i*120)+'ms'});