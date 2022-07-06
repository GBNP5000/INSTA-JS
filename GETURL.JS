var vids = document.getElementsByTagName('video')

for( var i = 0; i < vids.length; i++ ){ 
  //#t=0.1
   //vids.item(i).getElementsByTagName('source')[i].src += "#t=0.1" ;
   console.log( vids[i].getAttribute('src'))
  
}

function copyToClipboard(text) {
    var dummy = document.createElement("textarea");
    // to avoid breaking orgain page when copying more words
    // cant copy when adding below this code
    // dummy.style.display = 'none'
    document.body.appendChild(dummy);
    //Be careful if you use texarea. setAttribute('value', value), which works with "input" does not work with "textarea". – Eduard
    
  // Set its ID
  dummy.setAttribute("id", "dummy_id");

  // Output the array into it
 document.getElementById("dummy_id").value=vids[0].getAttribute('src');

  // Select it
  dummy.select();
  
  dummy.setSelectionRange(0, 99999); /* For mobile devices */

  /* Copy the text inside the text field */
  //navigator.clipboard.writeText(dummy.value);
  
  /* Alert the copied text */
  alert("Copied the text: " + dummy.value);

  // Copy its contents
  //document.execCommand("copy");

    document.body.removeChild(dummy);
}

async function copyPageUrl() {
  try {
    await navigator.clipboard.writeText(location.href);
    console.log('Page URL copied to clipboard');
  } catch (err) {
    console.error('Failed to copy: ', err);
  }
}

copyToClipboard(vids[0].getAttribute('src'))
