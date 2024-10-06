
        let postCount = 0;

        window.onload = function(){
            document.getElementById("top").innerText = "Welcome to the forum";
        }
        function postFunction() {
            
            let message = document.getElementById("message").value;

            
            postCount++;

            
            if (postCount === 1) {
                document.getElementById("topic").innerText = message;
            } else if (postCount === 2) {
                document.getElementById("reply1").innerText = message;
            } else if (postCount === 3) {
                document.getElementById("reply2").innerText = message;
            }

            
            document.getElementById("message").value = '';
        }

        
        function clearFunction() {
            
            document.getElementById("topic").innerText = '';
            document.getElementById("reply1").innerText = '';
            document.getElementById("reply2").innerText = '';
            
            
            postCount = 0;
            
            
            document.getElementById("message").value = '';
        }
    