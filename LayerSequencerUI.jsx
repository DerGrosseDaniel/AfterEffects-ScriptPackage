//by Daniel Weckert 2015
{
    function myScript(thisObj) {
        function myScript_buildUI(thisObj) {
            var myPanel = (thisObj instanceof Panel) ? thisObj : new Window("palette", "Layer Sequencer", [0, 0, 300, 300]);


            res = "group{orientation:'column', alignment:['fill', 'top'], alignChildren:['fill', 'fill'],\
                                 modeGroup: Group{orientation:'row', alignment:['left', 'left'], alignChildren:['left', 'left'],\
                                        modeDescription: StaticText{text:'Move layers relative to:'},\
                                        modeSelector: DropDownList{properties:{items:['Current pos', 'Comp start', 'Cursor']}}\
                                        }\
                                distanceGroup: Group{orientation:'row', alignment:['left', 'left'], alignChildren:['left', 'left'],\
                                        distanceDescription: StaticText{text:'Move by x frames: '},\
                                        distance: EditText{text:'25'},\
                                        }\
                                endGroup: Group{orientation:'row', alignment:['left', 'left'], alignChildren:['left', 'left'],\
                                        endDescription: StaticText{text:'Move outPoint:'},\
                                        endSelector : DropDownList{properties:{items:['move outPoint', 'pin outPoint']}}\
                                        }\
                                layergroupingGroup: Group{orientation:'row', alignment:['left', 'left'], alignChildren:['left', 'left'],\
                                        layergroupingDescription: StaticText{text:'group x layers: '},\
                                        layergrouping: EditText{width: 100, text:'1'},\
                                        }\
                                startGroup: Group{orientation:'row', alignment:['left', 'left'], alignChildren:['left', 'left'],\
                                        startDescription: StaticText{text:'define x as start: '},\
                                        startSelector : DropDownList{properties:{items:['inPoint', 'startTime']}}\
                                        }\
                                apply: Button{text:'Apply'},\
                }";

            //Add resource string to panel
            myPanel.grp = myPanel.add(res);

            //Set default value for drop Down
            myPanel.grp.modeGroup.modeSelector.selection = 0;
            myPanel.grp.endGroup.endSelector.selection = 0;
            myPanel.grp.startGroup.startSelector.selection = 0;


            //Setup panel sizing and make panel resizable
            myPanel.layout.layout(true);
            //myPanel.grp.minimumSize = myPanel.grp.size;
            myPanel.layout.resize();
            myPanel.onResizing = myPanel.onResize = function() {
                this.layout.resize();
            }


            myPanel.grp.apply.onClick = function() {

                var frameLength = 1/app.project.activeItem.frameRate;
                
                //read GUI values
                var mode = myPanel.grp.modeGroup.modeSelector.selection;

                var distance = parseFloat(myPanel.grp.distanceGroup.distance.text);
                if (isNaN(distance)) {
                    distance = 0;
                }
                myPanel.grp.distanceGroup.distance.text = distance;

                var endMode = myPanel.grp.endGroup.endSelector.selection;

                var startMode = myPanel.grp.startGroup.startSelector.selection;

                var groupSize = parseInt(myPanel.grp.layergroupingGroup.layergrouping.text);
                if (isNaN(groupSize)) {
                    groupSize = 1;
                }
                if (groupSize < 1) {
                    groupSize = 1;
                }
                groupSize = Math.floor(groupSize);
                myPanel.grp.layergroupingGroup.layergrouping.text = groupSize

                
                var activeItem = app.project.activeItem;
                var currentTime = app.project.activeItem.time;
                


                
                if (activeItem == null || !(activeItem instanceof CompItem)) {
                    alert("Please establish a comp as the active item, select the layers you want to sequence and run the script again");
                } else {
                    var selectedLayers = app.project.activeItem.selectedLayers;
                    //alert(selectedLayers)
                    for (i = 0; i < selectedLayers.length; i++) {

                        var oldOut = selectedLayers[i].outPoint;
                        if (startMode == 0) { //use inPoint as Start
                            var oldStart = selectedLayers[i].inPoint;

                            if (mode == 0) { //realtiveToCurrent
                                selectedLayers[i].startTime = selectedLayers[i].startTime + Math.floor(i / groupSize) * distance * frameLength;
                            }

                            if (mode == 1) { //relativeToStart
                                selectedLayers[i].startTime = Math.floor(i / groupSize) * distance * frameLength - (selectedLayers[i].inPoint-selectedLayers[i].startTime);
                            }

                            if (mode == 2) { //relativeToCursor
                                selectedLayers[i].startTime = currentTime + Math.floor(i / groupSize) * distance * frameLength - (selectedLayers[i].inPoint-selectedLayers[i].startTime);

                            }

                            if (endMode == 1) { //pinEnd
                                if (oldOut < selectedLayers[i].inPoint) { //wenn outpoint vor inpoint liegen würde, Länge auf 1 Frame setzen
                                    selectedLayers[i].outPoint = selectedLayers[i].inPoint + (1 * frameLength);
                                } else {
                                    selectedLayers[i].outPoint = oldOut;
                                }
                            }
                        } else { //use StartTime as Start
                            var oldStart = selectedLayers[i].startTime;
                            if (mode == 0) { //realtiveToCurrent
                                selectedLayers[i].startTime = selectedLayers[i].startTime + Math.floor(i / groupSize) * distance * frameLength;
                            }

                            if (mode == 1) { //relativeToStart
                                selectedLayers[i].startTime = Math.floor(i / groupSize) * distance * frameLength;
                            }

                            if (mode == 2) { //relativeToCursor
                                selectedLayers[i].startTime = currentTime + Math.floor(i / groupSize) * distance * frameLength;

                            }

                            if (endMode == 1) { //pinEnd
                                if (oldOut < selectedLayers[i].startTime) { //wenn outpoint vor inpoint liegen würde, Länge auf 1 Frame setzen
                                    selectedLayers[i].outPoint = selectedLayers[i].startTime + (1 * frameLength);
                                } else {
                                    selectedLayers[i].outPoint = oldOut;

                                }
                            }
                        }
                    }
                }
            }


            return myPanel;
        }


        var myScriptPal = myScript_buildUI(thisObj);


        if ((myScriptPal != null) && (myScriptPal instanceof Window)) {
            myScriptPal.center();
            myScriptPal.show();
        }
    }


    myScript(this);
}
