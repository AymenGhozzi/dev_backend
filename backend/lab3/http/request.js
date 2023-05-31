var https = require("https");
var fs = require("fs");

var option = 
{
    hostname: "wikipedia.org",
    port: 443,
    path: "/wiki/George_Washington",
    methode: "GET"
};

var req = https.request(option, function(res)
{
    var responseBody = "";
    console.log("Response from server started . ");
    console.log(`server statue ${res.statusCode}`);
    console.log("Response header : %j", res.headers);

    res.setEncoding("utf-8");

    res.once("data",function(chunk)
    {
        console.log(`--chunk-- ${chunk.length}`);
        responseBody += chunk;
    }
    );

    res.on("end", function ()
    {
        fs.writeFile("george-washingtone.html", responseBody, function(err)
        {
            if(err)
            {
                throw err;
                console.log("File Downloaded . . . ");
            }
        }
        );
    }
    );

}
);

req.on("error", function(err) 
{
    console.log(`problem with request: ${err.message}`);
}
);

req.end();