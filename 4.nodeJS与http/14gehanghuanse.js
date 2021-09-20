let tr = document.querySelectorAll("#tb tr")
            //获取tr
            for (let i = 0; i < tr.length; i++) {
                if(i%2==0){
                    console.log(1);
                    tr[i].style.backgroundColor = 'pink';
                    //改的是tr标签的属性style的值
                }else{
                    tr[i].style.backgroundColor = "skyblue";
                }
            }