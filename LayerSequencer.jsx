var panelGlobal = this;

/*
Code for Import https://scriptui.joonas.me — (Triple click to select): 
{"activeId":5,"items":{"item-0":{"id":0,"type":"Dialog","parentId":false,"style":{"enabled":true,"varName":"myPanel","windowType":"Palette","creationProps":{"su1PanelCoordinates":false,"maximizeButton":false,"minimizeButton":false,"independent":false,"closeButton":true,"borderless":false,"resizeable":true},"text":"","preferredSize":[0,0],"margins":0,"orientation":"row","spacing":25,"alignChildren":["left","top"]}},"item-1":{"id":1,"type":"Group","parentId":0,"style":{"enabled":true,"varName":"left","preferredSize":[0,0],"margins":0,"orientation":"column","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-2":{"id":2,"type":"Group","parentId":0,"style":{"enabled":true,"varName":"right","preferredSize":[0,0],"margins":0,"orientation":"column","spacing":10,"alignChildren":["fill","center"],"alignment":null}},"item-3":{"id":3,"type":"Group","parentId":1,"style":{"enabled":true,"varName":"line1L","preferredSize":[0,26],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-4":{"id":4,"type":"StaticText","parentId":3,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"move relative to","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-5":{"id":5,"type":"DropDownList","parentId":3,"style":{"enabled":true,"varName":"moveMode","text":"DropDownList","listItems":"Cursor,  Current position, Comp start","preferredSize":[0,0],"alignment":null,"selection":0,"helpTip":""}},"item-6":{"id":6,"type":"Group","parentId":2,"style":{"enabled":true,"varName":"line1R","preferredSize":[0,26],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-7":{"id":7,"type":"StaticText","parentId":3,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"move Out","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-8":{"id":8,"type":"DropDownList","parentId":3,"style":{"enabled":true,"varName":"outMode","text":"DropDownList","listItems":"move Out, pin Out","preferredSize":[0,0],"alignment":null,"selection":0,"helpTip":null}},"item-9":{"id":9,"type":"Group","parentId":1,"style":{"enabled":true,"varName":"line2L","preferredSize":[0,26],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-10":{"id":10,"type":"StaticText","parentId":9,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"frames to move    ","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-11":{"id":11,"type":"EditText","parentId":9,"style":{"enabled":true,"varName":"numFrames","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"10","justify":"left","preferredSize":[30,0],"alignment":null,"helpTip":null}},"item-12":{"id":12,"type":"Button","parentId":9,"style":{"enabled":true,"varName":"framesPlus","text":"+","justify":"center","preferredSize":[30,25],"alignment":null,"helpTip":null}},"item-13":{"id":13,"type":"Button","parentId":9,"style":{"enabled":true,"varName":"framesMinus","text":"-","justify":"center","preferredSize":[30,25],"alignment":null,"helpTip":null}},"item-14":{"id":14,"type":"Button","parentId":9,"style":{"enabled":true,"varName":"framesOne","text":"1","justify":"center","preferredSize":[30,25],"alignment":null,"helpTip":null}},"item-15":{"id":15,"type":"Button","parentId":9,"style":{"enabled":true,"varName":"framesFive","text":"5","justify":"center","preferredSize":[30,25],"alignment":null,"helpTip":null}},"item-16":{"id":16,"type":"Button","parentId":9,"style":{"enabled":true,"varName":"framesTen","text":"10","justify":"center","preferredSize":[30,25],"alignment":null,"helpTip":null}},"item-17":{"id":17,"type":"Group","parentId":2,"style":{"enabled":true,"varName":"line2R","preferredSize":[0,27],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-18":{"id":18,"type":"StaticText","parentId":28,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Group layers","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-19":{"id":19,"type":"EditText","parentId":28,"style":{"enabled":true,"varName":"groupCount","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"1","justify":"left","preferredSize":[30,0],"alignment":null,"helpTip":null}},"item-20":{"id":20,"type":"Button","parentId":28,"style":{"enabled":true,"varName":"groupPlus","text":"+","justify":"center","preferredSize":[30,0],"alignment":null,"helpTip":null}},"item-21":{"id":21,"type":"Button","parentId":28,"style":{"enabled":true,"varName":"groupMinus","text":"-","justify":"center","preferredSize":[30,0],"alignment":null,"helpTip":null}},"item-22":{"id":22,"type":"Group","parentId":2,"style":{"enabled":true,"varName":"line3R","preferredSize":[0,27],"margins":0,"orientation":"row","spacing":10,"alignChildren":["center","center"],"alignment":null}},"item-23":{"id":23,"type":"Checkbox","parentId":17,"style":{"enabled":true,"varName":"forceOnFrame","text":"force positions on exact frames","preferredSize":[0,0],"alignment":null,"helpTip":null,"checked":false}},"item-24":{"id":24,"type":"Group","parentId":1,"style":{"enabled":true,"varName":"line3L","preferredSize":[0,26],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-25":{"id":25,"type":"StaticText","parentId":24,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Layer distribution","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-26":{"id":26,"type":"Group","parentId":2,"style":{"enabled":true,"varName":"line4R","preferredSize":[0,27],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-27":{"id":27,"type":"Button","parentId":37,"style":{"enabled":true,"varName":"everythingToCursor","text":"Everything back to cursor","justify":"center","preferredSize":[200,0],"alignment":null,"helpTip":null}},"item-28":{"id":28,"type":"Group","parentId":1,"style":{"enabled":true,"varName":"line4L","preferredSize":[0,26],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","bottom"],"alignment":null}},"item-29":{"id":29,"type":"Button","parentId":36,"style":{"enabled":true,"varName":"apply","text":"Apply","justify":"center","preferredSize":[250,0],"alignment":null,"helpTip":null}},"item-30":{"id":30,"type":"IconButton","parentId":24,"style":{"enabled":true,"varName":"distributionLinear","text":"","preferredSize":[0,0],"creationProps":{"style":"toolbutton","toggle":false},"iconButtonStroke":false,"image":["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAQCAYAAAB3AH1ZAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAXElEQVRIidWSyQ0AIAgE0dh/EdRHD1jBSiQcOl8fTGYdqkqdzNbrRLSyDzDzMXG6gIgc30f3HwgrYKVOF7BSI/6bwJs6TMCbGvHuBNGprwWiUyP6J6hKDQWqUiM2g7UrbsfDfYMAAAAASUVORK5CYIJCYII="],"alignment":null,"helpTip":null}},"item-31":{"id":31,"type":"IconButton","parentId":24,"style":{"enabled":true,"varName":"distributionCLoser","text":"","preferredSize":[0,0],"creationProps":{"style":"toolbutton","toggle":false},"iconButtonStroke":false,"image":["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAQCAYAAAB3AH1ZAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAX0lEQVRIid2Suw0AIAgFwbj/EMzHDliZ2EDU8Ilea8HlnigiUEkrvQ4APeMIEamZUwSYWX3D6j8QWsBKnyJgpZ/8N8FO9lCBnewrb05wmtld4DSzRf0EnjmvBDxz3jAAqCMrbhGIA04AAAAASUVORK5CYIKC"],"alignment":null,"helpTip":null}},"item-32":{"id":32,"type":"IconButton","parentId":24,"style":{"enabled":true,"varName":"distributionFurther","text":"","preferredSize":[0,0],"creationProps":{"style":"toolbutton","toggle":false},"iconButtonStroke":false,"image":["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAQCAYAAAB3AH1ZAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAX0lEQVRIic3SwQ3AIAxD0U/F/kNkvuwQrpV6aCIRjM8IrGdGRKDMI30dmB2XmlmataWAu6fPDvUfKAtUeFsKVHgzuW+C3cTlAruJ/3LHBKfZPwVOs7+jn0DJDzCV/AALdesrbmd70iMAAAAASUVORK5CYIKC"],"alignment":null,"helpTip":null}},"item-33":{"id":33,"type":"EditText","parentId":24,"style":{"enabled":true,"varName":"distributionFactor","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"1","justify":"left","preferredSize":[30,0],"alignment":null,"helpTip":null}},"item-34":{"id":34,"type":"Button","parentId":36,"style":{"enabled":true,"varName":"applyRandom","text":"Apply random","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-35":{"id":35,"type":"Slider","parentId":22,"style":{"enabled":true,"varName":"distributionSlider","preferredSize":[200,0],"alignment":"fill","helpTip":null}},"item-36":{"id":36,"type":"Group","parentId":1,"style":{"enabled":true,"varName":"line5L","preferredSize":[0,26],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","bottom"],"alignment":null}},"item-37":{"id":37,"type":"Group","parentId":2,"style":{"enabled":true,"varName":"line5R","preferredSize":[0,26],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-39":{"id":39,"type":"StaticText","parentId":26,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"group start at","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-40":{"id":40,"type":"DropDownList","parentId":26,"style":{"enabled":true,"varName":"groupGrouping","text":"DropDownList","listItems":"automatic, earliest layer, first layer, last layer","preferredSize":[0,0],"alignment":null,"selection":0,"helpTip":null}},"item-41":{"id":41,"type":"Button","parentId":9,"style":{"enabled":true,"varName":"framesOneMinus","text":"-1","justify":"center","preferredSize":[30,25],"alignment":null,"helpTip":null}}},"order":[0,1,3,4,5,7,8,9,10,11,13,12,14,15,16,41,24,25,31,30,32,33,28,18,19,21,20,36,29,34,2,6,17,23,22,35,26,39,40,37,27],"settings":{"importJSON":true,"indentSize":false,"cepExport":false,"includeCSSJS":true,"showDialog":true,"functionWrapper":false,"afterEffectsDockable":true,"itemReferenceList":"None"}}
*/ 

