<?php
$z[0]=Array("global","",233,261);
$z[0][4]['name']="cfg_soft_lang";
$z[1]=Array("field","",273,292);
$z[1][4]['name']="title";
$z[2]=Array("global","",293,319);
$z[2][4]['name']="cfg_webname";
$z[3]=Array("field","",359,388);
$z[3][4]['name']="keywords";
$z[4]=Array("field","",427,485);
$z[4][4]['name']="description";
$z[4][4]['function']="html2text(@me)";
$z[5]=Array("global","",502,534);
$z[5][4]['name']="cfg_templets_skin";
$z[6]=Array("include","",640,675);
$z[6][4]['filename']="head.htm";
$z[7]=Array("channel","\n		<span><a href='[field:typeurl/]'>[field:typename/]</a></span>",761,936);
$z[7][4]['currentstyle']="<span><a href='~typelink~' class='thisclass'>~typename~</a></span>";
$z[8]=Array("field","",1087,1116);
$z[8][4]['name']="position";
$z[9]=Array("list","\n				<li>\n      				[field:array runphp='yes']@me = (empty(@me['litpic']) ? \"\" : \"<a href='{@me['arcurl']}' class='preview'><img src='{@me['litpic']}'/></a>\"); [/field:array]\n					<a href=\"[field:arcurl/]\" class=\"title\">[field:title/]</a>\n					<span class=\"info\">\n						<small>日期：</small>[field:pubdate function=\"GetDateTimeMK(@me)\"/]\n						<small>点击：</small>[field:click/]\n						<small>好评：</small>[field:scores/]\n					</span>\n					<p class=\"intro\">\n						[field:description/]...\n					</p>\n				</li>\n",1184,1739);
$z[9][4]['pagesize']="10";
$z[10]=Array("pagelist","",1840,1911);
$z[10][4]['listitem']="info,index,end,pre,next,pageno";
$z[10][4]['listsize']="5";
$z[11]=Array("arclist","\n          	<li><a href=\"[field:arcurl/]\">[field:title/]</a>\n            	<p>[field:description function='cn_substr(@me,80)'/]...</p>\n            </li>",2121,2328);
$z[11][4]['flag']="c";
$z[11][4]['titlelen']="42";
$z[11][4]['row']="6";
$z[12]=Array("myad","",2434,2465);
$z[12][4]['name']="listRtPicAD";
$z[13]=Array("arclist","\n                    	<li><a href=\"[field:arcurl/]\">[field:title/]</a></li>\n                    ",2615,2761);
$z[13][4]['row']="10";
$z[13][4]['orderby']="click";
$z[14]=Array("myad","",2857,2889);
$z[14][4]['name']="listRtPicAD2";
$z[15]=Array("myad","",2990,3023);
$z[15][4]['name']="innerfooterAD";
$z[16]=Array("include","",3030,3067);
$z[16][4]['filename']="footer.htm";

?>