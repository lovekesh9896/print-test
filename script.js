function printDiv() {
    // let mywindow = window.open('', 'PRINT', 'height=650,width=900,top=100,left=150');
    
    // mywindow.document.write(`<html><head><title>This is fucked up</title>`);
    // mywindow.document.write('<link rel="stylesheet" href="http://127.0.0.1:5500/style.css">');
    // mywindow.document.write('</head><body >');
    // mywindow.document.write(document.getElementById('body').innerHTML);
    // mywindow.document.write('</body></html>');
  
    // mywindow.document.close(); // necessary for IE >= 10
    // mywindow.focus(); // necessary for IE >= 10*/
  
    // mywindow.print();
    // mywindow.close();
    document.getElementById('body').print()

  
    return true;
  }