// MYPANEL
// =======
var myPanel = (panelGlobal instanceof Panel) ? panelGlobal : new Window("palette", undefined, undefined, {resizeable: true}); 
    myPanel.orientation = "row"; 
    myPanel.alignChildren = ["left","top"]; 
    myPanel.spacing = 25; 
    myPanel.margins = 0; 

// LEFT
// ====
var left = myPanel.add("group", undefined, {name: "left"}); 
    left.orientation = "column"; 
    left.alignChildren = ["left","center"]; 
    left.spacing = 10; 
    left.margins = 0; 

// LINE1L
// ======
var line1L = left.add("group", undefined, {name: "line1L"}); 
    line1L.preferredSize.height = 26; 
    line1L.orientation = "row"; 
    line1L.alignChildren = ["left","center"]; 
    line1L.spacing = 10; 
    line1L.margins = 0; 

var statictext1 = line1L.add("statictext", undefined, undefined, {name: "statictext1"}); 
    statictext1.text = "move relative to"; 

var moveMode_array = ["Cursor","Current position","Comp start"]; 
var moveMode = line1L.add("dropdownlist", undefined, undefined, {name: "moveMode", items: moveMode_array}); 
    moveMode.selection = 0; 

var statictext2 = line1L.add("statictext", undefined, undefined, {name: "statictext2"}); 
    statictext2.text = "move Out"; 

