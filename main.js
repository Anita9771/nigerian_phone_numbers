const getValueInput = () =>{
    let inputValue = document.getElementById("phone_number").value; 
    let prefix = inputValue.slice(0, 4);
    let prefixFive = inputValue.slice(0, 5);

    if (inputValue.length == 11){
        // For four numbered prefix determinant
    switch (prefix ) {
        // Airtel
        case "0701":
        case "0708":
        case "0802":
        case "0808":
        case "0812":
        case "0901":
        case "0902":
        case "0907":
        case "0912":
        case "0912":
            document.getElementById("logo").src = "./images/airtel_logo.png";
          break;
        // Globacom
        case "0705":
        case "0805":
        case "0807":
        case "0811":
        case "0815":
        case "0905":
        case "0915":
            document.getElementById("logo").src = "./images/glo_logo.png";
          break;
        // 9Mobile
        case "0809":
        case "0817":
        case "0818":
        case "0908":
        case "0909":
            document.getElementById("logo").src = "./images/etisalat_logo.png";
          break;
        // MTel
        case "0804":
            document.getElementById("logo").src = "./images/mtel_logo.png";
          break;
           // ZoomMobile
        case "0707":
            document.getElementById("logo").src = "./images/zoomMobile_logo.png";
          break;
             // Multi Links
        case "0709":
            document.getElementById("logo").src = "./images/multiLinks_logo.png";
          break;
             // Starcomms
        case "0819":
            document.getElementById("logo").src = "./images/starcomms_logo.png";
          break;
           // MTN
        case "0703":
        case "0704":
        case "0706":
        case "0803":
        case "0806":
        case "0810":
        case "0813":
        case "0814":
        case "0816":
        case "0903":
        case "0906":
        case "0913":
        case "0916":
            document.getElementById("logo").src = "./images/mtn_logo.png";
          break;
         default:
            // For five numbered prefix determinant
            switch (prefixFive){
                // MTN
                case "07025":
                case "07026":
                    document.getElementById("logo").src = "./images/mtn_logo.png";
                  break;
                    // Smile
                case "07020":
                    document.getElementById("logo").src = "./images/smile_logo.png";
                  break;
                    // Starcomms
                case "07028":
                case "07029":
                    document.getElementById("logo").src = "./images/starcomms_logo.png";
                  break;
                   // Multi Links
                case "07027":
                    document.getElementById("logo").src = "./images/multiLinks_logo.png";
                  break;
                default:
                    alert("Please enter a valid number.");
            }
      }
    } else{
        alert("Please enter a valid number.")
    }

    
  }