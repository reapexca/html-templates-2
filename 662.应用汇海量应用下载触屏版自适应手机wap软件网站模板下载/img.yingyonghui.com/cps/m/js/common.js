// JavaScript Document
var downloadSwitch = false;
var openApp;

function DownloadApp(packageName, apkurl)
{
    var hasApp = true;
    var checkApp_Delay = 500;
    var openUrl = "appchina_3A//m_download@packagename=" + packageName;
    var downloadUrl = "down/" + packageName;
    var openApp_iFrame = $('<iframe id="ifr" style="display:none;"></iframe>');

    if (has_installed() && packageName != 'com.yingyonghui.market')
    {
        downloadUrl = apkurl;
    }
    else
    {
        set_install();
    }
    
    if(checkBrowser())
    {
        window.location.href = downloadUrl;
        return;
    }

    openApp = Date.now();
    openApp_iFrame.attr('src', openUrl);
    $('body').append(openApp_iFrame);

    setTimeout(function()
    {
        var checkApp = Date.now();
        if (!openApp || checkApp - openApp < checkApp_Delay + 200)
        {
            hasApp = false;
        }
        if(!hasApp)
        {
            window.location.href = downloadUrl;
        }
    }, checkApp_Delay);
}

//这些浏览器不支持，直接下载
function checkBrowser()
{
    var ua = navigator.userAgent;
    return (/UCBrowser|Chrome|MQQBrowser|Opera|360browser/gi.test(ua));
}

function has_installed()
{
    if (window.localStorage)
    {
        var now = parseInt(Date.now() / 1000);
        var install_time = localStorage.getItem('install_time');
        if (install_time == null)
        {
            return false;
        }
        else
        {
            return now - install_time < 3600*24*7; 
        }
    }
    return false;
}

function set_install()
{
    if (window.localStorage)
    {
        localStorage.setItem('install_time', parseInt(Date.now() / 1000));
    }
}

function search()
{
    var val = $('#keyword').val().replace(/\s/g, '');
    if (val != '')
    {
        location.href = 'search/'+val;
    }
    return false;
}

function CloseDownloadPage()
{
    $(".NoticeLayer").css("display","none");
    $(".NoticeBox").css("display","none");
    downloadSwitch = false;
}

function AdjustAppIntroduce(adjustBox)
{
    adjustBox.children("span").css("height","auto");
    var height = adjustBox.children("span").height();

    if(height >= 180)
    {
        adjustBox.children("span").height(180);
        adjustBox.children("span").css("overflow","hidden");
        adjustBox.children("div").css("display","block");
    }
    else
    {
        adjustBox.children("div").css("display","none");
    }
}

function AdjustIndexContent()
{
    var width = $(".Index_Content").width() - $(".Content_Icon").width() - $(".Index_Content_Download").width() - 46;
    $(".Index_Content_details").css("width",width);
}

function AdjustStrategyListTitleContent()
{
    var width = $(".StrategyList_Content").width() - $(".StrategyList_TimeBox").width() - 45;
    $(".StrategyList_ContentTitle").css("width",width);
}

function AdjustNoticeBox()
{
    $(".NoticeLayer").css("display","block");
    $(".NoticeBox").css("display","block");

    var width = $("body").width();
    var height = $("body").height();
    $(".NoticeLayer").css("width",width);
    $(".NoticeLayer").css("height",height);


    var left = (width - $(".NoticeBox").width()) / 2;
    var top = ($(window).height() - $(".NoticeBox").height()) / 2;
    $(".NoticeBox").css("left",left);
    $(".NoticeBox").css("top",top);

    if(!downloadSwitch)
    {
        $(".NoticeLayer").css("display","none");
        $(".NoticeBox").css("display","none");
    }
}

function AdjustPiclist()
{
    var width = $(window).width();
    var count = $(".Piclist_Box img").length;

    $(".Piclist_Box").width(width*count);
    $(".Piclist_Box img").width(width);

    var height = width / 600 * 280;
    $(".Piclist_Box img").height(height);
    $(".Piclist_Box").height(height);
    $(".Piclist").height(height);
}

function AdjustSearchBox()
{
    var place = $("body").width() - $(".Logo").width() - 6;
    var width = place * 0.8;

    if(width > 500)
    {
        width = 500;
    }

    var margin = (place - width) / 2;

    if(width > 40)
    {
        $(".SearchBox").css("width",width);
        $(".SearchBox").css("margin-right",margin);
        $(".SearchBox div").css("width",width - 40);
        $(".SearchBox").show();
    }
    else
    {
        $(".SearchBox").hide();
    }

}

function AdjustElement()
{
    AdjustIndexContent();
    AdjustStrategyListTitleContent();
    AdjustNoticeBox();
    AdjustPiclist();
    AdjustSearchBox();
    AdjustAppIntroduce($(".App_Introduce"));
    AdjustAppIntroduce($(".App_Update"));
}

function ChangePiclist(mode)
{
    var width = $(window).width();

    $(".Piclist_Box").animate({left:0 - now_Banner * width});
    $(".Banner_State").css("opacity","0.4");
    $(".Banner_State").eq(now_Banner).css("opacity","1");

    if(mode == undefined)
    {
        ++now_Banner;
        now_Banner %= $(".Piclist_Box img").length;
    }
}

