let a = document.querySelectorAll('.big div')
for(let i =0;i<a.length ;i++){
    a[i].addEventListener('click',function(){
        for(let j=0;j<a.length;j++){
            a[j].classList.remove('active')
        }
        this.classList.add('active')
        this.childNodes[0].style.dispaly = 'block'
    })
}