var Styles = {
    height: function (size) {
        return {'height':size}
    },
    width: function (size) {
        return {'width':size}
    },
    size: function (height, width) {
        return {
            'height':height,
            'width':width
        }
    },
    click : function(){
        return { 'cursor' : 'pointer' };
    },

    buttonText : function(fontName,size,space,charCase){
        return {
            'letter-spacing': space ||'6px',
            'text-transform': charCase || 'uppercase',
            'font-family': fontName || 'Open Sans Condensed',
            'font-size': size ||'16px'
        }
    },
    font:function (obj) {
        obj = obj ||{};
        return {
            'font-family':obj.name||'Open Sans Condensed',
            'font-size':obj.size||'20px',
            'color':obj.color||'black'
        }
    },
    padding:function(pad){
        pad = pad || {};
        return {
            'padding':pad.a,
            'padding-top':pad.t,
            'padding-bottom':pad.b,
            'padding-left':pad.l,
            'padding-right':pad.r
        }
    },
    backgroundImage:function(image){
        return {
            'background-image':'url('+ image +')',
            'background-size':'cover'
        }
    },
    base64Image:function(image,crop) {
        return {
            'background-image': 'url(data:image/jpg;base64,' + image + ')',
            'background-size': crop || 'cover'
        };
    },
    gradientImage:function(obj){
        obj = obj || {};
        return{
            'background-image': 'linear-gradient(to left,'+obj.c1+', '+obj.c2+'), url('+ obj.image +')',
            'background-size': crop || 'cover'
        }
    },
    titleRow:function(){
        return {
            'height':'15vw',
            'font-size':'10vw',
            'font-family':'Inter',
            'font-weight':'600',
            'line-height':'10vw',
            'color':'#1e1d23',
            'padding':'5vw'
        }
    },
    subtextRow:function(){
        return {
            'font-size':'2vw',
            'font-family':'Inter',
            'font-weight':'600',
            'line-height':'2vw',
            'color':'#1e1d23',
            'padding':'5vw'
        }
    },
    aboutTextRow:function(){
        return {
            'font-size':'6vw',
            'font-family':'Inter',
            'font-weight':'600',
            'line-height':'6vw',
            'color':'#1e1d23',
            'padding':'5vw'
        }
    },

    aboutText2:function(){
        return {
            'font-size':'2vw',
            'font-family':'Inter',
            'font-weight':'600',
            'line-height':'2vw',
            'color':'#1e1d23',
            'padding':'0 5vw 0 5vw'
        }
    },
    aboutText3:function(){
        return {
            'font-size':'2vw',
            'font-family':'Inter',
            'font-weight':'600',
            'line-height':'2vw',
            'color':'#1e1d23',
        }
    },
    footerText1:function(){
        return {
            'font-size':'10vw',
            'font-family':'Inter',
            'font-weight':'600',
            'line-height':'10vw',
            'color':'#f5f3ee',
            'padding':'5vw',
            'text-align':'center'
        }
    }};

var click = function(){
    return {
        'cursor':'pointer'
    };
};

var font = function(size){
    return {'font-size':size};
};


var titleText = function(obj){
    obj = obj || {};
    return {
        'font-size':obj.size||'38px',
        'color':obj.color||'white',
        'letter-spacing':obj.space||'10px',
        'text-transform':obj.charCase||'uppercase',
        'font-family':obj.fontName||'Open Sans Condensed'
    }
};

var base64Image = function(image,crop){
    return {
        'background-image':'url(data:image/jpg;base64,'+image+')',
        'background-size':crop||'cover'
    };
};
