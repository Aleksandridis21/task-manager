
        let array = [

            {   
                id: 'AL3KSANDR1D1',
                completed: true ,
                name: "JAVAscript"

            },
            {   
                id: 'SM4RTS0FT',
                completed: false,
                name: "Html&css",

            }
        ];
          
    function addList() {

    

        let putValue = document.getElementById('put').value;

        if(putValue.length === 0) {
            const message = document.getElementById('errormessage');


      
            message.classList.add('error')

            setTimeout(function() {
                message.classList.remove('error')
            },2000)        

           


        } else {


            array.push({
                name : putValue,
                id : 45454544446,
                completed: true

        })


            message = document.getElementById('successmessage');

            message.classList.add('success')
            setTimeout(function(){

                setTimeout(function() {
                    message.classList.remove('success')
            },2000)        
              
            })

           

            drawList();



        
        }

        console.log(array);
    }


        function drawList()
    {
        
        
        let html = '';

        for(let index = 0; index < array.length; index++) {
                      
            html += `
        
            <div id="TasksContainer">
                <div class="background ${array[index].completed ? 'task-completed' : '' }">
                    <h2>
                        <span class="Checkbox"></span>            
                        ${array[index].name}                 
                    </h2>
                    <div>          
                        <a class="style" href="./task.html"></a>
                        <button class="delete"></button>
                        
                    </div>
                </div>
            </div>
                `;      
            }

        
            document.getElementById('TasksContainer').innerHTML = html;
           

    }

    drawList();

    