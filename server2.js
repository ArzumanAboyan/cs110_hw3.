const http = require('http');

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
	response.write('Here you can find some files form your computer')
		response.end();
		}
    const url = request.url;
	
	 if (url === '/desktop/word' || url === '/desktop/word/') {
        response.end('one of your word documents');
    } else 
	{
      if (url === '/desktop/exel' || url === '/desktop/exel/') {
      response.end('one of your word documents');
        } else 
		{
 if (url === '/desktop/ppt' || url === '/desktop/ppt/') {
      response.end('one of your ppt documents');
            } else {
                if (url === '/desktop' || url === '/desktop/') {
    response.end('background picture!');
   } else {
         response.end('ordinary page');
    }
    }
    }

    }
	