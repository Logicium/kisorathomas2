var WebApp = function(){
    this.navBar = div();
    this.titleRow = div().css(Styles.titleRow());
    this.titleText1 = text("Kisora Thomas");
    this.titleText2 = text("Software Engineer");
    this.subtextRow = row().css(Styles.subtextRow());
    this.subCol1 = col('50%').css('text-align','left').text("(Trinidad, CO, USA)")
    this.subCol2 = col('50%').css('text-align','right').text("xivixxivvx")
    this.bannerRow = div();
    this.bannerImage = image('public/images/bg1.jpg').css({'height':'880px'}).addClass('zoomImage');
    this.aboutRow = row().css(Styles.aboutTextRow());
    this.aboutText1 = col('70%').text("I'm a passionate full-stack engineer creating impactful applications that make a real difference.");
    this.aboutText2 = col('30%').text("(About Me)").css(Styles.aboutText2());
    this.background = div().css('background-color','#f5f3ee');
    this.line1 = div().css({'padding':'0 5vw',}).append(line().addClass('hline').css({'width':'0%','height':'2px','background-color':'#1e1d23'}));
    this.line2 = new verticalLine();
    this.footer = div().css({'height':'800px','background-color':'#1e1d23','color':'#f5f3ee'})
    this.aboutRow2 = row().css('padding','5vw');
    this.aboutCol1 = col('30%').text("(What I Do)").css(Styles.aboutText3());
    this.aboutCol2 = col('70%');
    this.footerText = text("Let's talk").css(Styles.footerText1());
    this.cta = longButton().text("Get in Touch")

    $('body').css('margin','0').append(
        this.background.append(
            this.navBar,
            this.titleRow.append(this.titleText1,this.titleText2),
            this.subtextRow.append(this.subCol1,this.subCol2),
            this.bannerRow.append(this.bannerImage),
            this.aboutRow.append(
                this.aboutText1,
                div().append(this.line2),
                this.aboutText2),
            this.line1,
            this.aboutRow2.append(this.aboutCol1,this.aboutCol2),
            div().css('height','400px'),
            this.footer.append(this.footerText,this.cta)
        )
    );

    bgImageRatios = [];

    $(".zoomImage").each(function(index){
        var bg = $(this).css('background-image');
        bg = bg.replace('url(','').replace(')','').replace(/\"/gi, "");

        // get image size.
        var tmpImg = new Image();
        tmpImg.src=bg;
        $(tmpImg).one('load', function(){
            orgWidth = tmpImg.width;
            orgHeight = tmpImg.height;
            bgImageRatios[index] = orgHeight / (orgWidth * 1.0);
        });
    });

    function zoomImage(scrollpos, screenHeight, screenWidth)
    {
        //console.log(screenHeight);
        $(".zoomImage").each(function(index){
            // var offset = $(this).offset().top;
            //
            // if (offset < scrollpos && scrollpos < offset + screenHeight)
            // {
                var heroEffectPerc = 100 + 25 * (scrollpos) / (screenHeight * 1.0);

                if ((bgImageRatios[index] * screenWidth / screenHeight) > 1)
                    $(this).css("background-size",  heroEffectPerc + "% auto");
                else
                    $(this).css("background-size",  "auto " + heroEffectPerc + "%");
            //}
        });
    }

    $(window).on("resize", function(){
        var scrollpos = $(document).scrollTop();
        var screenHeight = $(this).height();
        var screenWidth = $(this).width();

        zoomImage(scrollpos, screenHeight, screenWidth);
    });

    $(document).on("scroll", function(){

        var scrollpos = $(this).scrollTop();
        var screenHeight = $(window).height();
        var screenWidth = $(window).width();

        zoomImage(scrollpos, screenHeight, screenWidth);

        if($('.hline').isInViewport()){
            $('.hline').playKeyframe({name:'animate-width',duration:'2s',timingFunction:'ease'});
        }

        if($('.vline').isInViewport()){
            $('.vline').playKeyframe({name:'animate-length',duration:'2s',timingFunction:'ease'});
        }
    });

    $.fn.isInViewport = function() {
        var elementTop = $(this).offset().top;
        var elementBottom = elementTop + $(this).outerHeight();
        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();
        return elementBottom > viewportTop && elementTop < viewportBottom;
    };

}