var outMode_array = ["move Out","pin Out"]; 
var outMode = line1L.add("dropdownlist", undefined, undefined, {name: "outMode", items: outMode_array}); 
    outMode.selection = 0; 

// LINE2L
// ======
var line2L = left.add("group", undefined, {name: "line2L"}); 
    line2L.preferredSize.height = 26; 
    line2L.orientation = "row"; 
    line2L.alignChildren = ["left","center"]; 
    line2L.spacing = 10; 
    line2L.margins = 0; 

var statictext3 = line2L.add("statictext", undefined, undefined, {name: "statictext3"}); 
    statictext3.text = "frames to move    "; 

var numFrames = line2L.add('edittext {properties: {name: "numFrames"}}'); 
    numFrames.text = "10"; 
    numFrames.preferredSize.width = 30; 

var framesMinus = line2L.add("button", undefined, undefined, {name: "framesMinus"}); 
    framesMinus.text = "-"; 
    framesMinus.preferredSize.width = 30; 
    framesMinus.preferredSize.height = 25; 

var framesPlus = line2L.add("button", undefined, undefined, {name: "framesPlus"}); 
    framesPlus.text = "+"; 
    framesPlus.preferredSize.width = 30; 
    framesPlus.preferredSize.height = 25; 

var framesOne = line2L.add("button", undefined, undefined, {name: "framesOne"}); 
    framesOne.text = "1"; 
    framesOne.preferredSize.width = 30; 
    framesOne.preferredSize.height = 25; 

var framesFive = line2L.add("button", undefined, undefined, {name: "framesFive"}); 
    framesFive.text = "5"; 
    framesFive.preferredSize.width = 30; 
    framesFive.preferredSize.height = 25; 

var framesTen = line2L.add("button", undefined, undefined, {name: "framesTen"}); 
    framesTen.text = "10"; 
    framesTen.preferredSize.width = 30; 
    framesTen.preferredSize.height = 25; 