$(document).ready(function()
{
    $(window).blur(function()
    {
        openApp = 1;
    });

    $(window).resize(function()
    {
        AdjustElement();
        ChangePiclist("resize");
    });

    //内容页标题收缩
    $(".App_SpreadTitle").click(function()
    {
        var con = $(this).siblings(".App_SpreadContent");
        var icon = $(this).children(".icon");
        if (con.css('display') != 'none')
        {
            icon.addClass('close');
            con.hide();
        }
        else
        {
            icon.removeClass('close');
            con.show();
        }
    });

    //应用详情展开
    $(".App_Introduce > div").click(function()
    {
        $(".App_Introduce > div").css("display","none");
        $(".App_Introduce span").css("height","auto");
    });

    //应用展开
    $(".App_Update > div").click(function()
    {
        $(".App_Update > div").css("display","none");
        $(".App_Update span").css("height","auto");
    });

    $(".Index_Content_Download").live('click', (function()
    {
        var ua = navigator.userAgent;
        if ((/MicroMessenger/gi.test(ua)))
        {
            return alert('微信中不能下载，请在右上角选择“在浏览器中打开”后再试');
        }
        var btn = $(this).find('a');
        var tips = $(this).next('.tips');
        btn.text('下载中').addClass('disabled');
        tips.show();
        setTimeout(function(){
            btn.text('下载').removeClass('disabled');
            tips.hide();
        }, 8000);
        //		$(".NoticeLayer").css("display","block");
        //	    $(".NoticeBox").css("display","block");
        //
        //		var app_DownloadLink = $(this).siblings(".apkUrl").attr("value");
        //		var app_PackageName = $(this).siblings(".packageName").attr("value");
        //		var high_Download = $(".Download_Content input").attr("value") + app_PackageName;
        //		var app_Name = $(this).siblings(".Index_Content_details").children(".Index_Content_AppName").find("a").html();
        //
        //		$(".Download_Button a").attr("href",high_Download);
        //		$("#Normal_Download a").attr("href",app_DownloadLink);
        //		$("#Download_Softname").html("「" + app_Name + "」");
        //
        //		downloadSwitch = true;
    }));

    //	$(".Download_Cancel").click(function()
    //	{
    //		CloseDownloadPage();
    //	});
    //
    //	$(".Download_Button a").click(function()
    //	{
    //		CloseDownloadPage();
    //	});

    $(".Banner_State").mouseenter(function()
    {
        clearInterval(changeAdverID);
        now_Banner = $(this).index();
        ChangePiclist("mouse");
    });

    $(".Banner_State").mouseout(function()
    {
        changeAdverID = setInterval("ChangePiclist()",3000);
    });

    $(".Piclist_Box img").swipeLeft(function()
    {
        clearInterval(changeAdverID);
        if(now_Banner < $(".Piclist_Box img").length - 1)
        {
            ++now_Banner;
            ChangePiclist("touch");
        }
        changeAdverID = setInterval("ChangePiclist()",5000);
    });

    $(".Piclist_Box img").swipeRight(function()
    {
        clearInterval(changeAdverID);
        if(now_Banner > 0)
        {
            --now_Banner;
            ChangePiclist("touch");
        }
        changeAdverID = setInterval("ChangePiclist()",5000);
    });


    $('.get_more a').click(function(){
        var obj = $(this);
        obj.hide();
        $('.get_more div').show();
        $.getJSON(obj.attr('href'), function(data){
            //没有下一页隐藏
            if (data.next_page == '')
            {
                obj.parent().remove();
            }
            else
            {
                obj.attr('href', data.next_page);
            }
            var html = '';
            var vars = ['packageName', 'name', 'iconUrl', 'size', 'downloadCountShow', 'shorDesc', 'apkUrl', 'title', 'appId', 'id', 'publishTime'];
            for(var k in data.list.list)
            {
                var row = data.list.list[k];
                var template = $('#list_more_template').html().replace(/__src/, 'src');
                for (var i = 0; i < vars.length; i++)
                {
                    if (row[vars[i]] == null)
                    {
                        row[vars[i]] = '';
                    }
                    if (vars[i] == 'packageName' && row[vars[i]] == 'com.yingyonghui.market')
                    {
                        var regExp = new RegExp('<a href="http://www.appchina.com/market/y/com.yingyonghui.market.*>下载</a>', 'ig');
                        template = template.replace(regExp, '<a href="../union.appchina.com/yyh/dl/ac.union.m2">下载</a>');
                    }
                    var regExp = new RegExp('{'+vars[i]+'}', 'ig');
                    template = template.replace(regExp, row[vars[i]]);
                }
                html += template;
            }
            $('.list_con').append(html);
            obj.css('display', 'block');
            $('.get_more div').hide();
        });
    });
});

function round(v,e)
{
    var t=1;
    for(;e>0;t*=10,e--);
    for(;e<0;t/=10,e++);
    return Math.round(v*t)/t;
}