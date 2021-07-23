var counter = 1;
for(var i = 1; i < 10; i++){

    do{
        document.write(i + '*' + counter + '=' + (i*counter) + ' ');
        counter++;
    } while(i >= counter)

    document.write("<br>");
    counter = 1;

}