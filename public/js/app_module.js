CloudFlare.define("travelb2btest",
    ["cloudflare/jquery1.7"],
    function($)
    {
        function addBadge(count){
            var cdnPath = "//cloudflare.travel-b2b.com/test";
            var div = $("<div>")
            $("<img>",{
                src: cdnPath + "img/test.png"
            }).appendTo(div);
            $("<span>", {"style": "position:relative; top:-1px; left:-1px;")
                .text(count).appendTo(div)
            div.appendTo("body")
        }
        $.getJSON(
            "http://cloudflare.travel-b2b.com/test?callback=?",
            {domain_id: config && config.domain_id},
            function(data){
                if (this.data.count){
                    addBadge(this.data.count)
                }
            }
        )
    }
)
