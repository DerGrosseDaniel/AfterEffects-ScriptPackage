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

dlg.btnPnlStartCancel = dlg.add("panel {orientation: 'row', text: 'Run LayerSequencer'}", undefined, "Run LayerSequencer");
dlg.btnPnlStartCancel.cancelBtn = dlg.btnPnlStartCancel.add("button", undefined, "Exit",{name:"cancel"});
dlg.btnPnlStartCancel.runBtn = dlg.btnPnlStartCancel.add("button", undefined, "Run",{name:"run"});



dlg.btnPnlStartCancel.runBtn.onClick = function(){
        //read value from GUI
        var realtiveToCurrent = dlg.alertBtnsPnlMode.alignCurrentRb.value;
        var relativeToStart = dlg.alertBtnsPnlMode.alignStartRb.value;
        var relativeToCursor = dlg.alertBtnsPnlMode.alignCursorRb.value;
        
        var pinEnd = dlg.alertBtnsPnlOutpoint.pinEndRb.value;
        
        var distance = parseFloat(dlg.alertBtnsPnlDistance.msgEt.text);
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
                        selectedLayers[i].startTime=selectedLayers[i].startTime+i*distance/app.project.activeItem.frameRate;
                    }
                
                    if(relativeToStart) {
                        selectedLayers[i].startTime=i*distance/app.project.activeItem.frameRate;
                    }
                
                    if(relativeToCursor) {
                        selectedLayers[i].startTime=currentTime+i*distance/app.project.activeItem.frameRate;
                        
                    }
                
                    if (pinEnd){
                            if(oldOut  <selectedLayers[i].startTime){ //wenn outpoint vor inpoint liegen würde, Länge auf 1 Frame setzen
                                    selectedLayers[i].outPoint = selectedLayers[i].startTime + (distance/app.project.activeItem.frameRate)
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
