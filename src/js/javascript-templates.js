var templateHtml = function(template, data, customAttrs) {
    this.prefixApp = 'render';
    this.attrs = [
        'content', 'src', 'alt', 'href', 'style', 'class', 'id', 'title', 'value'
    ];
    this.templateHtml = null;

    this.template = template;
    this.data = data;

    if(customAttrs){
        this.attrs = this.attrs.concat(customAttrs);
    }

    this.init();

    return this.getTemplate();
};

templateHtml.prototype = {
    cloneTemplate: function(){
        this.templateHtml = $($(this.template).clone().html());
    },

    prepareTemplate: function(){
        var self = this;
        $.each(this.attrs, function(key, attr){
            $('[data-'+self.prefixApp+'-'+ attr +']', self.templateHtml).each(function(){
                self.bindData($(this), attr);
            });
        });
    },

    getTemplate: function(){
        return this.templateHtml;
    },

    bindData: function(elem, attr){
        var value = this.getDataValue(
            this.getDataKey(elem, attr)
        );

        if(attr === 'content'){
            elem.html(value);
        }else{
            elem.attr(attr, value);
        }
    },

    getDataKey: function(elem, attr){
        return elem.attr('data-'+this.prefixApp+'-'+attr);
    },

    getDataValue: function(key){
        return this.data[key];
    },

    init: function(){
        this.cloneTemplate();
        this.prepareTemplate();
    }
};