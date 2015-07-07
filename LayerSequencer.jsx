{
    app.beginUndoGroup("Layer Sequencer by Daniel Weckert");
 
    var selectedLayers = "test";
    


var dlg = new Window("dialog {alignChildren:['left', 'top']}", "LayerSequencer Settings");


dlg.alertBtnsPnlMode = dlg.add("panel {orientation: 'row', text: 'Move layers relative to'}", undefined, "Move layers relative to");
dlg.alertBtnsPnlMode.alignCurrentRb = dlg.alertBtnsPnlMode.add("radiobutton", undefined, "Current Position"); 
dlg.alertBtnsPnlMode.alignStartRb = dlg.alertBtnsPnlMode.add("radiobutton", undefined, "Composition start");
dlg.alertBtnsPnlMode.alignCursorRb = dlg.alertBtnsPnlMode.add("radiobutton", undefined, "Cursor");
dlg.alertBtnsPnlMode.alignCurrentRb.value = true;

dlg.alertBtnsPnlDistance = dlg.add("panel {orientation: 'row', text: 'Distance'}", undefined, "Distance");
dlg.alertBtnsPnlDistance.titleSt = dlg.alertBtnsPnlDistance.add("statictext", undefined, "Distance in frames:");
dlg.alertBtnsPnlDistance.msgEt = dlg.alertBtnsPnlDistance.add("edittext {characters: 5, text: '25', alignment: 'right'}", undefined, "25");

dlg.alertBtnsPnlOutpoint = dlg.add("panel {orientation: 'row', text: 'Layerend'}", undefined, "Layerend");
dlg.alertBtnsPnlOutpoint.moveEndRb = dlg.alertBtnsPnlOutpoint.add("radiobutton", undefined, "move end with start"); 
dlg.alertBtnsPnlOutpoint.pinEndRb = dlg.alertBtnsPnlOutpoint.add("radiobutton", undefined, "pin end to current position");
dlg.alertBtnsPnlOutpoint.moveEndRb.value = true;

dlg.alertBtnsPnlGrouping = dlg.add("panel {orientation: 'row', text: 'Grouping'}", undefined, "Grouping");
dlg.alertBtnsPnlGrouping.titleSt = dlg.alertBtnsPnlGrouping.add("statictext", undefined, "number of grouped layers:");
dlg.alertBtnsPnlGrouping.msgEt = dlg.alertBtnsPnlGrouping.add("edittext {characters: 5, text: '1', alignment: 'right'}", undefined, "1");

dlg.btnPnlStartCancel = dlg.add("panel {orientation: 'row', text: 'Run LayerSequencer'}", undefined, "Run LayerSequencer");
dlg.btnPnlStartCancel.cancelBtn = dlg.btnPnlStartCancel.add("button", undefined, "Cancel",{name:"cancel"});
dlg.btnPnlStartCancel.runBtn = dlg.btnPnlStartCancel.add("button", undefined, "Run",{name:"run"});



dlg.btnPnlStartCancel.runBtn.onClick = function(){

        var frameLength = 1/app.project.activeItem.frameRate;
        
        //read value from GUI
        var realtiveToCurrent = dlg.alertBtnsPnlMode.alignCurrentRb.value;
        var relativeToStart = dlg.alertBtnsPnlMode.alignStartRb.value;
        var relativeToCursor = dlg.alertBtnsPnlMode.alignCursorRb.value;
        
        var pinEnd = dlg.alertBtnsPnlOutpoint.pinEndRb.value;
        
        var distance = parseFloat(dlg.alertBtnsPnlDistance.msgEt.text);
        if (isNaN(distance)) {
            distance = 0;
            }
        dlg.alertBtnsPnlDistance.msgEt.text = distance;
        
        var groupSize = parseInt(dlg.alertBtnsPnlGrouping.msgEt.text);
        if (isNaN(groupSize)) {
            groupSize = 1;
            }
        if (groupSize < 1) {
            groupSize = 1;
            }
        groupSize = Math.floor(groupSize);
        dlg.alertBtnsPnlGrouping.msgEt.text = groupSize
        
        
        //alert(distance*2);
        //parseInt(thisComp.layer("text layer").text.sourceText)
        //parseFloat(thisComp.layer("text layer").text.sourceText)

        //run script
            var activeItem = app.project.activeItem; 
            var currentTime = app.project.activeItem.time;
            //alert(currentTime);

            if (activeItem == null || !(activeItem instanceof CompItem)){
            alert("Please establish a comp as the active item, select the layers you want to sequence and run the script again");
            } else {
                var selectedLayers = app.project.activeItem.selectedLayers;

                for(i = 0;i < selectedLayers.length;i++){
                    
                    var oldOut = selectedLayers[i].outPoint;
                    var oldStart = selectedLayers[i].startTime;
                    
                    if(realtiveToCurrent) {
                        selectedLayers[i].startTime=selectedLayers[i].startTime+Math.floor(i/groupSize)*distance*frameLength;
                    }
                
                    if(relativeToStart) {
                        selectedLayers[i].startTime=Math.floor(i/groupSize)*distance*frameLength;
                    }
                
                    if(relativeToCursor) {
                        selectedLayers[i].startTime=currentTime+Math.floor(i/groupSize)*distance*frameLength;
                        
                    }
                
                    if (pinEnd){
                            if(oldOut  <selectedLayers[i].startTime){ //wenn outpoint vor inpoint liegen würde, Länge auf 1 Frame setzen
                                    selectedLayers[i].outPoint = selectedLayers[i].startTime + (distance*frameLength);
                            } else {
                                    selectedLayers[i].outPoint = oldOut;
                            }
                    }

                }
            }
        
        
        //Exit Script
        //dlg.hide();
}


dlg.credit = dlg.add("statictext", undefined, "created by Daniel Weckert");

dlg.show();


    
    app.endUndoGroup();
 }