var framesOneMinus = line2L.add("button", undefined, undefined, {name: "framesOneMinus"}); 
    framesOneMinus.text = "-1"; 
    framesOneMinus.preferredSize.width = 30; 
    framesOneMinus.preferredSize.height = 25; 

// LINE3L
// ======
var line3L = left.add("group", undefined, {name: "line3L"}); 
    line3L.preferredSize.height = 26; 
    line3L.orientation = "row"; 
    line3L.alignChildren = ["left","center"]; 
    line3L.spacing = 10; 
    line3L.margins = 0; 

var statictext4 = line3L.add("statictext", undefined, undefined, {name: "statictext4"}); 
    statictext4.text = "Layer distribution"; 

var distributionCLoser_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%20%00%00%00%10%08%06%00%00%00w%00%7DY%00%00%00%09pHYs%00%00.%23%00%00.%23%01x%C2%A5%3Fv%00%00%00_IDATH%C2%89%C3%9D%C2%92%C2%BB%0D%00%20%08%05%C3%81%C2%B8%C3%BF%10%C3%8C%C3%87%0EX%C2%99%C3%98%40%C3%94%C3%B0%C2%89%5Ek%C3%81%C3%A5%C2%9E(%22PI%2B%C2%BD%0E%00%3D%C3%A3%08%11%C2%A9%C2%99S%04%C2%98Y%7D%C3%83%C3%AA%3F%10Z%C3%80J%C2%9F%22%60%C2%A5%C2%9F%C3%BC7%C3%81N%C3%B6P%C2%81%C2%9D%C3%AC%2BoNp%C2%9A%C3%99%5D%C3%A04%C2%B3E%C3%BD%04%C2%9E9%C2%AF%04%3Cs%C3%9E0%00%C2%A8%23%2Bn%11%C2%88%03N%00%00%00%00IEND%C2%AEB%60%C2%82%C2%82"; 
var distributionCLoser = line3L.add("iconbutton", undefined, File.decode(distributionCLoser_imgString), {name: "distributionCLoser", style: "toolbutton"}); 

var distributionLinear_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%20%00%00%00%10%08%06%00%00%00w%00%7DY%00%00%00%09pHYs%00%00.%23%00%00.%23%01x%C2%A5%3Fv%00%00%00%5CIDATH%C2%89%C3%95%C2%92%C3%89%0D%00%20%08%04%C3%91%C3%98%7F%11%C3%94G%0FX%C3%81J%24%1C%3A_%1FLf%1D%C2%AAJ%C2%9D%C3%8C%C3%96%C3%ABD%C2%B4%C2%B2%0F0%C3%B31q%C2%BA%C2%80%C2%88%1C%C3%9FG%C3%B7%1F%08%2B%60%C2%A5N%17%C2%B0R%23%C3%BE%C2%9B%C3%80%C2%9B%3AL%C3%80%C2%9B%1A%C3%B1%C3%AE%04%C3%91%C2%A9%C2%AF%05%C2%A2S%23%C3%BA'%C2%A8J%0D%05%C2%AAR%236%C2%83%C2%B5%2Bn%C3%87%C3%83%7D%C2%83%00%00%00%00IEND%C2%AEB%60%C2%82B%60%C2%82"; 
var distributionLinear = line3L.add("iconbutton", undefined, File.decode(distributionLinear_imgString), {name: "distributionLinear", style: "toolbutton"}); 

var distributionFurther_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%20%00%00%00%10%08%06%00%00%00w%00%7DY%00%00%00%09pHYs%00%00.%23%00%00.%23%01x%C2%A5%3Fv%00%00%00_IDATH%C2%89%C3%8D%C3%92%C3%81%0D%C3%80%20%0CC%C3%91O%C3%85%C3%BECd%C2%BE%C3%AC%10%C2%AE%C2%95zh%22%11%C2%8C%C3%8F%08%C2%ACgFD%C2%A0%C3%8C%23%7D%1D%C2%98%1D%C2%97%C2%9AY%C2%9A%C2%B5%C2%A5%C2%80%C2%BB%C2%A7%C3%8F%0E%C3%B5%1F(%0BTx%5B%0ATx3%C2%B9o%C2%82%C3%9D%C3%84%C3%A5%02%C2%BB%C2%89%C3%BFr%C3%87%04%C2%A7%C3%99%3F%05N%C2%B3%C2%BF%C2%A3%C2%9F%40%C3%89%0F0%C2%95%C3%BC%00%0Bu%C3%AB%2Bng%7B%C3%92%23%00%00%00%00IEND%C2%AEB%60%C2%82%C2%82"; 
var distributionFurther = line3L.add("iconbutton", undefined, File.decode(distributionFurther_imgString), {name: "distributionFurther", style: "toolbutton"}); 

var distributionFactor = line3L.add('edittext {properties: {name: "distributionFactor"}}'); 
    distributionFactor.text = "1"; 
    distributionFactor.preferredSize.width = 30; 

// LINE4L
// ======
var line4L = left.add("group", undefined, {name: "line4L"}); 
    line4L.preferredSize.height = 26; 
    line4L.orientation = "row"; 
    line4L.alignChildren = ["left","bottom"]; 
    line4L.spacing = 10; 
    line4L.margins = 0; 

var statictext5 = line4L.add("statictext", undefined, undefined, {name: "statictext5"}); 
    statictext5.text = "Group layers"; 

var groupCount = line4L.add('edittext {properties: {name: "groupCount"}}'); 
    groupCount.text = "1"; 
    groupCount.preferredSize.width = 30; 

var groupMinus = line4L.add("button", undefined, undefined, {name: "groupMinus"}); 
    groupMinus.text = "-"; 
    groupMinus.preferredSize.width = 30; 

var groupPlus = line4L.add("button", undefined, undefined, {name: "groupPlus"}); 
    groupPlus.text = "+"; 
    groupPlus.preferredSize.width = 30; 

// LINE5L
// ======
var line5L = left.add("group", undefined, {name: "line5L"}); 
    line5L.preferredSize.height = 26; 
    line5L.orientation = "row"; 
    line5L.alignChildren = ["left","bottom"]; 
    line5L.spacing = 10; 
    line5L.margins = 0; 

var apply = line5L.add("button", undefined, undefined, {name: "apply"}); 
    apply.text = "Apply"; 
    apply.preferredSize.width = 250; 

var applyRandom = line5L.add("button", undefined, undefined, {name: "applyRandom"}); 
    applyRandom.text = "Apply random"; 

// RIGHT
// =====
var right = myPanel.add("group", undefined, {name: "right"}); 
    right.orientation = "column"; 
    right.alignChildren = ["fill","center"]; 
    right.spacing = 10; 
    right.margins = 0; 

// LINE1R
// ======
var line1R = right.add("group", undefined, {name: "line1R"}); 
    line1R.preferredSize.height = 26; 
    line1R.orientation = "row"; 
    line1R.alignChildren = ["left","center"]; 
    line1R.spacing = 10; 
    line1R.margins = 0; 

// LINE2R
// ======
var line2R = right.add("group", undefined, {name: "line2R"}); 
    line2R.preferredSize.height = 27; 
    line2R.orientation = "row"; 
    line2R.alignChildren = ["left","center"]; 
    line2R.spacing = 10; 
    line2R.margins = 0; 

var forceOnFrame = line2R.add("checkbox", undefined, undefined, {name: "forceOnFrame"}); 
    forceOnFrame.text = "force positions on exact frames"; 

// LINE3R
// ======
var line3R = right.add("group", undefined, {name: "line3R"}); 
    line3R.preferredSize.height = 27; 
    line3R.orientation = "row"; 
    line3R.alignChildren = ["center","center"]; 
    line3R.spacing = 10; 
    line3R.margins = 0; 

var distributionSlider = line3R.add("slider", undefined, undefined, undefined, undefined, {name: "distributionSlider"}); 
    distributionSlider.minvalue = 0; 
    distributionSlider.maxvalue = 100; 
    distributionSlider.value = 50; 
    distributionSlider.preferredSize.width = 200; 
    distributionSlider.alignment = ["center","fill"]; 

// LINE4R
// ======
var line4R = right.add("group", undefined, {name: "line4R"}); 
    line4R.preferredSize.height = 27; 
    line4R.orientation = "row"; 
    line4R.alignChildren = ["left","center"]; 
    line4R.spacing = 10; 
    line4R.margins = 0; 

var statictext6 = line4R.add("statictext", undefined, undefined, {name: "statictext6"}); 
    statictext6.text = "group start at"; 

var groupGrouping_array = ["automatic","earliest layer","first layer","last layer"]; 
var groupGrouping = line4R.add("dropdownlist", undefined, undefined, {name: "groupGrouping", items: groupGrouping_array}); 
    groupGrouping.selection = 0; 

// LINE5R
// ======
var line5R = right.add("group", undefined, {name: "line5R"}); 
    line5R.preferredSize.height = 26; 
    line5R.orientation = "row"; 
    line5R.alignChildren = ["left","center"]; 
    line5R.spacing = 10; 
    line5R.margins = 0; 

var everythingToCursor = line5R.add("button", undefined, undefined, {name: "everythingToCursor"}); 
    everythingToCursor.text = "Everything back to cursor"; 
    everythingToCursor.preferredSize.width = 200; 

myPanel.layout.layout(true);
myPanel.layout.resize();
myPanel.onResizing = myPanel.onResize = function () { this.layout.resize(); }

if ( myPanel instanceof Window ) myPanel.show();





// ====================================================== Logic =====================================================

// ====================================================== Frames Buttons =====================================================

framesMinus.onClick = function() {     numFrames.text = parseFloat(numFrames.text) - 1  }
framesPlus.onClick = function() {     numFrames.text = parseFloat(numFrames.text) + 1  }
framesOne.onClick = function() {     numFrames.text = 1  }
framesOneMinus.onClick = function() {     numFrames.text = -1  }
framesFive.onClick = function() {     numFrames.text = 5  }
framesTen.onClick = function() {     numFrames.text = 10  }
numFrames.onChanging = function() {
    if(numFrames.text != parseFloat (numFrames.text)){    
        numFrames.text = parseFloat (numFrames.text)    
    }
    if (isNaN(parseFloat(numFrames.text))){
        numFrames.text = 1;
     }
 }

// ====================================================== Group Buttons =====================================================
groupPlus.onClick = function() {     groupCount.text = parseInt(groupCount.text) + 1  }
groupMinus.onClick = function() { 
    groupCount.text = parseInt(groupCount.text) - 1 
    if(parseInt(groupCount.text) < 1){
        groupCount.text = 1
       }
 }
groupCount.onChanging = function() {
    if(groupCount.text != Math.abs(parseInt(groupCount.text))){    
        groupCount.text = Math.abs(parseInt(groupCount.text))
    }
    if (isNaN(parseFloat(groupCount.text))){
        groupCount.text = 1;
     }
 }

// ====================================================== Distribution Sider =====================================================

distributionSlider.minvalue = 0.5; 
distributionSlider.maxvalue = 2; 
distributionSlider.value = 1;

distributionCLoser.onClick = function() {
    distributionFactor.text = "0.85";
    distributionSlider.value = 0.85;
}

distributionFurther.onClick = function() {
    distributionFactor.text = "1.25";
    distributionSlider.value = 1.25;
}

distributionLinear.onClick = function() {
    distributionFactor.text = "1";
    distributionSlider.value = 1;
}

distributionSlider.onChanging = function() {
    distributionFactor.text = Math.round(distributionSlider.value*100)/100;
}


// ====================================================== Main Logic =====================================================

function pinOut(layer, oldOut){
    if(layer.outPoint > layer.inPoint){
         layer.outPoint = oldOut;
     }else{ //layer is time reversed
         tmpOut = layer.outPoint;
         layer.inPoint = oldOut;
         layer.outPoint = tmpOut
     }
}

function forceEverythingOnFrame(layer, frameRate){
    oldStart = layer.startTime;
    oldIn = layer.inPoint;
    oldOut = layer.outPoint
    
    //calculate Values
    newIn = Math.round(oldIn*frameRate)/frameRate;
    newOut = Math.round(oldOut*frameRate)/frameRate;
    newStart = Math.round(oldStart*frameRate)/frameRate;
    newIn = Math.round(newIn*frameRate)/frameRate;
    newOut = Math.round(newOut*frameRate)/frameRate;
    
    //set Values, order is important for time reversed Layers, because of after effects bug
    layer.startTime = newStart;
    layer.inPoint = newIn;
    layer.outPoint = newOut;
}
  

function applySequence(random, forceToCursor){
    
    var activeItem = app.project.activeItem;
    if (activeItem == null || !(activeItem instanceof CompItem)) {
        alert("Please establish a comp as the active item, select the layers you want to sequence and run the script again");
        return;
    }
    
    //insert checks that something is selectes 
    var selectedLayers = app.project.activeItem.selectedLayers;
    var numberOfSelectedLayers = selectedLayers.length;
    var layersPerGroup = parseInt(groupCount.text)
    var numberOfGroups = Math.ceil(selectedLayers.length/layersPerGroup)
    var frameRate = app.project.activeItem.frameRate
    var frameLength = 1/frameRate;

    //calculate earliest layer of group for automatic group start
        //array with group size
        var groupEarliestLayers = new Array(layersPerGroup);
        for(i = 0 ; i< groupEarliestLayers.length;i++)
            groupEarliestLayers[i]=0;
        //gruppen durchgehen und für alle ersten layer in der entsprechenden Zeile hochzählen
        for(gr = 0; gr < numberOfGroups; gr++){
            tmpTime = 1000000000;
            layerNum = -1;
            for(lay = 0; lay < layersPerGroup && (gr *  layersPerGroup)  + lay <   numberOfSelectedLayers ;lay  ++){
                layerIndexSelection = (gr *  layersPerGroup)  + lay
                beginning = Math.min(selectedLayers[layerIndexSelection].inPoint,selectedLayers[layerIndexSelection].outPoint)
                if(beginning < tmpTime){
                    layerNum = lay;
                    tmpTime = beginning;
                }
            }
            //alert("layer" + layerNum +"    time "+ tmpTime);
            groupEarliestLayers[layerNum]++;
         }
        //alert(groupEarliestLayers)
        //am meisten gewählte Layer number wählen (tiefere layer werden bevorzugt)
        var prominentLayerInGroups = 0;
        var tmpCounter = -1;
        for(i = 0; i< groupEarliestLayers.length;i++){
            if(groupEarliestLayers[i]>=tmpCounter){
                prominentLayerInGroups = i;
                tmpCounter = groupEarliestLayers[i];
            }
        }

    
        //set mode for groupMovement
        var groupStartMode  = groupGrouping.selection;
        if(groupStartMode == 0 && tmpCounter == 1){ //if mode is automatic but every group has another earlier layer, just get the earliest from all
            groupStartMode = 1;
         }
        //alert(groupStartMode)
        

    //calculate group start times
    var groupStartTimes = new Array(numberOfGroups)
    if(groupStartMode == 0){ //utomatic mode
        for(i =0; i< numberOfGroups;i++){
            layerNumber = Math.min(    i*layersPerGroup + prominentLayerInGroups  ,  numberOfSelectedLayers-1)
            groupStartTimes[i] = Math.min(selectedLayers[layerNumber].inPoint,selectedLayers[layerNumber].outPoint)
         }
     } else if(groupStartMode == 1){ //earliest Layer in group
        for(i =0; i< numberOfGroups;i++){
            groupStartTimes[i] = 100000000;
            for(j= 0; j <layersPerGroup ; j++){
                 layerNumber = Math.min(   i*layersPerGroup + j  ,  numberOfSelectedLayers-1);
                groupStartTimes[i] = Math.min(groupStartTimes[i] ,selectedLayers[layerNumber].inPoint);
                groupStartTimes[i] = Math.min(groupStartTimes[i] ,selectedLayers[layerNumber].outPoint);
            }        
        }
     } else if(groupStartMode == 2){ //firist layer in group
        for(i =0; i< numberOfGroups;i++){
            layerNumber = i*layersPerGroup;
            groupStartTimes[i] = Math.min(selectedLayers[layerNumber].inPoint,selectedLayers[layerNumber].outPoint)
         }
     } else if(groupStartMode == 3){ //last layer in group
        for(i =0; i< numberOfGroups;i++){
            layerNumber = Math.min(  (i+1)*layersPerGroup-1 ,  numberOfSelectedLayers-1)
            groupStartTimes[i] = Math.min(selectedLayers[layerNumber].inPoint,selectedLayers[layerNumber].outPoint)
         }
     }
    //alert(groupStartTimes)
 
 
    //calculate distance of seperate layers in group relative to group start
    //create array groupRelations[group number][group layer] = time difference to group start
    var groupRelations = new Array(numberOfGroups)
    for(i = 0; i< numberOfGroups; i++){
        groupRelations[i] = new Array(layersPerGroup);
        for(j = 0; j<layersPerGroup;j++){
            layerNumber = i*layersPerGroup+j;
            if(layerNumber >=numberOfSelectedLayers) //checks if there are still selected layers
                continue;
            layerStartTime = Math.min(selectedLayers[layerNumber].inPoint,selectedLayers[layerNumber].outPoint);
            //alert(layerStartTime) 
            groupRelations[i][j] = layerStartTime  -  groupStartTimes[i];
        }
        //alert(groupRelations[i])
    }
            
    //calculate array for group movement
    var distributionValue = parseFloat(distributionFactor.text)
    var groupMovements = new Array(numberOfGroups)
    groupMovements[0] = 0;
    for(i = 1; i< numberOfGroups; i++){
        groupMovements[i] = Math.pow(distributionValue,i-1);
        groupMovements[i] += groupMovements[i-1] 
    }
    
    //randomize array of group movements
    if(random){
        tmpGroupMovements = new Array(numberOfGroups)
        for( i = 0; i < numberOfGroups; i++){
            tmpIndex = Math.floor(Math.random() * (numberOfGroups-i));
            tmpGroupMovements[i] = groupMovements[tmpIndex];
            groupMovements.splice(tmpIndex,1);//removes 1 element
            }
        groupMovements = tmpGroupMovements;
        //alert(groupMovements);
     }

    
    //apply movements
    app.beginUndoGroup("Layer Sequencer");

    var framesToMove = parseFloat(numFrames.text);
    
    //alert(moveMode.selection);
    if(moveMode.selection != 1 || forceToCursor){ //movement relative to Cursor or relation to comp start
        var LayerSequenceStartTime = 0;
        if( moveMode.selection == 2) //movement relative to CompStart
            LayerSequenceStartTime = app.project.activeItem.displayStartTime; //start time of comp
        if( moveMode.selection == 0  || forceToCursor) //movement relative to Cursor
            LayerSequenceStartTime = app.project.activeItem.time; //time of cursor
        
        if(forceToCursor)
            framesToMove = 0;
        
            
        for(i = 0; i< numberOfGroups; i++){
            for(j = 0; j<layersPerGroup;j++){
                try{
                    oldOut = Math.max(selectedLayers[layerNumber].inPoint,selectedLayers[layerNumber].outPoint)
                }catch (error){}
                layerNumber = i*layersPerGroup+j;
                if(layerNumber >=numberOfSelectedLayers) //checks if there are still selected layers
                    continue;
                selectedLayers[layerNumber].startTime = LayerSequenceStartTime; //set LayerSequenceStartTime time to cursor or comp start
                selectedLayers[layerNumber].startTime -= selectedLayers[layerNumber].inPoint - selectedLayers[layerNumber].startTime //setts in point  to LayerSequenceStartTime
                if(selectedLayers[layerNumber].outPoint < selectedLayers[layerNumber].inPoint)
                    selectedLayers[layerNumber].startTime -= selectedLayers[layerNumber].outPoint - selectedLayers[layerNumber].inPoint //correkt for time reversed Layers
                selectedLayers[layerNumber].startTime += groupMovements[i]*frameLength*framesToMove; //movement defined by group
                selectedLayers[layerNumber].startTime += groupRelations[i][j]; //adds back relative position in group
                
                if(forceOnFrame.value)
                    forceEverythingOnFrame(selectedLayers[layerNumber],frameRate)
                //alert(outMode.selection)                 
                if(outMode.selection == 1) //if OutPoint is pinned
                    pinOut(selectedLayers[layerNumber], oldOut)
             
            }
        }    
        
          
        
        
    } else { //movement relative to current Group position
        //alert("move relative to current position")
        for(i = 0; i< numberOfGroups; i++){
            for(j = 0; j<layersPerGroup;j++){
                try{
                    oldOut = Math.max(selectedLayers[layerNumber].inPoint,selectedLayers[layerNumber].outPoint)
                }catch (error){}
                layerNumber = i*layersPerGroup+j;
                if(layerNumber >=numberOfSelectedLayers) //checks if there are still selected layers
                    continue;
                selectedLayers[layerNumber].startTime += groupMovements[i]*frameLength*framesToMove;
                
                if(forceOnFrame.value)
                    forceEverythingOnFrame(selectedLayers[layerNumber],frameRate)
                    
                 if(outMode.selection == 1) //if OutPoint is pinned
                    pinOut(selectedLayers[layerNumber], oldOut)
             
            }
        }    
    } 
    


    
    app.endUndoGroup();
 }

apply.onClick = function(){
    applySequence(false, false)
}

applyRandom.onClick = function(){
    applySequence(true, false)
}

everythingToCursor.onClick = function(){
    applySequence(false, true)
}





